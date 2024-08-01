import HomePageSection from "../components/HomePageSection";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    
    <div className="home-page">
        <Navbar />
        <div className="section1">
            <HomePageSection
            imageUrl="src/assets/beers.png"
            headerContent="All Beers"
            headerUrl={"/beers"} 
            paragraphContent="Embark on a journey to explore 
            the diverse and rich flavors of beers from every 
            corner of the globe."
            />
            
        </div>
        <div className="section2">
            <HomePageSection
            imageUrl="src/assets/random-beer.png"
            headerContent="Random Beer"
            headerUrl={"/random-beer"}
            paragraphContent="Uncover a unique and delightful 
            beer from our curated selection."
            />
        </div>
        <div className="section3">
            <HomePageSection
            imageUrl="src/assets/new-beer.png"
            headerContent="New Beer"
            headerUrl={"/new-beer"}
            paragraphContent="Enrich our collection by adding a 
            new and exceptional beer."
            />
        </div>
    </div>
    
  )
}

export default HomePage