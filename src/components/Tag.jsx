import React from "react";

import "../Styles/Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        Personal: { backgroundColor: "#fda821" },
        Work: { backgroundColor: "#15d4c8" },
        Sports: { backgroundColor: "#ffd12c" },
        Entertainment: { backgroundColor: "#4cdafc" },
        default: { backgroundColor: "#f9f9f9" },
    };
    return (
        <button
            type='button'
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;
