import './App.css';
import  Taskk6  from './Taskk6';
import { Card } from './Task7/Card';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './Home/Home';
import Task3 from './Task3/Task3';
import {Task2} from './Task2/Task2';
import {Task4} from './Task4/Task4';
import { Task5 } from './Task5/Task5';
import { Counter } from './Counter/Counter';
import { Product } from './Product/Product';
import { Details } from './Product/Details';
import { Task9 } from './Task9/Task9';
import { Task10 } from './Task10/Task10';
import { Thanks } from './Task10/Thanks';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Task3' element={[<Home/>,<Task3/>]}/>
      <Route path='/Taskk6' element={[<Home/>,<Taskk6 />]}/>
      <Route path='/Card' element={[<Home/>,<Card />]}/>
      <Route path='/Task2' element={[<Home/>,<Task2 />]}/>
      <Route path='/Task4' element={[<Home/>,<Task4 />]}/>
      <Route path='/Task5' element={[<Home/>,<Task5 />]}/>
      <Route path='/Counter' element={[<Home/>,<Counter />]}/>
      <Route path='/Product' element={[<Home/>,<Product />]}/>
      <Route path='/details/:id' element={[<Home/>,<Details/>]}/>
      <Route path='/Task9' element={[<Home/>,<Task9/>]}/>
      <Route path='/Task10' element={[<Home/>,<Task10/>]}/>
      <Route path='/Thanks' element={[<Home/>,<Thanks/>]}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
