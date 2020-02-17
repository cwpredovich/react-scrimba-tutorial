import React from "react";


function Main() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
    } else {
        timeOfDay = "evening";
    };

    return (
        <div>
            <p>Good {timeOfDay}!</p>
            <div>
                <input type="checkbox" />
                <p>Placeholder text here</p>
            
                <input type="checkbox" />
                <p>Placeholder text here</p>
            
                <input type="checkbox" />
                <p>Placeholder text here</p>
            
                <input type="checkbox" />
                <p>Placeholder text here</p>
            </div>
        </div>
    )
}

export default Main;