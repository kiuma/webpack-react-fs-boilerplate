"use strict";

function getPageEtag() {
    return new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();
        req.open('GET', window.location.href);

        req.addEventListener('load', function () {
            if (req.status >= 200 && req.status < 300) {
                // Resolve the promise with the response text
                resolve(req.getResponseHeader('ETag'));
            }
            else {
                reject(Error(req.statusText));
            }
        });

        req.addEventListener('error', function () {
            reject(Error("Network Error"));
        });

        req.send();
    });

}


let etag;

getPageEtag().then(
    function (remoteEtag) {
        function handleWDSMessages() {
            function messageEventListener(event) {
                if (typeof event.data === "string" && event.data.indexOf("webpackHotUpdate") === 0) {
                    getPageEtag().then(function (remoteEtag) {
                        if (etag !== remoteEtag) {
                            window.location.reload();
                        }
                    }).catch(function (e) {
                        console.error(e);
                    });
                }
            }
            let listener = window.addEventListener("message", messageEventListener);
        }

        etag = remoteEtag;
        handleWDSMessages();
    }
).catch(function (e) {
    console.error(e);
});

