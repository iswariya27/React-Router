import React from 'react';
import MidleNav from '../MiddleNav/MidleNav';
import Card from './Card';

function DataScience({item}) {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
        <div className="row cont-head">
            <h2 className='cont-head-h'>Data Science</h2>
            <p className='cont-head-p'>One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration.</p>
            <p className='cont-head-p'>The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</p>
        </div>
        <MidleNav />
        <div className="container ">
            <div className="row">
                {item.map((data, index) => {
                    if(data.id === 'datascience') 
                    return <Card key={index} item={data} />
                return null;
                })
                }
            </div>
        </div>
    </div>
    );
}

export default DataScience;