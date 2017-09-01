import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            React app #2
        </div>
    );
};

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});