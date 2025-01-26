import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBeer } from "../services/BeersService";



function AddBeerPage() {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState("")

    const handleSubmit = (event) =>{
        event.preventDefault();

        const data = {
            name, 
            tagline, 
            description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy,
        }

        createBeer(data)
         .then(()=>{
            navigate('/beers')
         })
         .catch(error => console.error(error))
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        switch (name) {
          case 'name':
            setName(value)
            break;
          case 'tagline':
            setTagline(value)
            break;
          case 'description':
            setDescription(value)
            break;
          case 'firstBrewed':
            setFirstBrewed(value)
            break;
          case 'brewersTips':
            setBrewersTips(value)
            break;
          case 'attenuationLevel':
            setAttenuationLevel(Number(value))
            break;
          case 'contributedBy':
            setContributedBy(value)
            break;
          default:
            break;
        }
      }



    return (
        <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="name">Nombre</label>
        <input 
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
        className="form-control"
         />
        <label className="form-label" htmlFor="tagline">Eslogan</label>
        <input 
        id="tagline"
        name="tagline"
        type="text"
        value={tagline}
        onChange={handleChange}
        className="form-control"
         />
        <label className="form-label" htmlFor="description">Descripción</label>
        <textarea 
        id="description"
        name="description" 
        type="text"
        value={description}
        onChange={handleChange}
        className="form-control"
        >
        </textarea>
        <label className="form-label" htmlFor="firstBrewed">Primera elaboración</label>
        <input 
        id="firstBrewed"
        name="firstBrewed"
        type="text"
        value={firstBrewed}
        onChange={handleChange}
        className="form-control"
         />
        <label className="form-label" htmlFor="brewersTips">Consejos del cervecero</label>
        <input 
        id="brewersTips"
        name="brewersTips"
        type="text"
        value={brewersTips}
        onChange={handleChange}
        className="form-control"
         />
        <label className="form-label" htmlFor="attenuationLevel">Nivel de atenuación</label>
        <input 
        id="attenuationLevel"
        name="attenuationLevel"
        type="number"
        value={attenuationLevel}
        onChange={handleChange}
        className="form-control"
         />
        <label className="form-label" htmlFor="contributedBy">Contribuido por</label>
        <input 
        id="contributedBy"
        name="contributedBy"
        type="text"
        value={contributedBy}
        onChange={handleChange}
        className="form-control"
         />
        <button type="submit" className='btn btn-primary'>Create beer</button>
        






        </form>
    )
}

export default AddBeerPage;
