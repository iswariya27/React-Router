import React from 'react';
import MidleNav from '../MiddleNav/MidleNav';
import Card from './Card';


function FullStack({ item }) {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div className="row  cont-head">
                <h2 className='cont-head-h'>Full Stack Development</h2>
                <p className='cont-head-p'>Are you a curious geek with an unstoppable urge to develop? Then, your Full Stack Development knack would be sun-glazed with an innovative and informative piece of knowledge that comes from Top industrialists and Appreneurs!</p>
                <p className='cont-head-p'>The GUVI Blog’s Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</p>
            </div>
            <MidleNav />
            <div className="container ">
                <div className="row">
                    {item.map((data, index) => {
                        if(data.id === 'fullstack') 
                        return <Card key={index} item={data} />
                    return null;
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default FullStack;