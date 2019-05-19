import React from 'react';


const randomStyle = {
    backgroundColor: 'red',
}


const Spinner = () => {
    return (
        <div className="ui active dimmer" style={randomStyle}>
            <div className ="ui text loader">
                Loading.....!!! Pleas wait!
            </div>
        </div>
    );
};

export default Spinner;