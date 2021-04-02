import React,{useCallback} from 'react'
import Input from '../../shared/components/FormElement/Input'
import { VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import './NewPlaces.css'

const NewPlaces =() =>{
    const titleInputHandler =useCallback( (id,value,isValid)=>{

    },[]);
    const descriptionInputHandler =useCallback( (id,value,isValid)=>{
        
    },[]);
    return (
        <form className="place-form">
         <Input 
         id="title"
         element="input"
         type="text"
         onInput={titleInputHandler}
         validators={[VALIDATOR_REQUIRE()]}
         label="Title"
         errorText="Please Enter a valid title "
          />
        <Input 
         id="description"
         element="textarea"
         type="text"
         onInput={descriptionInputHandler}
         validators={[VALIDATOR_MINLENGTH()]}
         label="Title"
         errorText="Please Enter a valid description at least 5 character "
          />
        </form>
    )
}
export default NewPlaces