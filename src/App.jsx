import './App.css';
import Botoes from './components/Botoes';
import Display from './components/Display';

function App() {

  return (
    <>
      <div className='calculadora-container'>
        <Display/>
        <Botoes/>
      </div>
    </>
  );
}

export default App;
