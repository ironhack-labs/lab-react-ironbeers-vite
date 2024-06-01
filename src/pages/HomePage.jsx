import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <img src="src/assets/beers.png" />
            <Link to="/beers">
                <h1>All Beers</h1>
            </Link>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore est earum, consectetur aspernatur ea nam veritatis sunt laudantium! Expedita quisquam aspernatur nesciunt unde minima velit similique culpa temporibus dolores.
            </p>

            <img src="src/assets/random-beer.png" />
            <Link to="/random-beer">
                <h1>Random Beer</h1>
            </Link>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam, eum maxime atque explicabo minus odit praesentium commodi libero beatae nesciunt enim id ut? Vel quaerat inventore voluptates eius aperiam.
            </p>

            <img src="src/assets/new-beer.png"/>
            <Link to="/new-beer">
                <h1>New Beer</h1>
            </Link>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusamus consequuntur dolor qui accusantium culpa quisquam magnam, amet, tempore deleniti voluptate sapiente commodi modi excepturi facilis. Sequi vitae nemo cumque.
            </p>

        </div>
    )
}

export default HomePage;
