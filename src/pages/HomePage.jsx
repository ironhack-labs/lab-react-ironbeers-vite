import { Link } from "react-router-dom";

function HomePage() {
  const blockList = [
    {
      title: "All Beers",
      url: "/src/assets/beers.png",
      id: 1,
      page: "beers",
    },
    {
      title: "Random Beers",
      url: "/src/assets/random-beer.png",
      id: 2,
      page: "random-beer",
    },
    {
      title: "New Beer",
      url: "/src/assets/new-beer.png",
      id: 3,
      page: "new-beer",
    },
  ];

  return (
    <div className="container-hp">
      <h1>HomePage</h1>
      <div className="container-card-list">
        {blockList.map((element) => {
          return (
            <Link className="container-card" key={element.id} to={element.page}>
              <div className="">
                <img src={element.url} alt="image" />
                <div className="container-content">
                  <h2>{element.title}</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum cum labore aliquid voluptatum dignissimos suscipit
                    dicta, fugit sequi, autem ab ullam? Minima aut a beatae
                    rerum iure quod pariatur at!
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
