import { ArrowBack } from '@/components/icons/ArrowBack.tsx';
import { useNavigate } from 'react-router';
import { AddTransactionForm } from '@/components/ui/AddTransactionForm';

export default function AddTransactionPage() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <main className="flex min-h-dvh w-full flex-col bg-dark p-24 px-5 font-jakarta-sans text-light">
      <header className="flex items-center gap-2.5">
        <button
          className="rounded-full bg-zinc-600 p-3"
          onClick={handleBackButton}
        >
          <ArrowBack className="size-4" />
        </button>
        <h2 className="text-lg font-bold">Agregar Movimiento</h2>
      </header>

      <section className="mt-6 w-full">
        <AddTransactionForm />
      </section>
    </main>
  );
}
