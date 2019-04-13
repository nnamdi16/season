import "./SeasonDisplay.css";
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach !",
    icon: "sun"
  },
  winter: {
    text: "Burr it is cold",
    icon: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];
  // console.log(output);
  // const text =
  //   season === "winter" ? "Burr it is Chilly" : "Let's hit the beach";
  // const icon = season === "winter" ? "snowflake" : "sun";

  console.log(season);
  return (
    <div className={`season-display ${season}`}>
      <Icon
        name={icon}
        size="massive"
        className={`icon-left ${season} color-season`}
      />
      <h1>{text}</h1>
      <Icon
        name={icon}
        size="massive"
        className={`icon-right ${season} color-season`}
      />
    </div>
  );
};

export default SeasonDisplay;

// export default IconExampleDisabled
/*
Rules of state
-Only usable with class based components
- State is a javascript object that contains data relevant to a component
- If we want a component to re-render itself you would update its state
-state must be intialised when creating our component.
State can only be updated using the function 'Set state'
*/
//Functional or presentational component
//Class  or container based component
