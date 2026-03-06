import ActorsList from "../ui/ActorsList";

export default function ActorsPage() {
  return (
    <div className="container mx-auto p-6">
      <section className="bg-gray-50 rounded-lg p-4">
        <ActorsList />
      </section>
    </div>
  );
}