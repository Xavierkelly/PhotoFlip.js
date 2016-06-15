# PhotoFlip
A jquery plugin that allows you to dynamically change the background image of a container or div.
###Demo
![PhotoFlip.js ScreenShot](https://camo2.githubusercontent.com/ee629834238033e3b88e4d785e82dcd8f266d27a/687474703a2f2f7777772e6b656c6c792e746563682f7374617469632f696d672f70686f746f666c69702e706e67 "Optional title")

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

Three options are available for your customisation:

- 'interval' : The interval of time between changes. Declared in milliseconds (3000 is 3 seconds).
- 'backgroundSize' : CSS background size property. 
- 'repeat' : CSS background repeat property. 

###### Example

Options are specified in the initialization method.

```javascript
$("#backgroundChanger").PhotoFlip({
	'interval' : 1000,
	'backgroundSize' : 'contain',
	'repeat' : 'repeat'
}, images);
```
