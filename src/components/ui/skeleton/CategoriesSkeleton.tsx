export const CategoriesSkeleton = () => {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="flex h-16 animate-pulse flex-col items-center justify-center rounded-xl bg-zinc-800/50"
        >
          <div className="mb-2 h-5 w-5 rounded-full bg-zinc-700/50" />
          <div className="h-2 w-12 rounded bg-zinc-700/50" />
        </div>
      ))}
    </>
  );
};
