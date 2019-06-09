import React from 'react';

const HobbiesUser = ({hobbies}) => {
    return (
        <div>
            <h1>Lista de hobbies</h1>
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