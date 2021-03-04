import './App.css';
import Button from './components/Button';
import Tela from './components/Tela';
import React, { useState } from 'react';

const botoes = 
[
  {'texto': '7', 'tipo' : 'numero', 'acao' : 'nenhuma'},
  {'texto': '8', 'tipo' : 'numero', 'acao' : 'nenhuma'},
  {'texto': '9', 'tipo' : 'numero', 'acao' : 'nenhuma'},
  {'texto': '/', 'tipo' : 'operador', 'acao' : 'dividir'},
  {'texto': '4', 'tipo' : 'numero', 'acao' : 'nenhuma'},
  {'texto': '5', 'tipo' : 'numero', 'acao' : 'nenhuma'},
  {'texto': '6', 'tipo' : 'numero', 'acao' : 'nenhuma'},
  {'texto': 'X', 'tipo' : 'operador', 'acao' : 'multiplicar'},
  {'texto': '1', 'tipo' : 'numero', 'acao' : 'nenhuma'},
  {'texto': '2', 'tipo' : 'numero', 'acao' : 'nenhuma'},
  {'texto': '3', 'tipo' : 'numero', 'acao' : 'nenhuma'},
  {'texto': '+', 'tipo' : 'operador', 'acao' : 'somar'},
  {'texto': 'C', 'tipo' : 'operador', 'acao' : 'limpar'},
  {'texto': '0', 'tipo' : 'numero', 'acao' : 'nenhuma'},
  {'texto': '=', 'tipo' : 'operador', 'acao' : 'calcular'},
  {'texto': '-', 'tipo' : 'operador', 'acao' : 'subtrair'}
]

function App() 
{
  
  const [somatoria, setSomatoria] = useState(0);
  const [numeroAnt, setNumeroAnt] = useState('');
  const [numeroPost, setNumeroPost] = useState('');
  const [operacao, setOperacao] = useState(0);

  const soma = (valores) => 
  {
    if(valores.tipo === "operador")
    {
      console.log("operador");
       if(valores.acao === "calcular")
       {
          console.log("calcular");
          console.log(numeroAnt);
          console.log(numeroPost);
          if(numeroAnt.length > 0 && numeroPost.length > 0 && operacao.length > 0)
          {
              let resultado = '';
              console.log(operacao);
              switch(operacao)
              {
                case "dividir":
                    resultado = parseInt(numeroPost) !== 0 ? parseInt(numeroAnt) / parseInt(numeroPost) : 'erro';
                    break;
                  case "multiplicar":
                      resultado = parseInt(numeroAnt) * parseInt(numeroPost);
                      break;
                  case "somar":
                    resultado = parseInt(numeroAnt) + parseInt(numeroPost);
                    break;
                  case "subtrair":
                    resultado = parseInt(numeroAnt) - parseInt(numeroPost);
                    break;
                  default:
                    resultado = 'erro';
                    break;      
              }

              console.log(resultado);

              setOperacao('');
              setSomatoria(resultado);
              setNumeroAnt('');
              setNumeroPost('');
          }
       }
       else if(valores.acao === "limpar")
       {
        console.log("limpar");
          setOperacao('');
          setSomatoria('0');
          setNumeroAnt('');
          setNumeroPost('');
       }
       else
       {
        
        if(numeroAnt.length > 0 && numeroPost.length === 0)
        {
            setOperacao(valores.acao);
        }
      }
    }
    else
    {
      console.log("numero");
       if(numeroAnt.length === 0)
       {
          setNumeroAnt(valores.texto);
       }
       else
       {
         setNumeroPost(valores.texto);
       }
    }
    console.log(valores);
    //  setSomatoria(number);
  }

  return (
    <div className="App">
      <div className="quebra-linha">
          <Tela somatoria={somatoria}/>
       </div>
      {botoes.map((campo, index) => 
      {
 
          return <Button valor={campo} executar={soma}/>   
         
      } )}
    </div>
  );
}

export default App;
