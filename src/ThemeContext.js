import React from 'react';

const ThemeContext = React.createContext('light');
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export {
	ThemeContext,
	ThemeProvider,
	ThemeConsumer,
};
