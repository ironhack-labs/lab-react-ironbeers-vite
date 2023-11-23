import axios from "axios";
import { useState } from "react";

function AddBeerPage() {

    const [beerData, setBeerData] = useState({
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
        setBeerData({ ...beerData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', beerData)
            .then(response => console.log(response))
            .catch(err => console.log(err))

    }

    return (
        <div className="AddBeerPage" onSubmit={handleFormSubmit}>
            <form>
                Name: <input type="text" name="name" value={beerData.name} onChange={handleInputChange} />
                <br /><br />

                Tagline: <input type="text" name="tagline" value={beerData.tagline} onChange={handleInputChange} />
                <br /><br />

                Description: <textarea type="text" name="description" value={beerData.description} onChange={handleInputChange} />
                <br /><br />

                First Brewed: <input type="text" name="first_brewed" value={beerData.first_brewed} onChange={handleInputChange} />
                <br /><br />

                Brewer's Tips: <input type="text" name="brewers_tips" value={beerData.brewers_tips} onChange={handleInputChange} />
                <br /><br />

                Attenuation Level: <input type="number" name="attenuation_level" value={beerData.attenuation_level} onChange={handleInputChange} />
                <br /><br />

                Contributed By: <input type="text" name="contributed_by" value={beerData.contributed_by} onChange={handleInputChange} />
                <br /><br />

                <input type="submit" value="Add Beer" />
            </form>
        </div>
    )

}

export default AddBeerPage;
