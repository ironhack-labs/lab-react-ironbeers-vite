import axios from "axios"
import { useState } from "react"

function AddBeerPage() {

    const [newBeer, setNewBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setNewBeer({ ...newBeer, [name]: value })
    }

    const createBeer = e => {
        e.preventDefault()

        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }


    return (
        <div className="AddBeerPage">
            <form>
                <div>
                    <label >Name:
                        <input type="text" id="name" name="name" value={newBeer.name} onChange={handleInputChange} />
                    </label>
                </div>
                <div>
                    <label >Tagline:
                        <input type="text" id="tagline" name="tagline" value={newBeer.tagline} onChange={handleInputChange} />
                    </label>
                </div>
                <div>
                    <label>Descripción:
                        <input type="text" id="description" name="description" value={newBeer.description} onChange={handleInputChange} />
                    </label>
                </div>
                <div>
                    <label >Primer brewer:
                        <input type="text" id="first_brewed" name="first_brewed" value={newBeer.first_brewed} onChange={handleInputChange} />
                    </label>
                </div>
                <div>
                    <label>Consejos de brewers:
                        <input type="text" id="brewers_tips" name="brewers_tips" value={newBeer.brewers_tips} onChange={handleInputChange} />
                    </label>
                </div>
                <div>
                    <label>Nivel de atenuación:
                        <input type="number" id="attenuation_level" name="attenuation_level" value={newBeer.attenuation_level} onChange={handleInputChange} />
                    </label>
                </div>
                <div>
                    <label>Contribuidor:
                        <input type="text" id="contributed_by" name="contributed_by" value={newBeer.contributed_by} onChange={handleInputChange} />
                    </label>
                </div>
                <button type="submit" onClick={createBeer}>Add beer</button>
            </form>
        </div>
    )

}

export default AddBeerPage;
