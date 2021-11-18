import React, {useReducer} from 'react';

export default (reducer: any, actions: any, initialState: any) => {

  
  const Context = React.createContext({});

  const Provider = ({children}: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: any = {};
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };
  return {Context, Provider};
};
