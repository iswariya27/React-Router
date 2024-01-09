import React from 'react';
import MidleNav from '../MiddleNav/MidleNav';
import Card from './Card';


function Career({item}) {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
        <div className="row">
        <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-1536x340.webp" className="cent-img" alt="guvi-img" />
        </div>
        <MidleNav />
        <div className="container ">
            <div className="row">
                {item.map((data, index) => {
                    if(data.id === 'career') 
                    return <Card key={index} item={data} />
                return null;
                })
                }
            </div>
        </div>
    </div>
    );
}

export default Career;