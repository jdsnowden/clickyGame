import React from "react";
import "./cards.css";

const cards = props => (
    <div
        role = "img"
        onClick={() =>props.handleClick(props.id)}
        style={{ backgroundImage: `url("${props.images}")`}}
        className={`buttons`}
        />
);

export default cards;