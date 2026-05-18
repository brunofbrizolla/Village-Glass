import os
import glob
from PIL import Image
import pillow_avif  # Register AVIF plugin with Pillow

# Directories
gallery_dir = r"c:\Users\Lenovo\Downloads\vilaggals\public\galeria"

# Find all JPEG files in the gallery folder
jpg_files = glob.glob(os.path.join(gallery_dir, "*.jpeg")) + glob.glob(os.path.join(gallery_dir, "*.jpg"))
# Sort them to have a consistent order
jpg_files.sort()

print(f"Found {len(jpg_files)} images to convert and optimize...")

converted_count = 0
for idx, src_path in enumerate(jpg_files):
    try:
        img = Image.open(src_path)
        
        # Color mode check
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
            
        # Resize: since this is a carousel/gallery, we want highly optimized images.
        # Resizing to a maximum dimension of 800px is perfect for gallery cards!
        max_size = 800
        if max(img.size) > max_size:
            ratio = max_size / float(max(img.size))
            new_size = (int(img.size[0] * ratio), int(img.size[1] * ratio))
            img = img.resize(new_size, Image.Resampling.LANCZOS)
            
        # Target filenames
        out_base = f"galeria-{idx + 1}"
        
        # Save WEBP
        webp_path = os.path.join(gallery_dir, f"{out_base}.webp")
        img.save(webp_path, "WEBP", quality=80, optimize=True)
        
        # Save AVIF
        avif_path = os.path.join(gallery_dir, f"{out_base}.avif")
        img.save(avif_path, "AVIF", quality=72)
        
        print(f"[{idx + 1}/{len(jpg_files)}] Converted: {src_path} -> {out_base}.webp/.avif")
        converted_count += 1
        
    except Exception as e:
        print(f"ERROR converting {src_path}: {e}")

print(f"\nSuccessfully converted and optimized {converted_count} gallery images!")
