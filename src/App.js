import './App.css';
import Button from './Button';
import Lista from './Lista';

function Nome(props)
{
  const {nome} = props
   return(
     <p>
       {nome}
    </p>
   )
}

function App() {
  return (
    <div className="App">
       <div>
         <Nome nome="Guilherme"/>
         <Button nome="Guilherme"/>
         <Lista />
       </div>
    </div>
  );
}

export default App;
