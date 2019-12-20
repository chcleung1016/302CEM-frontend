import React from 'react';

export default ({ title, heading }) => {
    return (
        <div className="level-item has-text-centered">
        <div>
          <p className="heading">{heading}</p>
          <p className="title">{title}</p>
        </div>
      </div>
    )
}