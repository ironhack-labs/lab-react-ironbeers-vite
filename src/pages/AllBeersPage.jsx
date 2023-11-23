import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }, [])



    return (
        <div className="AllBeersPage">
            {
                beers.map(e => {
                    return (
                        <div key={e._id}>
                            <Link to={`/beers/${e._id}`}><img src={e.image_url} alt="" style={{ width: '4%' }} /></Link>
                            <h3>{e.name}</h3>
                            <h4>{e.tagline}</h4>
                            <p>Created by: {e.contributed_by}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )

}

export default AllBeersPage;
