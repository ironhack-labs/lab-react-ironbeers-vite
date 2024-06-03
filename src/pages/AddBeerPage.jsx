import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstBrewed] = useState("");
    const [brewers_tips, setBrewersTips] = useState("");
    const [attenuation_level, setAttenuationLevel] = useState(0);
    const [contributed_by, setContributedBy] = useState("");
    const navigate = useNavigate();

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleTagline = (event) => {
        setTagline(event.target.value)
    }
    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleFirstBrewed = (event) => {
        setFirstBrewed(event.target.value)
    }
    const handleBrewersTips = (event) => {
        setBrewersTips(event.target.value)
    }
    const handleAttenuationLevel = (event) => {
        setAttenuationLevel(event.target.value)
    }
    const handleContributedBy = (event) => {
        setContributedBy(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const project = {
                name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by
            }
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', project)

            navigate("/beers")
        } catch (error) {
            console.log('error creating the project', error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={handleName} /> <br />
                <label>Tagline</label>
                <input type="text" name="tagline" value={tagline} onChange={handleTagline} /> <br />
                <label>Description</label>
                <textarea 
                rows={5}
                cols={15}
                itemType="text" name="description" value={description} onChange={handleDescription} >
                </textarea> <br />
                <label>First Brewed</label>
                <input type="text" name="first_brewed" value={first_brewed} onChange={handleFirstBrewed} /> <br />
                <label>Brewer&apos;s tips</label>
                <input type="text" name="brewers_tips" value={brewers_tips} onChange={handleBrewersTips} /> <br />
                <label>Attenuation Level</label>
                <input type="number" name="attenuation_level" value={attenuation_level} onChange={handleAttenuationLevel} /> <br />
                <label>Contributed By</label>
                <input type="text" name="contributed_by" value={contributed_by} onChange={handleContributedBy} /> <br />
                <button type="submit">Add Beer</button>
            </form>

        </div>
    )
    


}

export default AddBeerPage;
