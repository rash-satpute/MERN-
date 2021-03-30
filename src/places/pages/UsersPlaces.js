import React from 'react'
import {useParams} from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id:'p1',
        title:"Empire State Building",
        description:"One of the most famous sky scrapers in the world",
        imageUrl : 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/26/af/f7.jpg',
        address :'20 W 34th St, New York, NY 10001, United States',
        location : {
            lat : 40.7484405,
            lng : -73.9878531
        },
        creator : 'u1'
    },
    {
    id:'p2',
    title:"Empire State Building",
    description:"One of the most famous sky scrapers in the world",
    imageUrl : 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/26/af/f7.jpg',
    address :'20 W 34th St, New York, NY 10001, United States',
    location : {
        lat : 40.7484405,
        lng : -73.9878531
    },
     creator : 'u2'
    }
]
const UsersPlaces =()=> {
    const userId = useParams().userId;
    const loadedPlace = DUMMY_PLACES.filter(place => place.creator == userId)
    return (
        <PlaceList item={loadedPlace}/>
    )
}

export default UsersPlaces
