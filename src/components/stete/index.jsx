import { createContext, useState } from "react";


export const TokenCantext = createContext();
export const ModeContext = createContext();
export const RecCantext = createContext();

export const ProviderMode = ({children})=>{
  const [ mode, setMode ] = useState(false);
  return(
    <ModeContext.Provider value={{ mode, setMode}}>
      {children}
    </ModeContext.Provider>
  )
};

export const TokenProvider = ({children}) => {
  const [ token, setToken ] = useState(false);
  return(
    <TokenCantext.Provider value ={{ token, setToken}}>
      {children}
    </TokenCantext.Provider>
  )
};

export const RecProvider = ({children}) => {
  const [ rec, setRec ] = useState(false);
  return(
    <RecCantext.Provider value ={{ rec, setRec}}>
      {children}
    </RecCantext.Provider>
  )
};