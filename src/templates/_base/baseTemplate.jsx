import React from "react";

class Html extends React.Component {
    render(title) {
        return <html lang="en">
        <head>
            <title>{this.props.title}</title>
            <base href={this.props.base} target="_self"/>
        </head>
        <body>
            {this.props.children}
            <script datatype="text/javascript" src="build.js"></script>
        </body>
        </html>;
    }
}

Html.defaultProps = {
    base: './'
};

export default Html;