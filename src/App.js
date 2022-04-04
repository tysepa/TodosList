import Todo from './components/Todo';


function App() {
  return (
        <center>
      <div>
        <h1>My Todos</h1>
        <div className='part'>
          <label>Name</label>
          <input type="text"/>
          <label>Description</label>
          <input type="text"/>
          <button className='bnt btn-hd'>Add Todo</button>
        </div>
        <Todo text='Task 1' />
        <Todo text='Task 2' />
        <Todo text='Task 3' />
        <Todo text='Task 4' />
      </div>
        </center>
  );
}

export default App;
