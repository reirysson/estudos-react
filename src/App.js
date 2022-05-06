import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  return (
    <div className="App">
      <SayMyName nome="Reirysson"/>
      <Pessoa 
        nome="Reirysson" 
        idade="23" 
        profissao="desenvolvedor" 
        foto="https://avatars.githubusercontent.com/u/92035697?v=4" 
      />
    </div>
  );
}

export default App;
