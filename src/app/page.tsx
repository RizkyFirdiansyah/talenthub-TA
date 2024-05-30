import CardMovies from "@/components/card-movie";

export default function Home() {
  return (
    <>
      <header className="flex justify-center bg-sky-500 p-5 ">
        <h1 className="text-4xl font-extrabold uppercase text-white">
          Yours Film
        </h1>
      </header>
      <main className="m-8 mx-auto max-w-screen-2xl px-4">
        <CardMovies />
      </main>
    </>
  );
}
