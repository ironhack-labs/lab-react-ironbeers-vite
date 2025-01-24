import BeersImage from '../assets/beers.png'
import RandomBeersImage from '../assets/random-beer.png'
import NewBeer from '../assets/new-beer.png'
import SectionLayout from '../components/SectionLayout'

function HomePage() {
    const placeholdertext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
      <div className="all-beers">
        <div className="main-content">
          <SectionLayout
            image={BeersImage}
            headline={"All beers"}
            sectionText={placeholdertext}
            link={"/beers"}
          />
          <SectionLayout
            image={RandomBeersImage}
            headline={"Random beer"}
            sectionText={placeholdertext}
            link={"/random-beer"}
          />
          <SectionLayout
            image={NewBeer}
            headline={"New beer"}
            sectionText={placeholdertext}
            link={"/new-beer"}
          />
        </div>
      </div>
    );
    
}

export default HomePage;
