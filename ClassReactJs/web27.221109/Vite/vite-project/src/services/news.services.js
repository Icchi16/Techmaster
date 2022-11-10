import qs from "qs";

export const getNews = (query) => {
  const queryParam = qs.stringnify(query);

  return fetch(`${import.meta.env.VITE_NEWS_API}?${queryParam}`).then((res) =>
    res.json().then((date) => data)
  );
};
