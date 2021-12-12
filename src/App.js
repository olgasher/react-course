import logo from './logo.svg';
import './App.css';
import { Login } from './components/login/Login';
import {TodoList} from './components/TodoList';
import {Header} from './components/Header/Header';

function App() {
  return (
      <div className="App">
        <div>
            <Header user={{firstName: 'Olga', lastName: 'Sherer', email: 'olga.sh2@gmail.com'}} />
            <Header />
        </div>
        <div className="App">
            <Login/>
        </div>
        <div className='App'>
            <TodoList/>
        </div>
      </div>
  );
}

export default App;
