import Image from "next/image";
import Link from "next/link";

async function getData() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=a8fb8d68eaaec53d6ca206ac0e1d5627&language=en-US&page=1",
  );

  const data = await response.json();
  return data.results;
}

export default async function CardMovies() {
  // let linkImage = "https://cdn2.thecatapi.com/images";
  const movies = await getData();

  return (
    <section className="flex flex-wrap justify-center gap-10">
      {movies.map((item: any) => (
        <Link
          href={`/cat/${item.id}`}
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
  );
}
