import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (mv, type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=329ffa13&s=${mv}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search);
      });
  };

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=329ffa13&s=panda")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? <Loader /> : <Movies movies={movies} />}
    </div>
  );
}
