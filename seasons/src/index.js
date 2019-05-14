import React from 'react';
import ReactDOM from 'react-dom';;

class App extends React.Component{
    constructor(props){
        super(props); //references to the parent constructor function **IMPORTANT
        this.state = { 
            lat: null,
            errorMessage: ``
        }; // the only time we do direct assignment to ths.state

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ //setState
                    lat: position.coords.latitude
                });
            }, // success callback
            (err) => {
                this.setState({ errorMessage: err.message})
            } // failure callback
        );
    
    }
    // React says we have to define render!!!!
    render() {
        return (    
            !this.state.lat
            ?
            <div>
                Error: {this.state.errorMessage}
            </div> 
            : <div>
                Latitude: {this.state.lat}
            </div>
            
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);