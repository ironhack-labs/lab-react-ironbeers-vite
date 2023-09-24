import { Link } from 'react-router-dom'
import beers from './../assets/beers.png'
import randomBeer from './../assets/random-beer.png'
import newBeer from './../assets/new-beer.png'

const HomePage = () => {

    return (
        <div className='HomePage'>
            <Link
                className="Link"
                to={'/beers'} >
                <img src={beers} alt='beers' />
                <h2>All Beers</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eaque quis adipisci deleniti reiciendis quam. Inventore optio sed,
                    quod quidem totam soluta vitae nemo, recusandae porro quaerat dolorum
                    tenetur laboriosam ex.
                </p>
            </Link>
            <Link
                className="Link"
                to={'/random-beer'} >
                <img src={randomBeer} alt='Random Beer' />
                <h2>Random Beer</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eaque quis adipisci deleniti reiciendis quam. Inventore optio sed,
                    quod quidem totam soluta vitae nemo, recusandae porro quaerat dolorum
                    tenetur laboriosam ex.
                </p>
            </Link>
            <Link
                className="Link"
                to={'/new-beer'} >
                <img src={newBeer} alt='New Beer' />
                <h2>New Beer</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eaque quis adipisci deleniti reiciendis quam. Inventore optio sed,
                    quod quidem totam soluta vitae nemo, recusandae porro quaerat dolorum
                    tenetur laboriosam ex.
                </p>
            </Link>
        </div>
    )
}

export default HomePage
