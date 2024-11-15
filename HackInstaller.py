import os
import random
from winotify import Notification
import customtkinter
from PIL import Image
import wget

desktop = os.path.join(os.path.join(os.environ['USERPROFILE']), 'Desktop') 

timesLooping = 999

def DownloadHacksButton():
    print("Download Hacks button was pressed")
    for i in range(timesLooping):
        url="https://i.ytimg.com/vi/qyBzJw0z2yg/maxresdefault.jpg"
        wget.download(url)
        img = Image.open(wget.download(url))
        img.show()
        toast = Notification(app_id="Hacks",
                     title="Hacks",
                     msg="Hacks are being installed",
                     duration="short")
        toast.show()
        print("Hacks installed")

        os.chdir(desktop)
        os.mkdir(str(i))
        print("running")




app = customtkinter.CTk()
customtkinter.set_appearance_mode("dark")
app.title("Hack Installer")
app.geometry("400x150")
app.grid_columnconfigure((0), weight=1)

button = customtkinter.CTkButton(app, text="Download Hacks", command=DownloadHacksButton)
button.grid(row=0, column=0, padx=20, pady=50, sticky="ew", columnspan=2)

app.mainloop()
