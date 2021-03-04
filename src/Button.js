import './App.css';

function bemVindo(nome)
{
    alert("Bem vindo "+nome);
}

function Button(props) 
{
const {nome} = props
  return (
    <div className="Button">
       <div>
            <button onClick={() => bemVindo(nome)}>Clicar</button>
       </div>
    </div>
  );
}

export default Button;
