from PIL import Image

def remove_white_bg(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert('RGBA')
    datas = img.getdata()

    newData = []
    # threshold for 'white'
    threshold = 230
    for item in datas:
        # Check if r, g, b are all above threshold
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            # Change all white (also shades of whites)
            # pixels to transparent
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, 'PNG')

remove_white_bg(r'c:\Users\ANANYA ANAND\Desktop\ktu_redesign\new logo.png', r'public\ktu_logo_transparent.png')
