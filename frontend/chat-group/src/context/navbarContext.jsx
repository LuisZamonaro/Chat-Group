import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [handleNavbar, setHandleNavbar] = useState(0);

  return (
    <NavbarContext.Provider value={{ handleNavbar, setHandleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
}

NavbarProvider.propTypes = {
  children: PropTypes.node,
};

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar deve ser usado dentro de um NavbarProvider');
  }
  return context;
}
