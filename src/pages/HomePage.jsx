import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="container">

            <Link to='/beers' className="row col-12">
                <img src="\src\assets\beers.png" alt="beer" />
                <h1>Beers</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime voluptates minima, suscipit minus autem vitae. Quas aperiam dolores ipsam tenetur veniam. Praesentium reiciendis suscipit incidunt omnis nulla dolorem? Ut.</p>
            </Link>

            <Link to='/random-beer' className="row col-12" >
                <img src="\src\assets\random-beer.png" alt="beer" />
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum commodi aspernatur, ut culpa expedita atque minus voluptates cupiditate eum, possimus laborum ea quis molestias accusantium illum, error eos qui!</p>
            </Link>

            <Link to='/new-beer' className="row col-12">
                <img src="\src\assets\new-beer.png" alt="beer" />
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ab dolore officia deleniti quis cumque maxime ex ducimus, eos recusandae consequuntur vero deserunt voluptatem dolor animi perspiciatis modi nostrum voluptas!</p>
            </Link>

        </div>
    )
}

export default HomePage;
