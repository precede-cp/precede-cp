import React from "react";
import "./Card.scss";

/**
 * Card - Displays each days' weather data.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Footer = props  => {
  return (
    <li className="card">
      <i className={`wi wi-yahoo-${props.code}`}></i>
      <h1 className="card-temp">{temp}&#176;
        <span className="card-temp-low">{props.low}</span>
      </h1>
      <h2 className="card-day"> {day}</h2>
      <p className="card-text">{props.text}</p>
    </li>
  )
};

export default Footer;