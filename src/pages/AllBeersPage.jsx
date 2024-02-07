import "./AllBeersPage.css";

function AllBeersPage() {
  return (
    <div id="AllBeers">
      <div className="beer">
        <img src="" height={240} width={160} alt="beer" />
        <div className="description">
          <h1>Buzz</h1>
          <p>A Real Bitter Experience.</p>
          <span>
            <strong>Created by:</strong> Buzz
          </span>
        </div>
      </div>
    </div>
  );
}

export default AllBeersPage;
