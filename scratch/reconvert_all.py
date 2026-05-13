
from PIL import Image
import os

images = [
    (r"C:\Users\Lenovo\.gemini\antigravity\brain\1307bded-0034-48be-8c08-7d49c5333c3a\media__1778699905639.png", "guarda-corpo.webp"),
    (r"C:\Users\Lenovo\.gemini\antigravity\brain\1307bded-0034-48be-8c08-7d49c5333c3a\media__1778699912906.png", "espelhos.webp"),
    (r"C:\Users\Lenovo\.gemini\antigravity\brain\1307bded-0034-48be-8c08-7d49c5333c3a\media__1778699914537.png", "box-banheiro.webp"),
    (r"C:\Users\Lenovo\.gemini\antigravity\brain\1307bded-0034-48be-8c08-7d49c5333c3a\media__1778700170033.jpg", "porta-deslizante.webp"),
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
        # Tenta salvar com qualidade um pouco maior e sem otimização agressiva inicialmente
        img.save(output_path, "WEBP", quality=85)
        print(f"Convertido: {name} ({src})")
    except Exception as e:
        print(f"Erro ao converter {src}: {e}")
