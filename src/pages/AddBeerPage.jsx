import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function AddBeerPage() {
    
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewd, setFirst_brewd] = useState('')
    const [brewers_tips, setBrewers_tips] = useState('')
    const [attenuation_level, setAttenuation_level] = useState(0)
    const [contributed_by, setContributed_by] = useState('')

    const navigate = useNavigate()
    


  function handleSubmit() {

    e.preventDefault()

    const {name, tagline, description, first_brewd, brewers_tips, attenuation_level, contributed_by} = newBeerCreated

    
    
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeerCreated)
      .then(()=> {

        navigate('/beers')
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default AddBeerPage;
