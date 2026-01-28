import type { CategoryId, Category } from './Categories';
import type { UserId } from './User';

export type TransactionType = 'income' | 'expense';
export interface Transaction {
  id?: number;
  created_at?: EpochTimeStamp;
  title: string;
  date: string;
  amount: number;
  type: TransactionType;
  categoryId: CategoryId;
  user_id: UserId;
}

export type TransactionWithCategory = Omit<
  Transaction,
  'categoryId' | 'user_id' | 'created_at'
> & {
  categories: Category;
};
