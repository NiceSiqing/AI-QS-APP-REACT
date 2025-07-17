import { createContext, useContext, useState } from 'react';

const AiConfigContext = createContext();

export function AiConfigProvider({ children }) {
  const [aiConfig, setAiConfig] = useState(null); // { appId, apiKey, ... }

  return (
    <AiConfigContext.Provider value={{ aiConfig, setAiConfig }}>
      {children}
    </AiConfigContext.Provider>
  );
}

export function useAiConfig() {
  return useContext(AiConfigContext);
}
