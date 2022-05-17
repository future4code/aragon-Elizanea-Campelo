import "./styles.css";
import Post from './Components/Post';



export default function App() {
  return (
    <>
      <h1>Post</h1>
      
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
    </>
  );
};


