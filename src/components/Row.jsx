import Card from "./Card";

export default function Row({ title, items }) {
  return (
    <div className="px-4 sm:px-8 mt-6">
      <h2 className="text-white text-lg sm:text-xl font-semibold mb-3">
        {title}
      </h2>

      <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pr-2">
  {items.map((it, idx) => (
    <Card key={`${it.title}-${idx}`} item={it} />
  ))}
</div>
    </div>
  );
}