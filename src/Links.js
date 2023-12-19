import './App.css';
import React from 'react';
import './Link.css';

function Link(props) {
    const { link, name } = props;
    return (
        <a href={link} className="Link">
            <p className="Text">{name}</p>
        </a>
    );
}

export default Link;
