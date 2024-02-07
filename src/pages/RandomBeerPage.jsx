import {useState, useEffect} from  "react"
import axios from 'axios'

function RandomBeerPage() {
    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((randomBeerFromApi)=> {
                console.log(randomBeerFromApi, 'the random beer obj res from API')
                setRandomBeer(randomBeerFromApi.data)
        })
        .catch((err)=> {
            console.log(err)
        })

    }, [])


}

export default RandomBeerPage;
