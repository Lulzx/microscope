The JSX components are called into each other using CommonJS with the "require" syntax. I thought about using import/export statements from ECMAScript 6, but I'd already had enough of a hassle getting webpack to build the project correctly with CommonJS. Adding another transpilation step was just going to be too much of a headache.

The project structure, server boilerplate, and webpack configuration are cobbled together from a bunch of sources. I can't quite remember where they all came from exactly: blogs, the official React Tutorials, StackOverflow, you name it I probably came across it and dragged another piece into place. 

It's honestly a little bit of cargo cult programming, plus some guess and check when build steps break. I haven't found the right tool (or really any) for debugging broken React deployments; its frustrating losing time to simple bugs, syntax errors, or just general lack of knowledge. If the webpack statement or React console log are vague (and they often are) I can be set back an hour or more while I look into what broke the build and if I'm fortunate *why* it broke the build.

Finding bugs was slowest in the beginning when I had few or no commits to step through to check what was wrong. Initial setup and configuration was also challenging just on the lack of documentation out there. The most serious case of cargo cult programming in this project is the webpack config. It works, I don't know why, it came from many different sources and was whittled down to what it is now through trial and error. And it's the main reason I'm sticking with CommonJS right now, I don't know if I want to spend the time reconfiguring something that already (somewhat mysteriously) works.

*i mean, it's a readme, it should tell you what the app is, what its features are, and what its known limits are*
 
https://www.terlici.com/2015/03/18/fast-react-loading-server-rendering.html

https://www.smashingmagazine.com/2016/03/server-side-rendering-react-node-express/

https://github.com/mhart/react-server-example

http://redux.js.org/docs/recipes/ServerRendering.html

http://expressjs.com/en/guide/using-middleware.html //this is the main one