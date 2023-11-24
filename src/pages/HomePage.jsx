import { Link } from "react-router-dom"


function HomePage() {

    return (
        <div className="HomePage">
            <h1>Homepage</h1>
            <ul>
                <li><Link to={'/beers'}> All Beers</Link></li>
                <li><Link to={'/random-beer'}> Random Beer</Link></li>
                <li><Link to={'/new-beer'}> Add Beer</Link></li>
            </ul>
        </div>


    )
}

export default HomePage;
