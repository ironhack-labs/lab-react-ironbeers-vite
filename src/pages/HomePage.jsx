import { Link } from "react-router-dom";
import AllBeers from './../assets/beers.png'
import NewBeer from './../assets/new-beer.png'
import RandomBeer from './../assets/random-beer.png'

function HomePage() {

    return (
        <div className="HomePage">
            <Link to={'/beers'} style={{ textDecoration: 'none', color: 'black' }}>
                <img src={AllBeers} alt="" />
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis aliquid id nulla eaque assumenda blanditiis cum iste quod eveniet modi, repudiandae illo ea voluptate doloribus optio cumque. Dolorum, rem eius!</p>
            </Link>

            <Link to={'/random-beer'} style={{ textDecoration: 'none', color: 'black' }}>
                <img src={RandomBeer} alt="" />
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis aliquid id nulla eaque assumenda blanditiis cum iste quod eveniet modi, repudiandae illo ea voluptate doloribus optio cumque. Dolorum, rem eius!</p>
            </Link>

            <Link to={'/new-beer'} style={{ textDecoration: 'none', color: 'black' }}>
                <img src={NewBeer} alt="" />
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis aliquid id nulla eaque assumenda blanditiis cum iste quod eveniet modi, repudiandae illo ea voluptate doloribus optio cumque. Dolorum, rem eius!</p>
            </Link>
        </div>
    )

}

export default HomePage;
