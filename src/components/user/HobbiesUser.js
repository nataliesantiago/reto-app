import React from 'react';

const HobbiesUser = ({hobbies}) => {
    return (
        <div className="container-list-hobbie">
            <h1>Hobbies</h1>
            <ul>
                {hobbies.map((hobbie, key) => (
                    <li key={key}>
                        <span>{hobbie.name}</span> 
                        <p>{hobbie.description}</p>
                    </li>
                ))}
                
            </ul>
        </div>
    );
};

export default HobbiesUser;