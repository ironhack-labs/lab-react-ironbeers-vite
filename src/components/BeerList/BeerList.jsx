import './BeerList.css'
import { Link } from 'react-router-dom'
const BeerList = ({ beers }) => {
    return (
        !beers ?
            <h1>C A R G A N D O</h1>
            :
            <div className="beerContainer">
                {

                    beers.map(e => {
                        return (
                            <div className='beer-list' key={e._id}>
                                <Link to={`/beers/${e._id}`}><img src={e.image_url} alt={e.name} /></Link>
                                <p>{e.name}</p>
                                <p>{e.tagline}</p>
                                <p>{e.contributed_by}</p>
                                <hr />
                            </div>
                        )

                    })
                }

            </div>
    )
}

export default BeerList 