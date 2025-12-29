import { ArrowBack } from '@/components/icons/ArrowBack.tsx';
import { useState } from 'react';
import { CATEGORIES } from '@/consts/Categories.ts';
import { CategoryCard } from '@/components/ui/CategoryCard.tsx';
import { useNavigate } from 'react-router';

export const AddTransactionPage = () => {
  const [transactionType, setTransactionType] = useState('income');

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
        <form>
          <div className="flex flex-col items-center justify-center">
            <label className="text-sm text-zinc-400">Ingresa el monto</label>
            <input
              type="number"
              placeholder="$0.00"
              className="h-14 w-full px-2 text-center text-4xl font-bold placeholder:text-4xl placeholder:font-bold placeholder:text-zinc-600 focus:outline-none active:outline-none"
            />
          </div>
          <div className="mt-8 flex rounded-2xl bg-secondary p-1">
            <button
              type="button"
              className={`flex-1 rounded-2xl py-2 text-center ${transactionType === 'income' && 'bg-primary'}`}
              onClick={() => setTransactionType('income')}
            >
              Ganancia
            </button>
            <button
              type="button"
              className={`flex-1 rounded-2xl py-2 text-center ${transactionType === 'expense' && 'bg-primary'}`}
              onClick={() => setTransactionType('expense')}
            >
              Gasto
            </button>
          </div>

          <div className="mt-8">
            <label className="font-semibold">Categoria</label>

            <div className="mt-2 grid grid-cols-5 gap-3">
              {CATEGORIES.map(({ id, name, icon: Icon }) => (
                <CategoryCard key={id} name={name} icon={Icon} />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-primary py-3 font-bold"
          >
            Guardar Movimiento
          </button>
        </form>
      </section>
    </main>
  );
};
