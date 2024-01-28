import { createContext } from 'react';


type ContextType = {
  menuIndex: number | null;
  setMenuIndex: (v: number) => void;
};

export const NavigationContext = createContext<ContextType>({
  menuIndex: 0,
  setMenuIndex: () => {
  }
});
