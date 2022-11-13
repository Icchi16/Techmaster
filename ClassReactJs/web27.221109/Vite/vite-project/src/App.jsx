import { useEffect, useState } from "react";
import { getNews } from "./services/news.services";
import styles from "./App.module.css";
import HitList from "./components/hit-list/HitList";

function App() {
  const [data, setData] = useState({
    totalPage: 0,
    hits: [],
  });
  const [query, setQuery] = useState("React");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getNews({ query, page }).then((data) => {
      setData({
        hits: data.hits,
        totalPage: data.nbPages,
      });
      setLoading(false);
    });
  }, [query, page, getNews]);

  const nextPage = () => setPage(page + 1);

  const prevPage = () => {
    if (page === 0) return;
    else setPage(page - 1);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={prevPage}>Previous</button>
      {page} of {data.totalPage}
      <button onClick={nextPage}>Next</button>
      {loading ? <div>Loaing...</div> : <HitList hits={data.hits} />}
    </div>
  );
}

export default App;
