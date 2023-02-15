import { useState, useEffect } from 'react'
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import mock from './mock.json'

function App() {
  const [tasks, setTasks] = useState(mock)

  return (
    <div className='wrapper'>
      <Header />
      <Main tasks={tasks} setTasks={setTasks} />
      <Footer tasks={tasks} />
    </div>
  );
}

export default App;
