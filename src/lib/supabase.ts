import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getDemoAccounts = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .limit(2);

  if (error) throw error;
  return data;
};

export const createTransaction = async (userId: string, type: string, amount: number, currency: string) => {
  const { data, error } = await supabase
    .from('transactions')
    .insert([
      {
        user_id: userId,
        type,
        amount,
        currency,
        status: 'completed'
      }
    ])
    .select();

  if (error) throw error;
  return data;
};