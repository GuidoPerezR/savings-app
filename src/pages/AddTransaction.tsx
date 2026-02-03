import { ArrowBack } from '@/components/icons/ArrowBack.tsx';
import { useNavigate } from 'react-router';
import { AddTransactionForm } from '@/components/ui/AddTransactionForm';

export default function AddTransactionPage() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <main className="flex min-h-dvh w-full justify-center bg-dark px-5 pt-24 pb-32 font-jakarta-sans text-light">
      <section className="w-full max-w-4xl">
        <header className="flex items-center gap-2.5">
          <button
            className="cursor-pointer rounded-full bg-zinc-600 p-3 transition-colors duration-300 ease-in-out hover:bg-tertiary"
            onClick={handleBackButton}
          >
            <ArrowBack className="size-4 md:size-6" />
          </button>
          <h2 className="text-lg font-bold md:text-xl">Agregar Movimiento</h2>
        </header>

        <div className="mt-6 w-full lg:mt-10">
          <AddTransactionForm />
        </div>
      </section>
    </main>
  );
}
