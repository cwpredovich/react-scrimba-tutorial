import React from "react";


function Main() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay

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
            <form>
                <ul className="list">
                    <li><input type="checkbox"></input></li>
                    <li><input type="checkbox"></input></li>
                    <li><input type="checkbox"></input></li>
                    <li><input type="checkbox"></input></li>
                </ul>
            </form>
        </div>
    )
}

export default Main;