import './Tela.css';

function Tela(props) 
{
  const {somatoria} = props
  return (
    <div className="Tela">
       <div>
            {somatoria}           
       </div>
    </div>
  );
}

export default Tela;
