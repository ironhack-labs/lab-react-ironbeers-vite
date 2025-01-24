import {Link} from 'react-router-dom'
function Beer({beer}){
    return (
      <div>
        <div className="beer-container">
        <div className="beer-image"><img src={beer.image_url} alt={`${beer.name}`}/></div>
        <div className="beer-info">
          <h1><Link to={`/beer/${beer._id}`}>{beer.name}</Link></h1>
          <h3>{beer.tagline}</h3>
          <p><span>Created by:</span> {beer.contributed_by}</p>
        </div>
        </div>
        <div style={{flex: 1, height: '0.5px', backgroundColor: 'gray'}} />
      </div>
    );
}
export default Beer;