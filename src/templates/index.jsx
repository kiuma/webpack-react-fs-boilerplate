/* global process */
import ReactDomServer from "react-dom/server";
import React from "react";
import Html from "./_base/baseTemplate.jsx";

const dictionary = {
    title: 'Index '
};

class Index extends React.Component {
    render() {
        return <Html title={dictionary.title}>
        <header>
            <h1>{dictionary.title}</h1>
            <nav><a href="it/index.html">Italian</a></nav>
        </header>
        <section className="component-container">
            <h3>Componet called without parameters</h3>
            <div data-rcomp="App"></div>
        </section>
        <section className="component-container">
            <h3>Componet called with parameters</h3>
            <div data-rcomp="App" data-rattr='{"title": "Test component"}'></div>
        </section>
        </Html>;
    }
}
const html = ReactDomServer.renderToStaticMarkup(<Index/>);
module.exports = html;