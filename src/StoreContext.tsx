import * as React from "react";
import {StateType, StoreType} from "./redux/store";

interface IContextProps {
  state: StateType;
  dispatch: ({type}:{type:string}) => void;
  getState: () => StateType
}


const StoreContext = React.createContext({} as IContextProps);

export type ProviderType = {
  store: StoreType,
  children: any
}

export const Provider = (props: any) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContext;