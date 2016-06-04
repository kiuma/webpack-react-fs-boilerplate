import ReactDomServer from "react-dom/server";
import React from "react";
import Html from "../_base/baseTemplate.jsx";

const dictionary = {
    title: 'Indice!'
};

class Index extends React.Component {
    render() {
        return <Html title={dictionary.title} base="../">
        <header>
            <h1>{dictionary.title}</h1>
            <nav><a href="index.html">English</a></nav>
        </header>
        <section className="component-container">
            <h3>Componet called with parameters (it translation)</h3>
            <div data-rcomp="App" data-rattr='{"title": "Componente di test"}'></div>
        </section>
        </Html>;
    }
}
const html = ReactDomServer.renderToStaticMarkup(<Index/>);
module.exports = html;