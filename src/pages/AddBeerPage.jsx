import { useState, useEffect } from "react"
function AddBeerPage() {
    const [formData, setFormData] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    });

    const handleChange = (e) => {
        let ename = e.target.name;
        let value = e.target.value;
        setFormData({
            ...formData,
            [ename]: value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("submit");
        console.log(formData);
        useFetchData();
    }

    async function makePost(){
        const update = {
            ...formData
        };

        try{
            const result = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(update),
            });

            const data = await result.json();
            if (result.status !== 200) throw Error(data.message);
            console.log(data);

        }catch(error){
            console.log("Something went wrong", error);
        }
    }

    const useFetchData = () => {
        // You POST method here
        const callAPI = useCallback(() => {
            makePost();
        }, [])
        return [res, callAPI];
    }

    return (
        <div className="add-beers-page">
            <h1>Add a New Beer</h1>
            <form className="new-beer-form">
                <label htmlFor="name">Name</label>
                <input name="name" value={formData.name} type="text" onChange={handleChange}/>
                <label htmlFor="tagline">Tagline</label>
                <input name="tagline" type="text" value={formData.tagline} onChange={handleChange}/>
                <label htmlFor="description">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
                <label htmlFor="first_brewed">First brewed</label>
                <input name="first_brewed" type="text" value={formData.first_brewed} onChange={handleChange}/>
                <label htmlFor="brewers_tips">Brewer's Tips</label>
                <input name="brewers_tips" type="text" value={formData.brewers_tips} onChange={handleChange}/>
                <label htmlFor="attenuation_level">Attenuation Level</label>
                <input name="attenuation_level" type="number" value={formData.attenuation_level} onChange={handleChange}/>
                <label htmlFor="contributed_by">Contributed By</label>
                <input name="contributed_by" type="text" value={formData.contributed_by} onChange={handleChange}/>
                <button type="submit" onSubmit={handleSubmit}>Add Beer</button>
            </form>
        </div>
    )
}

export default AddBeerPage;
