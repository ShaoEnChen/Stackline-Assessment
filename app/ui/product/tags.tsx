export default function ProductTags({ tags }: {
  tags: string[];
}) {
  return (
    <div className="flex flex-row flex-wrap border-y-2 border-y-slate-100 p-4">
      {tags.map((tag: string) => {
        return (
          <span key={tag} className="mx-1 my-2 border-2 border-slate-200 rounded-lg px-6 py-2 text-xs">
            {tag}
          </span>
        );
      })}
    </div>
  );
}