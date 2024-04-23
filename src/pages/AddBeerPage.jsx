import axios from "axios";
import { useState } from "react";

function AddBeerPage() {

    const initialState = {name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: 0, contributed_by: ""};

    const [ newBeer, setNewBeer ] = useState(initialState);

    const handleChange = (event) => {
        const { name, value }  = event.currentTarget;
        setNewBeer({...newBeer, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then(response => {
                console.info("Beer created", response.data);
                setNewBeer(initialState);
            })
            .catch(error => console.error("Beer can not be created", error));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" value={newBeer.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Tagline</label>
                <input type="text" name="tagline" value={newBeer.tagline} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea type="text" name="description" value={newBeer.description} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">First Brewed</label>
                <input type="text" name="first_brewed" value={newBeer.first_brewed} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">{`Brewer's Tips`}</label>
                <input type="text" name="brewers_tips" value={newBeer.brewers_tips} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Attenuation Level</label>
                <input type="number" name="attenuation_level" value={newBeer.attenuation_level} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Contributed By</label>
                <input type="text" name="contributed_by" value={newBeer.contributed_by} onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Add Beer</button>
        </form>
    );
}

export default AddBeerPage;