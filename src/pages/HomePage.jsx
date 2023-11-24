import { Link } from 'react-router-dom'
import beers from './../assets/beers.png'
import new_beer from './../assets/new-beer.png'
import random_beer from './../assets/random-beer.png'


function HomePage() {

    return (
        <div className="HomePage">
            <div>
                <Link to={'/beers'}>
                    <figure>
                        <img src={beers} alt="" />
                    </figure>
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta pariatur quas eaque eum hic dolore laudantium cumque cum, quam aliquam exercitationem necessitatibus libero. Officiis atque quam molestiae ullam earum laborum?</p>
                </Link>
            </div>

            <div>
                <Link to={'/random-beer'}>
                    <figure>
                        <img src={random_beer} alt="" />
                    </figure>
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta pariatur quas eaque eum hic dolore laudantium cumque cum, quam aliquam exercitationem necessitatibus libero. Officiis atque quam molestiae ullam earum laborum?</p>
                </Link>
            </div>

            <div>
                <Link to={'/new-beer'}>
                    <figure>
                        <img src={new_beer} alt="" />
                    </figure>
                    <h1>New Beer</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta pariatur quas eaque eum hic dolore laudantium cumque cum, quam aliquam exercitationem necessitatibus libero. Officiis atque quam molestiae ullam earum laborum?</p>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;
