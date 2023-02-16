'use client';
import { createContext, useCallback, useContext, useState } from 'react';

const TokenContext = createContext<{
  updateToken: (token: string) => void;
  token: string | null;
}>({
  updateToken: () => {},
  token: null,
});

interface TokenProviderProps {
  children: React.ReactNode;
}

export const TokenProvider = ({ children }: TokenProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  const updateToken = useCallback(
    (value: string) => setToken(value),
    [setToken]
  );

  const value = {
    updateToken,
    token,
  };

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext);
};
