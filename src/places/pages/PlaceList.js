import React from "react";

import Card from './component/shared/UlElements/card'

import './PlaceList.css';
import Placeitem from "./Placeitem";

const PlaceList = props => {
    if (props.items.length === 0) {
        return <div className="place-list center">
            <Card>
               <h2>NO places found maybe create one?</h2>
               <button>share place</button>
            </Card>

        </div>
    }

    return <ul className="place-list">
        {props.items.map(place => <Placeitem key={place.id} 
        id={place.id} 
        image={place.imageurl} 
        title={place.title} 
        description={place.description} 
        address={place.address} 
        creatorid={place.creator} 
        coordinate={place.location}
        
        />)}
        
    </ul>

};
 

export default PlaceList