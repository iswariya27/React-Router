import React from 'react';
import Card from './Card';
import MidleNav from '../MiddleNav/MidleNav';
import blogimg from './blog-header-2048x315.webp'


function All({ item }) {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div className="row">
                <img className="cent-img" src={blogimg}  alt="guvi-img" />
            </div>
            <MidleNav />
            <div className="container ">
                <div className="row">
                    {item.map((data, index) => {
                        return <Card key={index} item={data} />
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default All;