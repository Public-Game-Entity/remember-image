import requests
import urllib.request 
import uuid
from PIL import Image 

SCRIPT_DIR = '/Users/hhj/Documents/remember-image/script'

pageIndex = 14
r = requests.get('https://pixabay.com/api/?key=8360759-f7cbcac000e5f5123abe9673c&q=nature&image_type=photo&page='+str(pageIndex))
getImage = r.json()


for index in range(len(getImage['hits'])):
    url = getImage['hits'][index]['largeImageURL']
    imageUUID = str(index + 80)
    savedUrl = SCRIPT_DIR+"/data/"+imageUUID+".jpg"

    data = requests.get(url).content 
    f = open(savedUrl,'wb') 
    f.write(data) 
    f.close() 

    image = Image.open(savedUrl) 
    image.save(SCRIPT_DIR+"/result/"+imageUUID+'.webp', 'webp', optimize = True, quality = 70)
