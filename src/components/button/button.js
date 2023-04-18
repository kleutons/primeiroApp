import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Button({ name, template, onClick, linkUrl }) {
  template = template ? 'button ' + template : 'button';

  
    const topSroll = () => {
        window.scrollTo(0, 0); // rola a página para o topo
    }

  return (
    <>
      {linkUrl ? (
        <div>
          <Link to={linkUrl}>
            <button onClick={onClick + topSroll} className={template} >
              {name}
            </button>
          </Link>
        </div>
      ) : (
        <button onClick={onClick} className={template}>
          {name}
        </button>
      )}
    </>
  );
}

export default Button;