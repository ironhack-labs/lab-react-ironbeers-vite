import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function AddBeerPage() {
    
    const navigate = useNavigate()
    

    const [newBeerCreated, setnewBeerCreated] = useState({})

  function handleSubmit() {

    e.preventDefault()


    

    
    
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeerCreated )
      .then(()=> {

        navigate('/beers')
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default AddBeerPage;
