# PhotoFlip
A jquery plugin that allows you to dynamically change the background Image of a container or div.

### Example:
![alt tag](http://www.kelly.tech/static/img/photoflip.png)

[View Demo](http://Photoflip.Kelly.Tech) 

### External styling sheets that are needed:
- [Get Bootstrap](http://getbootstrap.com/)
- [Jquery](https://jquery.com/)
- [Google Font](https://www.google.com/fonts)

### How to Change dynamically background image of container or div with JavaScript

###### Create new array for image*/
```javascript 
images = new Array;
```

###### Initialize with your image
```javascript
images[0] = "url('https://newevolutiondesigns.com/images/freebies/nature-hd-background-10.jpg')";
images[1] = "url('http://hdwallpapersd.com/wp-content/uploads/2015/09/Blue-Nature-Background.jpg')";
images[2] = "url('http://e2ua.com/data/wallpapers/29/WDF_767877.jpg')";
images[3] = "url('https://wallpaperscraft.com/image/nature_mountains_sky_lake_clouds_81150_2048x1152.jpg')";
images[4] = "url('http://www.twitrcovers.com/wp-content/uploads/2013/04/Mountains-Clouds-Landscapes-l.jpg')";
images[5] = "url('http://www.wallpapersonview.com/wallpapers/4/landscape_wonderful_nature_quality_mountain_background_picture-120.jpg')";
images[6] = "url('http://www.amazingwallpaperz.com/wp-content/uploads/Scenic-Mountain-Background-HD-Wallpapers.jpg')";
images[7] = "url('http://cdn.pcwallart.com/images/wyoming-mountains-wallpaper-3.jpg')";
```

###### Set the interval between Image change
```javascript
setInterval(function() {changeImage()},5000);
x = 0;
function changeImage() {
document.body.style.backgroundImage = images[x];
if (x<7) {
x+=1;
}
else if (x=8) {
x=0;
}
}
```
