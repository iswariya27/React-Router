import React from 'react';


function Card({ item }) {
  const { img, head, cont } = item;
  const currentDate = new Date();

  return (
    <div className="card">
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{head}</h5>
        <p className="card-text">{cont}...</p>
      </div>
      <a className="read" href="#" target="_blank" rel="noopener noreferrer">READ MORE</a>
      <div className="card-footer">
        <div classNameName="text-mute mr-4">
          {
            `${currentDate.getDate()} ${currentDate.toLocaleString('en-us', { month: 'long' })} ${currentDate.getFullYear()}`
          }
          <span>No Comments<sup>0</sup></span>
        </div>
      </div>
    </div>
  );
}

export default Card;