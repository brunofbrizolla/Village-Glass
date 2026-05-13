
from PIL import Image
import os

images = [
    (r"C:\Users\Lenovo\.gemini\antigravity\brain\1307bded-0034-48be-8c08-7d49c5333c3a\media__1778700716759.jpg", "sacadas.webp"),
    (r"C:\Users\Lenovo\.gemini\antigravity\brain\1307bded-0034-48be-8c08-7d49c5333c3a\media__1778701053900.jpg", "manutencao.webp")
]

output_dir = r"c:\Users\Lenovo\Downloads\vilaggals\public"

for src, name in images:
    if not os.path.exists(src):
        print(f"Arquivo não encontrado: {src}")
        continue
    try:
        img = Image.open(src)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
        
        output_path = os.path.join(output_dir, name)
        img.save(output_path, "WEBP", quality=80, optimize=True)
        print(f"Convertido: {name}")
    except Exception as e:
        print(f"Erro ao converter {src}: {e}")
