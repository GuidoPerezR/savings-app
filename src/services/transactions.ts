import { supabase } from '@/lib/supabase';
import type {
  Transaction,
  TransactionWithCategory,
} from '@/types/Transactions';
import type { UserId } from '@/types/User';
import { parse, ValiError } from 'valibot';
import { transactionSchema } from '@/schemas/Transactions';

interface InsertTransactionParams {
  transaction: Transaction;
}

export const insertTransaction = async ({
  transaction,
}: InsertTransactionParams) => {
  try {
    // Validando info
    const newTransaction = parse(transactionSchema, transaction);

    const { data, error } = await supabase
      .from('transactions')
      .insert(newTransaction)
      .select();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (e) {
    if (e instanceof ValiError) {
      throw new Error(e.message);
    }

    if (e instanceof Error) {
      throw new Error('No se pudo crear la transacción');
    }

    throw new Error('Unexpected error');
  }
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
