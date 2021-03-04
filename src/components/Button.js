import './Button.css'


function Button(props) 
{
const {valor, executar} = props
  return (
    <div className="Button">
            <button onClick={() => executar(valor)}>{valor.texto}</button>
    </div>
  );
}

export default Button;
