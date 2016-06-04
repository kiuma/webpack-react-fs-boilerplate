import React from 'react';
import Note from './Note.jsx';

class App extends React.Component {
    render() {
        return <div>
            <h2>{this.props.title}</h2>
            <Note />
        </div>;
    }
}

App.defaultProps = {
    title: "The App"
};

export default App;