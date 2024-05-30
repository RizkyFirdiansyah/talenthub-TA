import Image from "next/image";
import Link from "next/link";

async function getData(id: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=a8fb8d68eaaec53d6ca206ac0e1d5627&language=en-US`,
  );
  return response.json();
}

export default async function DetailFilms({
  params,
}: {
  params: { id: string };
}) {
  const movies = await getData(params.id);

  return (
    <>
      <header className="bg-sky-500 p-5 px-14 text-white">
        <Link href={"/"} className="flex items-center gap-2 text-3xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"
            />
          </svg>
          <p>Back</p>
        </Link>
      </header>
      <section className="m-16 mx-auto flex max-w-screen-2xl flex-wrap gap-10 px-16  md:flex-nowrap">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
          alt={movies.title}
          width={800}
          height={800}
          className="h-auto w-[100%] rounded-2xl object-cover shadow-xl md:h-[40rem] md:w-[500px]"
        />
        <div className="">
          <h1 className="text-6xl font-bold">{movies.title}</h1>
          <p className="mt-4 text-xl font-semibold text-rose-700">
            {movies.status} - {movies.release_date}
          </p>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-blue-700">Country</h3>
            <p className="mt-2 text-xl ">{movies.origin_country}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-blue-700">Duration</h3>
            <p className="mt-2  text-xl  ">{movies.runtime}m</p>
          </div>

          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-blue-700 ">Overview</h3>
            <p className="w-fu1 mt-2 text-xl md:w-3/4  ">{movies.overview}</p>
          </div>
        </div>
      </section>
    </>
  );
}
