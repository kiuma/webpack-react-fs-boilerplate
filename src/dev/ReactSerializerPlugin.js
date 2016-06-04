"use strict";
import jsdom from "jsdom";
import ReactDomServer from "react-dom/server";
import components from "../app/components/main.js";

function ReactSerializerPlugin(options) {
    // Configure your plugin with options...
}

ReactSerializerPlugin.prototype.apply = function(compiler) {
    compiler.plugin('compilation', function(compilation) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
            let start = Date.now();
            let document = jsdom.jsdom(htmlPluginData),
                rcompRootNodes = document.querySelectorAll("[data-rcomp]");
            Array.prototype.forEach.call(
                rcompRootNodes,
                (item)=> {
                    let rcomp = item.getAttribute('data-rcomp');
                    if (rcomp) {
                        item.innerHTML = ReactDomServer.renderToString(components[rcomp]())
                    }
                }
            );
            htmlPluginData =  jsdom.serializeDocument(document);
            let elapsed = Date.now() - start;
            console.log(`parsed and serialized in ${elapsed} millis.`);
            callback(null, htmlPluginData);
        });
    });

};

export default ReactSerializerPlugin;