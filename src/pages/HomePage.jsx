import Navbar from "../components/Navbar";
import AllBeersImg from "../assets/beers.png"
import RandomBeerImg from "../assets/random-beer.png"
import NewBeerImg from "../assets/new-beer.png"


function HomePage() {
    const divStyle = {
        padding: "5px"
    }
    const imgStyle = {
        height: "100%",
        width: "100%"
    }
    return (
        <div>
            <Navbar />
            <div style={divStyle}>
            <img src={AllBeersImg} style={imgStyle}></img>
            <h1>All Beers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit purus id pretium eleifend. In in augue vel felis fringilla dignissim id et eros. Morbi ornare mauris eget dolor volutpat pretium.</p>
            </div>
            <div style={divStyle}>
            <img src={RandomBeerImg} style={imgStyle}></img>
            <h1>Random Beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit purus id pretium eleifend. In in augue vel felis fringilla dignissim id et eros. Morbi ornare mauris eget dolor volutpat pretium.</p>
            </div>
            <div style={divStyle}>
            <img src={NewBeerImg} style={imgStyle}></img>
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit purus id pretium eleifend. In in augue vel felis fringilla dignissim id et eros. Morbi ornare mauris eget dolor volutpat pretium.</p>
            </div>
        </div>
    )
}

export default HomePage;
