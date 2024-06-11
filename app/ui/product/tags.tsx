export default function ProductTags({ tags }: {
  tags: string[];
}) {
  return (
    <div className="flex flex-row flex-wrap border-y-2 border-y-slate-100 px-8 py-6">
      {tags.map((tag) => {
        return (
          <span key={tag} className="m-2 border-2 border-slate-200 rounded-lg px-6 py-2">
            <p>{tag}</p>
          </span>
        );
      })}
    </div>
  );
}