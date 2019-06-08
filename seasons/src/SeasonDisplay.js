import './SeasonDisplay.css';
import React from 'react';


const seasonConfig = {
    summer: {
        text: `Let's hit the beach!`,
        iconName: `sun`
    },
    winter: {
        text: `Burr it is cold!`,
        iconName: `snowflake`
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const getDate = () =>{
    var today = new Date();

    return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // const text = season === "winter" ? `Burr, it is chilly` : `Let's hit the beach`;
    // const icon = season === `winter` ? `snowflake` : `sun`;
    
    const { text, iconName } = seasonConfig[season]; //destructuring
    const today = getDate();

    return (
    <div className ={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
        <h2>{`Current Latitude: ${props.lat} and Longitude : ${props.long}`}</h2>
        <h3>Today's Date: {today} </h3>
    </div>
    );
}

export default SeasonDisplay;