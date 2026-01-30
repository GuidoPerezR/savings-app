import { Suspense, useMemo } from 'react';
import { Categories } from '@/components/ui/Categories';
import { getCategories } from '@/services/categories';
import { useTransactionForm } from '@/hooks/useTransactionForm';
import { CategoriesSkeleton } from '@/components/ui/skeleton/CategoriesSkeleton';
import { Loader } from '../icons/Loader';

export const AddTransactionForm = () => {
  const {
    handleSubmit,
    amountValueInput,
    titleValueInput,
    transactionType,
    setTransactionType,
    onChangeInput,
    investedAmount,
    savingAmount,
    isLoading,
  } = useTransactionForm();

  const fetchCategories = useMemo(() => getCategories(), []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center">
        <label className="text-sm text-zinc-400">
          Ingresa nombre del movimiento
        </label>
        <input
          ref={titleValueInput}
          type="text"
          placeholder="Corte de cabello"
          className="h-14 w-full px-2 text-center text-4xl font-bold placeholder:text-4xl placeholder:font-bold placeholder:text-zinc-600 focus:outline-none active:outline-none"
        />
      </div>
      <div className="mt-2 flex flex-col items-center justify-center">
        <label className="text-sm text-zinc-400">Ingresa el monto</label>
        <input
          ref={amountValueInput}
          type="number"
          placeholder="$0.00"
          className="h-14 w-full px-2 text-center text-4xl font-bold placeholder:text-4xl placeholder:font-bold placeholder:text-zinc-600 focus:outline-none active:outline-none"
          onChange={(e) => onChangeInput(e)}
        />
        {investedAmount > 0 && transactionType === 'income' && (
          <div className="flex w-full items-center justify-center gap-8 pt-2 text-sm">
            <div className="flex gap-1">
              <span className="text-center font-semibold text-investing/80">
                Inversion:
              </span>
              <span className="text-center text-zinc-400">
                ${investedAmount}
              </span>
            </div>
            <div className="flex gap-1">
              <span className="text-center font-semibold text-earning/80">
                Personal:
              </span>
              <span className="text-center text-zinc-400">${savingAmount}</span>
            </div>
          </div>
        )}
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
          <Suspense fallback={<CategoriesSkeleton />}>
            <Categories promise={fetchCategories} />
          </Suspense>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center rounded-2xl bg-primary py-3 font-bold disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isLoading}
      >
        {isLoading ? <Loader /> : 'Guardar Movimiento'}
      </button>
    </form>
  );
};
