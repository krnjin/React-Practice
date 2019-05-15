import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    state = { lat: null, errorMessage: ``};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ 
                lat: position.coords.latitude,
                long: position.coords.longitude 
            }), 
            err => this.setState({ errorMessage: err.message}) 
        );
    }


    // React says we have to define render!!!!
    render() {
        return (    
            // !this.state.lat
            // ?
            // <div>
            //     Error: {this.state.errorMessage}
            // </div> 
            // : <div>
            //     <SeasonDisplay 
            //         lat={this.state.lat} 
            //         long={this.state.long}
            //     />
            // </div>
            this.state.lat && 
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);