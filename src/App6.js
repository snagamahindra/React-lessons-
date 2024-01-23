import React, { createContext, useContext, useState } from 'react';

// Create a context with a default theme
const ThemeContext = createContext('light');

// Context provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access the theme context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// ThemedComponent that uses the context
const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1 style={{ color: theme === 'light' ? 'black' : 'white', backgroundColor: theme === 'light' ? 'white' : 'black' }}>
        ThemedComponent - Current Theme: {theme}
      </h1>
      <button className="btn btn-primary" onClick={toggleTheme}>Toggle Theme</button>
      <ChildComponent />
    </div>
  );
};

// ChildComponent that also uses the theme context
const ChildComponent = () => {
  const { theme } = useTheme();

  return (
    <div style={{ marginTop: '20px', color: theme === 'light' ? 'black' : 'white', backgroundColor: theme === 'light' ? 'white' : 'black' }}>
      ChildComponent - Current Theme: {theme}
    </div>
  );
};

// App component that wraps the ThemedComponent with the ThemeProvider
const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;




