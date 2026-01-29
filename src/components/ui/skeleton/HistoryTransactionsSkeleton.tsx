export const HistoryTransactionsSkeleton = () => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <li
          key={index}
          className="flex animate-pulse items-center justify-between rounded-2xl bg-navbar p-4"
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-zinc-700/50" />
            <div className="flex flex-col gap-2">
              <div className="h-4 w-32 rounded bg-zinc-700/50" />
              <div className="h-3 w-20 rounded bg-zinc-700/50" />
            </div>
          </div>
          <div className="h-6 w-16 rounded bg-zinc-700/50" />
        </li>
      ))}
    </>
  );
};
