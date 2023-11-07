import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [handleMenu, setHandleMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ handleMenu, setHandleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

MenuProvider.propTypes = {
  children: PropTypes.node,
};

const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

export { MenuProvider, useMenu };
