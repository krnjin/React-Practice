import React from 'react';
import bannerImage from './titleBanner.jpg';

const imageBox = {
    width: '30%',
    height: 'auto',
}

const BannerImage = () =>{
    return(
        <div style={{textAlign: 'center'}}>
            <img src={bannerImage} alt="banner" style={imageBox}/>
        </div>
    );

}

export default BannerImage;