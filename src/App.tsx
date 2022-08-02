import { Routes, Route } from 'react-router-dom';
import s from './App.module.scss'
import Login from './components/Main/Login/Login';
import Todo from './components/Main/Todo/Todo';

function App() {
  return (
    <div className={s.App}>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="*" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
