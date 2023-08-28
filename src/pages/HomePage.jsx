import {Link} from "react-router-dom";

function HomePage() {

    return(
        <div className="container justify-content-center">
            <div className="row d-flex justify-content-center">
                <div>
                    <img className="img-fluid w-100" src="./src/assets/beers.png"></img>
                </div>
                <div className="col-md-11">
                    <Link to={"/beers"}>All Beers</Link>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div>
                    <img className="img-fluid w-100" src="./src/assets/random-beer.png"></img>
                </div>
                <div className="col-md-11">
                    <Link to={"/random-beer"}>Random Beer</Link>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="container justify-content-center align-items-center">
                <div>
                    <img className="img-fluid w-100" src="./src/assets/new-beer.png"></img>
                </div>
                <div className="col-md-11">
                    <Link to={"/new-beer"}>New Beer</Link>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
