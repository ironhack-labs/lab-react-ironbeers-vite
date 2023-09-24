import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="HomePage">


            <Link className="btn btn-dark" to={'/beers'}>All Beers</Link>
            <br />
            <Link to={'/random-beer'}>Random Beer</Link>
            <br />
            <Link to={'/new-beer'}>New Beer</Link>


        </div>


    )
}

export default HomePage
