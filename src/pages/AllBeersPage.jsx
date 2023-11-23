
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const URL = "https://ih-beers-api2.herokuapp.com/beers"

const AllBeersPage = () => {
    const [allBeers, setAllBeers] = useState([])


    useEffect(() => {
        axios
            .get(URL)
            .then((response) => {
                console.log('response data: ', response.data)
                setAllBeers(response.data)
            })
    }, [])


    return (
        <div >
            <h1> All beers: </h1>


            {allBeers.map((e) => (

                <div key={e._id} className="holi">
                    <Link to={`/beers/${e._id}`}>  <img src={e.image_url} alt="beer" /> </Link>
                    <h2>{e.name}</h2>
                    <p> {e.tagline} </p>
                    <h5> by {e.contributed_by}</h5>
                </div>
            )
            )}
        </div>
    )

}

export default AllBeersPage