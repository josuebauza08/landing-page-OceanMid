from PIL import Image

def remove_white_bg(img_path):
    img = Image.open(img_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    # threshold for white
    for item in datas:
        # Check if the pixel is white or very close to white
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(img_path, "PNG")
    print("Background removed successfully!")

remove_white_bg("src/assets/logo.png")
