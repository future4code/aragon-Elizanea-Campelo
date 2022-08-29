import { trend, findMovie} from '../../constants/url'
import { useRequestData } from '../../hook/useRequestData'
import { Card, ContainerCheck, ContainerSection2, Data, DivImage, Footer, Header, Image, input, InfoCard, Main, Section1, Section2, Section3, SenctionFind } from './styled'
import { BasicPag } from '../../components/pag'
import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { navigateDetailsPageMovie, navigateHomePage } from '../../router/cordinate'


export const HomePage = () => {
   const navigate = useNavigate()
   const [page, setPage] = useState(1);
   const [textfield, setTextfield] = useState('')
   const [findMovie1, setFindmovie1] = useRequestData(`${textfield.length === 0 ? trend : findMovie}&page=${page}&query=${textfield}&language=pt-BR&region=BR`)

   //const showGenreList = 
    

   const handleChange = (event, value) => {
      setPage(value);
      window.scrollTo(0, 0);
   };

   const onChangeSearchMovie = (event) => {
      setTextfield(event.target.value)
   }

   const pafhVerify = (movie) => {

      navigateDetailsPageMovie(navigate, movie.id)
      window.scrollTo(0, 0)

   }


   const movies = findMovie1 && findMovie1.results.map((movie, key) => {

      return (

         <Card key={key} >
            <DivImage>
               <Image onClick={() => pafhVerify(movie)} type="image" src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}></Image>
            </DivImage>
            <InfoCard>
               {movie.title === undefined ? movie.name : movie.title}
            </InfoCard>
            <Data>{movie.release_date === undefined ? movie.first_air_date : movie.release_date}</Data>

         </Card>
      )
   })

   return (
      <>
         <Header>TMDB</Header>
         <Main>
            <Section1>

               

               <ContainerCheck>Ação <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"></Button></ContainerCheck>
               <ContainerCheck>Aventura <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Comedia <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Crime <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Documentário <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Drama <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Familia <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Fantasia <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Historia <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Terror <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Música <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Mistério <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Romance <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Ficcão Cientifica <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Cinema TV <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Thriller <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Guerra <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <ContainerCheck>Faroeste <Button onclick="window.location.href = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bcd7082d76136b84840d9763ad64948f&language=en-US'"/></ContainerCheck>
               <SenctionFind>
                  <TextField sx={input} id="filled-basic"
                     onChange={onChangeSearchMovie}
                     value={textfield}
                     label="Digite o Filme" variant="filled" />
               </SenctionFind>
            </Section1>

            <Section2>
               <ContainerSection2>
                  {movies}
               </ContainerSection2>
            </Section2>

            <Section3>
               <BasicPag
                  color="primary"
                  onChange={handleChange}
                  count={findMovie1 ? findMovie1.total_pages : 1}
               ></BasicPag>
            </Section3>
         </Main>

         <Footer>
            Todos os direitos reservados !
            <button onClick={() => navigateHomePage(navigate, "/home")} >home</button>
         </Footer>
      </>
   )
}
