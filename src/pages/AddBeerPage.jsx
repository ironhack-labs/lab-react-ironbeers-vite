import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");
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
                name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy
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
                <input type="text" name="name" value={name} onChange={handleName} />
                <label>Tagline</label>
                <input type="text" name="tagline" value={tagline} onChange={handleTagline} />
                <label>Description</label>
                <textarea 
                rows={15}
                cols={5}
                itemType="text" name="description" value={description} onChange={handleDescription} >
                </textarea>
                <label>First Brewed</label>
                <input type="text" name="first_brewed" value={firstBrewed} onChange={handleFirstBrewed} />
                <label>Brewer`s Tips</label> {/* CHECK IT WITH CHAT GPT */}
                <input type="text" name="first_brewed" value={brewersTips} onChange={handleBrewersTips} />
                <label>Attenuation Level</label>
                <input type="number" name="attenuation_level" value={attenuationLevel} onChange={handleAttenuationLevel} />
                <label>Contributed By</label>
                <input type="text" name="contributed_by" value={contributedBy} onChange={handleContributedBy} />
                <button type="submit">Add Beer</button>
            </form>

        </div>
    )
    


}

export default AddBeerPage;
