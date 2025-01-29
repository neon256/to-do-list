import logo from './logo.svg';
import './App.css';
import Title from './component/title';

import ToDoList from './component/to-do-list';

function App() {
  return (
    <div className={'container'}>
      <Title>Учет выполненых заданий</Title>
      <ToDoList/>
    </div>
  );
}

export default App;
