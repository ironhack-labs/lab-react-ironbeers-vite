import {useParams} from "react-router-dom"
import axios from 'axios'
import {useEffect, useState} from "react"

function BeerDetailsPage() {
    const {beerId} = useParams()
    const [oneBeer, setOneBeer] = useState(null)

    useEffect(()=> {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((singleBeer)=> {
            console.log(singleBeer)
            setOneBeer(singleBeer)
        })
        .catch((err)=> {
            console.log(err)
        })

    }, [beerId])

}

export default BeerDetailsPage;
