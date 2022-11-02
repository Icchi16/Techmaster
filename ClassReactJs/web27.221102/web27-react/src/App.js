import logo from "./logo.svg";
import "./App.css";

function Header() {
  return <h1 className="Header-container">Our Reviews</h1>;
}

function ReviewCard() {
  return (
    <div className="Reivew-card">
      <div className="Review">
        <div className="Author">
          <div className="Avatar">
            <img src="./avatar.jpeg"/>
          </div>
          <div className="Info">
            <p className="Info-name">Susan Smith</p>
            <p className="Info-job">WEB DEVELOPER</p>
          </div>
        </div>
        <div className="Content">
          {" "}
          I'm baby meggings twee health goth +1. Bicycle rights tumeric
          chartreuse before they sold out chambray pop-up. Shaman humblebrag
          pickled coloring book salvia hoodie, cold-pressed four dollar toast
          everyday carry
        </div>
      </div>
      <div className="Control">
        <div className="Control-left"></div>
        <div className="Control-right"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <ReviewCard />
    </div>
  );
}

export default App;
