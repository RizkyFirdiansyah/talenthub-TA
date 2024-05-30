"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const CardMovies = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        search === ""
          ? "https://api.themoviedb.org/3/movie/now_playing?api_key=a8fb8d68eaaec53d6ca206ac0e1d5627&language=en-US&page=1"
          : `https://api.themoviedb.org/3/search/movie?api_key=a8fb8d68eaaec53d6ca206ac0e1d5627&language=en-US&query=${search}&page=1&include_adult=false`,
      );
      const data = await response.json();
      setMovies(data.results);
    };

    fetchData();
  }, [search]);

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="m-8 flex justify-center">
        <form onSubmit={handleSubmit} className="w-2/3">
          <input
            type="text"
            placeholder="Cari Film Disini"
            value={search}
            onChange={handleChange}
            className="w-full border-2 border-stone-500 p-2 "
          />
        </form>
      </div>
      <section className="flex flex-wrap justify-center gap-10">
        {movies.map((item: any) => (
          <Link
            href={`/movie/${item.id}`}
            key={item.id}
            className="flex h-auto w-64 flex-col justify-between rounded-xl text-rose-700 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title}
              width={800}
              height={800}
              className="h-auto rounded-t-xl object-cover"
            />
            <div className="flex h-full flex-col justify-between p-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-end italic">{item.release_date}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default CardMovies;
