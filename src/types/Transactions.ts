export interface Transaction {
  id: number;
  categoryId: number;
  title: string;
  date: string;
  amount: number;
  type: 'earning' | 'spending';
}
