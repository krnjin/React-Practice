import React from 'react';
import ReactDOM from 'react-dom';;

class App extends React.Component{
    constructor(props){
        super(props); //references to the parent constructor function **IMPORTANT
        this.state = { lat: null };
    }

    // React says we have to define render!!!!
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position), // success callback
            (err) => console.log(err) // failure callback
        );

        return <div> Latitude: </div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);