import os
from PIL import Image
import pillow_avif  # Register AVIF plugin with Pillow

# Directories
public_dir = r"c:\Users\Lenovo\Downloads\vilaggals\public"

# Conversion mapping: (Source filename in public_dir, base_output_name_without_ext)
image_mappings = [
    ("box.jpeg", "box-banheiro"),
    ("espelho.jpeg", "espelhos"),
    ("guARDA CORPO.jpeg", "guarda-corpo"),
    ("sacada.jpeg", "sacadas"),
    ("MANUTENÇAO mola aérea .jpeg", "manutencao-mola-aerea"),
    ("mola de piso entra em manutenção.jpeg", "manutencao-mola-piso")
]

print("Starting image conversion and optimization...")

for src_name, out_base in image_mappings:
    src_path = os.path.join(public_dir, src_name)
    if not os.path.exists(src_path):
        print(f"ERROR: Source file not found: {src_path}")
        continue
    
    try:
        # Open image
        img = Image.open(src_path)
        print(f"\nProcessing '{src_name}': dimensions={img.size}, format={img.format}, mode={img.mode}")
        
        # Keep original color mode, but convert to RGB if it has transparency/alpha for JPEG compatibility,
        # or if we are going to webp/avif, keep it RGB for maximum safety.
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
            
        # Target sizes - let's make sure we have a highly optimized size
        # If the image is extremely large, we can resize it to max 1200px width/height to keep it high quality but optimized
        max_size = 1200
        if max(img.size) > max_size:
            ratio = max_size / float(max(img.size))
            new_size = (int(img.size[0] * ratio), int(img.size[1] * ratio))
            img = img.resize(new_size, Image.Resampling.LANCZOS)
            print(f"  Resized to {img.size}")
            
        # Save as WEBP
        webp_path = os.path.join(public_dir, f"{out_base}.webp")
        img.save(webp_path, "WEBP", quality=82, optimize=True)
        print(f"  Saved WEBP: {webp_path} ({os.path.getsize(webp_path)} bytes)")
        
        # Save as AVIF
        avif_path = os.path.join(public_dir, f"{out_base}.avif")
        img.save(avif_path, "AVIF", quality=75)
        print(f"  Saved AVIF: {avif_path} ({os.path.getsize(avif_path)} bytes)")
        
    except Exception as e:
        print(f"  ERROR processing {src_name}: {e}")

print("\nImage conversion and optimization complete!")
