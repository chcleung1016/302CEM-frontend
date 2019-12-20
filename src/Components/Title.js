import React from 'react';

export default ({ title }) => {
    return (
        <article class="message is-primary">
        <div class="message-header">
          <p>{title}</p>
        </div>
      </article>
    )
}