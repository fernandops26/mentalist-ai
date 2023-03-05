"use client";

import { createContext, useContext, useState } from "react";
import { AvailableModel, isAvailableModel } from "../constants/openai";

export interface OpenAIConfigurationContextValue {
  updateToken: (token: string) => void;
  token: string | null;

  model: AvailableModel;
  updateModel: (model: AvailableModel) => void;
}

const OpenAIConfigurationContext = createContext<OpenAIConfigurationContextValue>({
  updateToken: () => {},
  token: null,

  model: "text-davinci-003",
  updateModel: () => {},
});

interface OpenAIConfigurationProviderProps {
  children: React.ReactNode;
}

export const OpenAIConfigurationProvider = ({ children }: OpenAIConfigurationProviderProps) => {
  // ?: We store this as a variable so we can use our type guard to infer the correct type
  // ?: for usage with `useState`
  const defaultModel = process.env.NEXT_PUBLIC_OPENAI_COMPLETION_MODEL ?? '';

  const [token, setToken] = useState(() => process.env.NEXT_PUBLIC_OPENAI_API_KEY ?? "");
  const [model, setModel] = useState<AvailableModel>(() => isAvailableModel(defaultModel) ? defaultModel : "text-davinci-003");


  const value = {
    updateToken: setToken,
    token,

    model,
    updateModel: setModel,
  };

  return (
    <OpenAIConfigurationContext.Provider value={value}>{children}</OpenAIConfigurationContext.Provider>
  );
};

export const useOpenAIConfiguration = () => {
  return useContext(OpenAIConfigurationContext);
};
