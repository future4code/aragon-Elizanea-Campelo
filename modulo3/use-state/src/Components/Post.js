import { useState } from "react";



function Post(props) {
  // Passo5
  // Crie a lógica de estados funcionais aqui.
  const [curtido,setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios,setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])
  const [inputValue, setInputValue] = useState("")
  // Passo7
  const onClickCurtida = () => {
    if (curtido) {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)
      
    } else {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas + 1)
    } // Crie a lógica de onClickCurtida aqui.
  };

  // Passo7
  const onClickComentario = () => {
      setComentando(!comentando)
    // Crie a lógica de onClickComentario aqui.
  };

  // Passo7
  const onChangeComentario = (event) => {
    setInputValue(event.target.value)
    // Crie a lógica de onChangeComentario aqui.
  };

  // Passo7
  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, inputValue]
    setComentarios(listaDeComentarios)
    setNumeroComentarios(numeroComentarios)
    setInputValue("")// Crie a lógica de enviarComentario aqui.
  };

  {/* Passo6 */}
  const caixaDeComentario = true ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
      <input
      tupe="text"
        id={"comentario"}
        value={inputValue}
        onChange={onChangeComentario}

      />
      {/* Passo4 */}
      <button onClick={enviarComentario}>Enviar</button>
    </>
  ) : (
    // Passo8
    <>Lógica de exibir lista de comentarios</>
    // this.state.comentarios.map((comentario, index) => {
    //   return (
    //     <div key={index}>
    //       <p>{comentario}</p>
    //     </div>
    //   )
    // })
  );

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>Nome do usuário aqui</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas:{numeroCurtidas}</span>
          {/* Passo4 */}
          <button onClick={onClickCurtida} >
          {numeroCurtidas === 0 ? "Like" : "Dislike"}
          {/* Passo6 */}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: {numeroComentarios}</span>
          {/* Passo4 */}
          <button onClick={onClickComentario} >
            {comentando===false ? "Fechar comentário" : "Adicionar comentário"/* Passo6 */}
            
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;