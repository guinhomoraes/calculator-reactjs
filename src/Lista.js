import './App.css';
import Opcoes from './Opcoes';


function Lista(props) 
{
const {nome} = props
  return (
    <div className="Lista">
       <ul>
            <Opcoes campo="teste"/>
            <Opcoes campo="teste"/>
            <Opcoes campo="teste"/>
            <Opcoes campo="teste"/>
            <Opcoes campo="teste"/>
       </ul>
    </div>
  );
}

export default Lista;
