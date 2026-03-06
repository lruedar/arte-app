import { MoviesList } from "../ui/MoviesList";

export default function MoviesPage() {
  return (
    <div className="container mx-auto p-6">
      <section className="bg-gray-50 rounded-lg p-4">
        <MoviesList />
      </section>
    </div>
  );
}