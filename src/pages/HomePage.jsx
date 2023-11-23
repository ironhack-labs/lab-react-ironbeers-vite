import { Link } from "react-router-dom";

import "/src/index.css"

const HomePage = () => {
    return (
        <nav >
            <div >
                <Link to="/beers"><img src="src/assets/beers.png" alt="beer" />
                    All Beers </Link>
            </div>
            <div >
                <Link to="/random-beer"> <img src="/src/assets/random-beer.png" alt="random " />
                    Random Beers </Link>
            </div>
            <div>
                <Link to={"/new-beer"}><img src={"/src/assets/new-beer.png"} alt={"new beer"} />
                    New Beer </Link>
            </div>
        </nav>
    )
}

export default HomePage