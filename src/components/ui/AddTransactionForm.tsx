import { Suspense, useMemo } from 'react';
import { Categories } from '@/components/ui/Categories';
import { getCategories } from '@/services/categories';
import { useTransactionForm } from '@/hooks/useTransactionForm';

export const AddTransactionForm = () => {
  const {
    handleSubmit,
    amountValueInput,
    titleValueInput,
    transactionType,
    setTransactionType,
  } = useTransactionForm();

  const fetchCategories = useMemo(() => getCategories(), []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center">
        <label className="text-sm text-zinc-400">
          Ingresa nombre del movimiento
        </label>
        <input
          required
          ref={titleValueInput}
          type="text"
          placeholder="Corte de cabello"
          className="h-14 w-full px-2 text-center text-4xl font-bold placeholder:text-4xl placeholder:font-bold placeholder:text-zinc-600 focus:outline-none active:outline-none"
        />
      </div>
      <div className="mt-2 flex flex-col items-center justify-center">
        <label className="text-sm text-zinc-400">Ingresa el monto</label>
        <input
          required
          ref={amountValueInput}
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
          <Suspense fallback={<div>Cargando...</div>}>
            <Categories promise={fetchCategories} />
          </Suspense>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-2xl bg-primary py-3 font-bold"
      >
        Guardar Movimiento
      </button>
    </form>
  );
};
