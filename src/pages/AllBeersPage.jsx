import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const AllBeersPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((beers) => {
                // console.log(beers.data)
                setBeers(beers.data)
            })
    }, [])

    return (
        <div className="AllBeersPage">

            {beers.map((elm) => {
                return (
                    <Link to={`/beers/${elm._id}`}>
                        <article>
                            <img src={elm.image_url} alt="" />
                            <p>{elm.name}</p>
                            <p>{elm.tagline}</p>
                            <p>{elm.contributed_by}</p>
                        </article>
                    </Link>
                )
            })}
        </div>
    )
}

export default AllBeersPage
