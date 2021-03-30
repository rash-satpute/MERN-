import React,{useState} from 'react'
import Card from '../../shared/components/UIElements/Card'
import './PlaceItem.css'

import Button from '../../shared/components/FormElement/Button'
import Model from '../../shared/components/UIElements/Model'
const PlaceItem=(props)=> {
    const [showMap, setShowMap] = useState(false)

    const openMapHandler = ()=>{
        setShowMap(true)
    }
    const closeMapHandler = ()=>{
        setShowMap(false)
    }
    return (
        <React.Fragment>
        <Model 
            show={showMap} 
            onCancel={closeMapHandler} 
            header={props.header}
            contentClass="place-item__modal-content"
            footerClass='place-item__modal-action'
            footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
        >
        <div className="map-container">
            <h2>The Map</h2>
        </div>
        </Model>
        <li className="place-item">
        <Card className="place-item__content">
           <div className="place-item__image">
            <img src={props.image} alt={props.title}/>
           </div> 
           <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
           </div>
           <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
           </div>
           </Card>
        </li>
        </React.Fragment>
    )
}

export default PlaceItem