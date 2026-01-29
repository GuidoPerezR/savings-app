import { useTotalAmountStore } from '@/store/totalAmountStore';
import { useAuthStore } from '@/store/authStore';
import { setAmount } from '@/services/totalAmounts';

type SetIncomeParams = {
  amount: number;
  investedAmount: number;
  savingAmount: number;
};

export const useTotalAmountData = () => {
  const totalAmounts = useTotalAmountStore((state) => state.totalAmounts);
  const user = useAuthStore((state) => state.user);

  const setIncome = ({
    amount,
    investedAmount,
    savingAmount,
  }: SetIncomeParams) => {
    const benefitAmount = amount - (investedAmount + savingAmount);

    const newCurrentBalance =
      (totalAmounts?.current_balance ?? 0) + benefitAmount;
    const newTotalEarnings =
      (totalAmounts?.total_earnings ?? 0) + benefitAmount;
    const newTotalInvestments =
      (totalAmounts?.total_invested ?? 0) + investedAmount;
    const newTotalSavings = (totalAmounts?.total_savings ?? 0) + savingAmount;

    return setAmount(
      {
        current_balance: newCurrentBalance,
        total_earnings: newTotalEarnings,
        total_invested: newTotalInvestments,
        total_savings: newTotalSavings,
      },
      user?.id || '',
    );
  };

  const setExpense = ({ amount }: { amount: number }) => {
    const newTotalSpendings = (totalAmounts?.total_spendings ?? 0) + amount;
    const newCurrentBalance = (totalAmounts?.current_balance ?? 0) - amount;
    return setAmount(
      {
        current_balance: newCurrentBalance,
        total_spendings: newTotalSpendings,
      },
      user?.id || '',
    );
  };

  return {
    setIncome,
    setExpense,
  };
};
