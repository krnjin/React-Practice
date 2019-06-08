import React from 'react';


const randomStyle = {
    backgroundColor: 'red',
}


const Spinner = (props) => {
    return (
        <div className="ui active dimmer" style={randomStyle}>
            <div className ="ui text loader">
                {props.message}
            </div>
        </div>
    );
};

//defining default
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;