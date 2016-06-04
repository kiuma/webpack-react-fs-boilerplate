WebPack React Full Stack Boilerplate
==================================
Description
----------

This is a boilerplate to help the creation of
[React](https://facebook.github.io/react/) based projects
with [Webpack](https://webpack.github.io/).

There are artifacts to build an application script
with [SASS](http://sass-lang.com/) based css.

Html files are generated as well from React templates,
so the need for learning extra libraries is limited.

- _src/app_ contains application assets
- _src/templates_ contains the sources of html pages.
    These are jsx files that render React components to string.
    [HtmlWebpackPlugin](https://github.com/ampedandwired/html-webpack-plugin) transforms these strings into html files that
    are written into build directory keeping directory names and
    structure relative to "templates" dir.
- _src/dev_ contains the artifacts used by webpack.
    _src/dev/pagesDefinition.js_ in particular exposes the aplication
    page structure: an entry like "it/index" will render the exported
    string of _src/templates/it/index.jsx_ to _build/it/index.html_.

Usage
-----

Clone this repository and remove .git folder.

Fix package.json with proper name and description.

Use the following commands

- **npm run clean**: Clean build directory
- **npm run build**: Creates a production ready React application
- **npm run start**: Starts a React dev server, this server supports
 [HMR](http://webpack.github.io/docs/hot-module-replacement-with-webpack.html) and live reload on template changes.

Start coding.

License
-------

[MIT](LICENSE)