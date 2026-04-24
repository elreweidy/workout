from PIL import Image, ImageDraw, ImageFont
import os

def make_icon(size, path):
    img = Image.new('RGBA', (size, size), (2, 6, 4, 255))
    draw = ImageDraw.Draw(img)
    
    # Teal circle background
    margin = size // 8
    draw.ellipse([margin, margin, size - margin, size - margin], fill=(92, 198, 200, 255))
    
    # Lightning bolt (⚡) drawn as polygon
    cx, cy = size // 2, size // 2
    s = size / 512  # scale factor
    bolt = [
        (cx - 30*s, cy - 100*s),
        (cx + 50*s, cy - 10*s),
        (cx + 5*s, cy - 10*s),
        (cx + 30*s, cy + 100*s),
        (cx - 50*s, cy + 10*s),
        (cx - 5*s, cy + 10*s),
    ]
    draw.polygon(bolt, fill=(2, 6, 4, 255))
    
    img.save(path, 'PNG')
    print(f"Created {path} ({size}x{size})")

icons_dir = os.path.join(os.path.dirname(__file__), 'icons')
make_icon(192, os.path.join(icons_dir, 'icon-192.png'))
make_icon(512, os.path.join(icons_dir, 'icon-512.png'))
