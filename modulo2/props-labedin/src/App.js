import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoPerfil from './img/fotoPerfil.png';
import logoMundo from './img/logoMundo.png';
import instagram from './img/instagram.png';
import twitter from './img/twitter.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './img/email.png';
import end from './img/end.png';
import styled from 'styled-components';



const BigcardContainer  = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`

 BigcardContainer = styled `
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
  `

  BigcardContainer= styled.img`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`

 BigcardContainer = styled.h4` 
  margin-bottom: 15px; 
  `

const ImageButtonContainer = styled `
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  padding: 15px 30px;
  margin: 10px auto;
  `

ImageButtonContainer = styled.img ` 
  width: 30px;
  margin-right: 10px;
  `
  const SmallcardContainer = styled `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 10px;
    margin-bottom: 5px;
    height: 100px;
    `

 SmallcardContainer = styled.img `
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
   
   `


SmallcardContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil} 
          nome="Elizanea Campelo" 
          descricao="Oi, eu sou o Elizanea Campelo. Sou estudante da Labenu. Tenho habilidade e facilidade de relacionamento e de trabalho em equipe voltado para resultados mensuráveis em consonância com as metas e objetivo das empresas;
          • Comunicação, dinamismo, organização e capacidade de aprendizado e para superar desafios"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <h2>Dados Cadastrais</h2>
        <CardPequeno 
          imagem={email} 
          email="elizxcampelo@hotmail.com" 
        /> 
        <CardPequeno
          imagem={end} 
          endereco="rua da gloria"
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logoMundo} 
          nome="Mundo Educacional" 
          descricao="Leitura e alimentação e manutenção e envio de relatórios para importação da
          plataforma Analytics em Banco de Dados" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Utilgrafica E Editora Ltda" 
          descricao="• Negociação com Bancos/Fornecedores/Clientes.
                     • Cobrança.
                     • Conferência no Setor de Custo.
                     • Criação de Identidade Visual" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem={instagram} 
           href="https://www.instagram.com/eliz_campelo/" 
          texto="Instagram" 
        />        

        <ImagemButton 
          imagem={twitter}
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
