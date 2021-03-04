import './App.css';


function Opcoes(props) 
{
    const {campo} = props
    return (
        <div className="Opcoes">
            <li>
                    {campo}
            </li>
        </div>
    );
}

export default Opcoes;
