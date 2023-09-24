import { Link } from "react-router-dom"

const HomePage = () => {

    return (

        <div className="HomePage">

            <Link to="/beers">
                <img src="src/assets/beers.png" alt="" />
                <p>All Beers</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laboriosam quas incidunt
                    tempora repudiandae consequuntur dolore! Recusandae error tenetur ducimus nostrum sunt minus,
                    eaque, ea fugit expedita accusantium ut! Ipsum?</p>
            </Link>

            <Link to="/random-beer">
                <img src="src/assets/random-beer.png" alt="" />
                <p>Random Beer</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laboriosam quas incidunt
                    tempora repudiandae consequuntur dolore! Recusandae error tenetur ducimus nostrum sunt minus,
                    eaque, ea fugit expedita accusantium ut! Ipsum?</p>
            </Link>

            <Link to="/new-beer">
                <img src="src/assets/new-beer.png" alt="" />
                <p>Add New Beer</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laboriosam quas incidunt
                    tempora repudiandae consequuntur dolore! Recusandae error tenetur ducimus nostrum sunt minus,
                    eaque, ea fugit expedita accusantium ut! Ipsum?</p>
            </Link>

        </div>
    )
}

export default HomePage
