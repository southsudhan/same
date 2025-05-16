/*
  # Initial Database Schema Setup

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - wallet_address (text)
      - balance (numeric)
      - created_at (timestamp)
    
    - transactions
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - type (text)
      - amount (numeric)
      - currency (text)
      - status (text)
      - created_at (timestamp)
    
    - wallets
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - currency (text)
      - balance (numeric)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  wallet_address text,
  balance numeric DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  type text NOT NULL,
  amount numeric NOT NULL,
  currency text NOT NULL,
  status text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE wallets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  currency text NOT NULL,
  balance numeric DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE wallets ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can view own transactions" ON transactions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own transactions" ON transactions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own wallets" ON wallets
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own wallets" ON wallets
  FOR ALL USING (auth.uid() = user_id);

-- Insert demo accounts
INSERT INTO users (id, email, wallet_address, balance) VALUES
  ('11111111-1111-1111-1111-111111111111', 'demo@example.com', '0x1234567890abcdef', 10000),
  ('22222222-2222-2222-2222-222222222222', 'trader@example.com', '0xabcdef1234567890', 25000);