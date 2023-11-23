import { Form } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function AddBeerPage() {


    const [newbeer, setNewBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''

    })


    const handleInputChange = e => {

        const { value, name } = e.currentTarget
        setNewBeer({ ...newbeer, [name]: value })

    }

    const handleBeerSubmit = e => {

        e.preventDefault()
        axios
            .post(`https://ih-beers-api2.herokuapp.com/beers/new`, newbeer)
            .then(() => console.log('está'))
            .catch(err => console.log(err))

    }


    return (
        <>

            <p>Añadir cerveza</p>

            <form onSubmit={handleBeerSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={newbeer.name} onChange={handleInputChange} />
                </label>

                <label>
                    Tagline:
                    <input type="text" name="tagline" value={newbeer.tagline} onChange={handleInputChange} />
                </label>

                <label>
                    Description:
                    <input type="text" name="description" value={newbeer.description} onChange={handleInputChange} />
                </label>

                <label>
                    First Brewed:
                    <input type="text" name="first_brewed" value={newbeer.first_brewed} onChange={handleInputChange} />
                </label>

                <label>
                    Brewer's Tips:
                    <input type="text" name="brewers_tips" value={newbeer.brewers_tips} onChange={handleInputChange} />
                </label>

                <label>
                    Attenuation Level:
                    <input type="number" name="attenuation_level" value={newbeer.attenuation_level} onChange={handleInputChange} />
                </label>

                <label>
                    Contributed By:
                    <input type="text" name="contributed_by" value={newbeer.contributed_by} onChange={handleInputChange} />
                </label>

                <button type="submit">
                    Añadir cerveza
                </button>
            </form>
        </>
    )
}

export default AddBeerPage;
