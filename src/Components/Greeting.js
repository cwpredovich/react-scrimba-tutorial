import React from "react";

function Greeting() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    let styles = {};

    if (hours < 12) {
        timeOfDay = "morning";
        styles = {backgroundColor: "green"};
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
        styles = {backgroundColor: "yellow"};
    } else {
        timeOfDay = "evening";
        styles = {backgroundColor: "pink"};
    };
    return(
        <p style={styles}>Good {timeOfDay}!</p>
    )
}

export default Greeting;