## An example of Browserify not recognizing a module bundled by Browserify.

I have been trying to see how to package up node modules in a bundle separate from my own bundle, but cannot understand why it will not work.

To try it out :

     npm run brfy
     
To clean back to original state

     npm run clean-all

To see the problem, open the file  `public/index.html`  in a browser, and check the console.

Also look at the generated file `public/boop.js`, `public/boop.js` and  `public/common.js`.

![File Structure](https://raw.githubusercontent.com/FleetingClouds/brfy-issue-example/master/uml.png)

Last line of `public/boop.js`:

     },{"./robot.js":"/robot.js"}]},{},[1]);

Last line of `public/beep.js`:

     },{"./robot.js":"/robot.js","uniq":"uniq"}]},{},[1]);

Last lines of `public/common.js`:

     },{}],"/robot.js":[function(require,module,exports){
     var uniq = require('uniq');
     module.exports = function wobot (s) { return uniq(s) };
     //
     },{"uniq":1}]},{},[]);
     

