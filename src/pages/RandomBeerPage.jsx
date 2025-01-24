import { useState, useEffect } from "react"
function RandomBeersPage() {
    const [beer, setBeer] = useState({});

    useEffect(()=>{
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response)=>response.json())
        .then((data)=>setBeer(data))
        .catch(err => console.log(err));
    },[])

    if(beer.name === undefined){
        return <div className="detail-page">Loading...</div>;
    }

    return (
      <div className="detail-page">
        <div className="detail-img">
          <img src={beer.image_url} alt={`${beer.name}`} />
        </div>
        <div>
          <div className="detail-line"><h1>{beer.name}</h1> <div>{beer.attenuation_level}</div></div>
          <div className="detail-line"><h3>{beer.tagline}</h3> <div>{beer.first_brewed}</div></div>
          <div className="description">{beer.description}</div>
          <p className="contributed">{beer.contributed_by}</p>
        </div>
      </div>
    )
}

export default RandomBeersPage;
