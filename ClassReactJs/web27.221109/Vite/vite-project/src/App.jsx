import { useState } from "react";
import "./App.css";
import Hit from "./components/hit/Hit";
import { getNews } from "./services/news.services";

function App() {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("React");
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    totalPage: 0,
    hits: [],
  });

  useEffect(() => {
    getNews(query, page).then((data) => {
      setData({ hits: data.hits, totalPage: data.nbPages });
    });
    return () => {
      cleanup;
    };
  }, [input]);
}

return (
  <div className="App">
    <h1>dfsfsd</h1>

    <Hit />
  </div>
);

export default App;
