import './App.css';
import image from './cooking.jpg'
import image1 from './eat.jpg'
import image2 from './wasCar.jpg'
import image3 from './shopping.jpg'
import image4 from './sup.jpg'
import image5 from './toDo.jpg'

import { ToDoList } from './toDoList';

function App() {
  return (
    <div className='app'>

      <div className='container1'>
      <img src={ image } alt='cooking' width='250px' height='250px'/>
      <img src={ image1 } alt='eat' width='250px' height='250px'/>
      <img src={ image2 } alt='wash' width='250px' height='250px'/>
      </div>

      <div className='toDoList'>
        <h1>To Do List</h1>
        <ToDoList />
      </div>

      <div className='container2'>
      <img src={ image3 } alt='cooking' width='250px' height='250px'/>
      <img src={ image4 } alt='eat' width='250px' height='250px'/>
      <img src={ image5 } alt='wash' width='250px' height='250px'/>
      </div>

    </div>
  );
}

export default App;
