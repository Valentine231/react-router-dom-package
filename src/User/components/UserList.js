import React from "react";

import Card from "../../component/shared/UlElement/Card";

import UserItem  from "./UserItem";

import './UserList.css';

const UserList = props => {

    if(props.items.length === 0 ){
        return (
        <div className="center">
            <Card>
            <h2>No users found.</h2>
            </Card>
            </div>
        );
        
    };

    return (
        <ul className="user-List">
            {props.items.map(user => 
            <UserItem
            key={user.id}
             id={user.id} 
             image={user.image} 
             name={user.name} 
             placecount={user.places}/>
             )};
        </ul>
    )

};


export default UserList;