import './styles/main.scss';

import React from "react";
import components from "./components/main.js";
import ReactDom from 'react-dom';

(function (root) {
    Array.prototype.forEach.call(
        root.querySelectorAll('[data-rcomp]'),
        (item)=> {
            let rcomp = item.getAttribute('data-rcomp');
            if (rcomp) {
                let rattr = {},
                    dataRattr = item.getAttribute('data-rattr');
                if (dataRattr) {
                    try {
                        rattr = JSON.parse(dataRattr);
                    } catch (e) {
                        console.warn(`Error parsing data attributes ${dataRattr}`, e);
                    }
                }
                ReactDom.render(components[rcomp](rattr), item);
            }
        }
    );
})(document);
