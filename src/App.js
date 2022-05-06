import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {

  return (
    <div className="App">
      <Frase />
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
