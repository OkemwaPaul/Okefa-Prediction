import React from 'react';
import { useState } from 'react';

function Details() {
    const data =[
        {
            id: 1,
            title: 'Introduction',
            description: 'This part will help you understand our association'
        },
        {
            id: 2,
            title: 'Contacts',
            description: 'Find us on facebook as Smart Mboka Association of Kenya or send an email to:smartmboka@yahoo.com'
        },
        {
            id: 3,
            title: 'Location',
            description: 'We are located in Roysambu estate, Nairobi, Kenya'
        },
        {
            id: 4,
            title: 'Membership',
            description: 'Membership is free'
        },
        {
            id: 5,
            title: 'Founders',
            description: 'It was founded by 12 members some who later left leaving 8'
        }
    ];
    const listItems = data.map((quotes) =>
    <li key={quotes.id.toString()}>
         {quotes.title} {quotes.description}
    </li>
    );
    return (
        <div>
            <h1>Motivational quotes</h1>
            <ul>{listItems}</ul>
        </div>
    );
}
export default Details;