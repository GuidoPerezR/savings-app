import { Loader } from '@/components/icons/Loader';

export const PageSkeleton = () => {
  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-dark">
      <Loader />
    </div>
  );
};
