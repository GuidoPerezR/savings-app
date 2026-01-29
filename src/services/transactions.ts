import { supabase } from '@/lib/supabase';
import type {
  Transaction,
  TransactionWithCategory,
} from '@/types/Transactions';
import type { UserId } from '@/types/User';

interface InsertTransactionParams {
  transaction: Transaction;
}

export const insertTransaction = async ({
  transaction,
}: InsertTransactionParams) => {
  const { data, error } = await supabase
    .from('transactions')
    .insert(transaction)
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getLastTransactions = async (userId: UserId) => {
  const { data, error } = await supabase
    .from('transactions')
    .select(
      `
    id,
    title,
    amount,
    date,
    type,
    categories (
    id,
      name
    )
  `,
    )
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) {
    throw new Error(error.message);
  }

  return data as unknown as TransactionWithCategory[];
};

export const getTransactionsHistory = async ({
  userId,
  startDate,
  endDate,
}: {
  userId: UserId;
  startDate: string;
  endDate: string;
}) => {
  const { data, error } = await supabase
    .from('transactions')
    .select(
      `
    id,
    title,
    amount,
    date,
    type,
    categories (
      id,
      name
    )
  `,
    )
    .eq('user_id', userId)
    .gte('created_at', startDate)
    .lte('created_at', endDate)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data as unknown as TransactionWithCategory[];
};
