import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import beersImg from "/src/assets/beers.png"
import randomBeerImg from "/src/assets/random-beer.png"
import newBeerImg from "/src/assets/new-beer.png"

function HomePage() {

    const [beers, setBeers] = useState()

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                const beers = response.data
                setBeers(beers)
                console.log(beers)
            })
            .catch(err => console.log(err))

    }, [])






    return (
        <div>
            <Link to={"/beers"}>
                <img src={beersImg} alt="beers" /> <h3>All Beers</h3> <p>lorem ipsum dfjndkjgfkjbngrkdjnfkjbnknjdgkjbnkrenjgkjnrkvnkjnbkjngkdngkjg
                    dfkflgnjgnkgjnkdrgjnoretnogjnotrnonrtgoniorgtnirgnjkgjnghkjnhjnh</p>
            </Link>
            <Link to={"/random-beer"}>
                <img src={randomBeerImg} alt="Random beers" /> <h3>Random Beer</h3> <p>lorem ipsum dfjndkjgfkjbngrkdjnfkjbnknjdgkjbnkrenjgkjnrkvnkjnbkjngkdngkjg
                    dfkflgnjgnkgjnkdrgjnoretnogjnotrnonrtgoniorgtnirgnjkgjnghkjnhjnh</p>
            </Link>
            <Link to={"/new-beer"}>
                <img src={newBeerImg} alt="New beer" /> <h3>New Beer</h3> <p>lorem ipsum dfjndkjgfkjbngrkdjnfkjbnknjdgkjbnkrenjgkjnrkvnkjnbkjngkdngkjg
                    dfkflgnjgnkgjnkdrgjnoretnogjnotrnonrtgoniorgtnirgnjkgjnghkjnhjnh</p>
            </Link>

        </div>
    )
}

export default HomePage;
  // Feel free to style the page in any way that you prefer.If you want to follow
    // the below example, you can find the corresponding images in the src / assets folder.