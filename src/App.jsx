import {useState} from 'react';

import Header from './components/header';
import ToDoList from './components/to-do/to-do-list';

import {ContextProvider} from './components/store/context';

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <ContextProvider>
      <main className="main light-mode">
        <Header/>
        <ToDoList/>
      </main>
    </ContextProvider>
  );
};

export default App;