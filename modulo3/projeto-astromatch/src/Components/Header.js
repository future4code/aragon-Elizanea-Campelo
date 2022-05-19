

export default function Header (props){
  return (
    <header>
     <h1> ASTROMATCH</h1>
     {props.pagina==="profiles" ? 
     <button onClick={props.paginaMatches}> MATCHES</button>
     :<button OnClick={props.paginaPerfil}>PERFIL</button>}
    </header>
  )
}