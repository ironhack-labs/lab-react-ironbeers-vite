import allBeerImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
import OptionCard from "../components/OptionCard";


function HomePage() {
  return (
    <div>
      <OptionCard heroImg={allBeerImg} 
      title="All Beers" 
      text="Here's the list of all the beers"
      link="/beers"
      />
      <OptionCard heroImg={randomBeerImg} 
      title="Random Beer" 
      text="Info from a random beer"
      link="/random-beer"
      />
      <OptionCard heroImg={newBeerImg} 
      title="New Beer" 
      text="Generate a new beer"
      link="/new-beer"
      />
    </div>
  )
}

export default HomePage;
