
from PIL import Image
import os

images = [
    (r"C:\Users\Lenovo\.gemini\antigravity\brain\1307bded-0034-48be-8c08-7d49c5333c3a\media__1778700170033.jpg", "portas-vidro.webp")
]

output_dir = r"c:\Users\Lenovo\Downloads\vilaggals\public"

for src, name in images:
    try:
        img = Image.open(src)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
        output_path = os.path.join(output_dir, name)
        img.save(output_path, "WEBP", quality=85)
        print(f"Convertido: {name}")
    except Exception as e:
        print(f"Erro: {e}")
