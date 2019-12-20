import React from 'react';

export default ({ title, heading }) => {
    return (
        <div class="level-item has-text-centered">
        <div>
          <p class="heading">{heading}</p>
          <p class="title">{title}</p>
        </div>
      </div>
    )
}