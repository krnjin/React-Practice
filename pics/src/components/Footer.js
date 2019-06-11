import React from 'react';

const styleFooter = {
    display: 'flex',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    borderColor: 'black',
    fontSize: '12px',
    justifyContent: 'space-evenly',
}

const Footer = () => {
    return(
        <div style={styleFooter}>
            <div>
                Contact Email: kwon741@hotmail.com
            </div>
            <div>
                Copyright 2019 Jin Kwon
            </div>
        </div>
    );
}

export default Footer;