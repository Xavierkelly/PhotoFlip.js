# PhotoFlip
A simple jquery plugin that allows you to dynamically change the background image of a container or div by just stating the images in an array and the id of the background you want to change. Please star, give feedback and updates to make PhotoFlip better.
###Demo
![PhotoFlip.js ScreenShot](http://www.k-r.tech/static/img/photoflip.png "PhotoFlip.js ScreenShot")

[View Demo Site](http://photoflip.kelly.tech/)

### How to use PhotoFlip

#### Using the demo
To use the demo, you will need to

- Clone or download the repo
- Navigate to the repo location and run 'npm install' to resolve dependencies.

#### Using the plugin in your projects

###### Include the plugin in your page

```html 
<script src="./node_modules/jquery/dist/jquery.min.js"></script>
<script src="./src/PhotoFlip.js"></script>
```

###### Create an array for the background images
```javascript 
var images = new Array;
images[0] = "url('./img/bg1.png')";
images[1] = "url('./img/bg2.png')";
images[2] = "url('./img/bg3.png')";
images[3] = "url('./img/bg4.png')";
```

###### Initialize the plugin with any options
```javascript
$("#backgroundChanger").PhotoFlip({'interval' : 1000}, images);
```

That's it!

### Options

Four options are available for your customisation:

- 'interval' : The interval of time between changes. Declared in milliseconds (3000 is 3 seconds).
- 'backgroundSize' : CSS background size property. 
- 'repeat' : CSS background repeat property. 
- 'transitionTime' : Background image transitions time

###### Example

Options are specified in the initialization method.

```javascript
$("#backgroundChanger").PhotoFlip({
	'interval' : 1000,
	'backgroundSize' : 'contain',
	'repeat' : 'no-repeat',
	'transitionTime' : '0.6s'
}, images);
```
