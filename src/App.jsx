import {useState} from 'react';

import Header from './components/header';
import ToDoList from './components/to-do/to-do-list';

import {ContextProvider} from './components/store/context';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    };
  };

  return (
    <ContextProvider>
      <main className={`main ${theme}-mode`}>
        <Header theme={theme} changeTheme={changeTheme}/>
        <ToDoList/>
      </main>
    </ContextProvider>
  );
};

export default App;