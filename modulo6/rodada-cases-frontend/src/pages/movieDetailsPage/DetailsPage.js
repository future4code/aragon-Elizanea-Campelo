
import { useNavigate, useParams } from "react-router-dom";
import { actorsList, detalhe, video } from "../../constants/url";
import { useRequestData } from "../../hook/useRequestData";
import { navigateDetailsPageMovie} from "../../router/cordinate";
import { ContainerSection2, Info, Image, DivImage, DivOverview, Footer, Header, Main, Section1, Section2, Section3, Person, DivImagePerson, ContainerSection3 } from "./styled";

export const DetailsPage = () => {

   const navigate = useNavigate()

   const { id } = useParams();

   const [filme] = useRequestData(`${detalhe}${id}?api_key=bcd7082d76136b84840d9763ad64948f&append_to_response=videos&language=pt-BR`)

   const [elenco] = useRequestData(`${actorsList}/${id}/casts?api_key=bcd7082d76136b84840d9763ad64948f`)

   const [trailers] = useRequestData(`${video}/${id}/videos?api_key=bcd7082d76136b84840d9763ad64948f&language=pt-BR`)

   const atc = elenco && elenco.cast.filter(x => x.profile_path !== null)

   const diretor = elenco && elenco.crew.filter(x => x.department === 'Directing')

   const [relacionado] = useRequestData(`${actorsList}/${id}/similar?api_key=bcd7082d76136b84840d9763ad64948f&language=pt-BR`)


   const ator = atc && atc.map((atores, key) => {

      return (
         <Person key={key}>
            <a target="_blank" href={`https://google.com/search?q=${atores.name}`} ><DivImagePerson>
               <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${atores.profile_path}`} ></img>
               {atores.name}  <br></br>
               <strong>{atores.character}</strong>
            </DivImagePerson></a>
         </Person>
      )
   })

   const pafhVerify = (filme) => {

      navigateDetailsPageMovie(navigate, filme.id)
      window.scrollTo(0, 0);
   }

   const ralacao1 = relacionado && relacionado.results.map((similar, key) => {

      return (
         <Person key={similar.id}>
            <DivImagePerson onClick={() => pafhVerify(similar)} >
               <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${similar.backdrop_path}`} ></img>
               <strong>{similar.title}</strong>
            </DivImagePerson>

         </Person>
      )
   })



   return (

      <>
         <Header>TMDB</Header>
         <Main>
            <Section1 backGround={`https://image.tmdb.org/t/p/original/${filme && filme.backdrop_path}`} >
               <DivImage>
                  <Image><img src={`https://image.tmdb.org/t/p/w220_and_h330_face${filme && filme.poster_path}`}></img>
                  </Image>
                  <Info>
                     <div>Diretor:  {diretor && diretor[0] && diretor[0].hasOwnProperty('name') && diretor[0].name}</div>
                     <br></br>
                     <div>Lançamento: {filme && filme.release_date}</div>
                     <div>Imdb: {filme && filme.vote_average}</div>
                  </Info>
               </DivImage>
               <DivOverview>Sinopse<br></br> {filme && filme.overview}</DivOverview>
            </Section1>

            <Section2>
               <strong>Elenco Original</strong>
               <ContainerSection2>
                  {ator}
               </ContainerSection2>
               <strong>Trailer</strong>
               <ContainerSection3>
                  <iframe width="1000" height="700" src={`https://www.youtube.com/embed/${trailers && trailers.hasOwnProperty('results') && trailers.results.length != 0 ? trailers.results[0].key : ''}`}
                     title="YouTube video player" allow="accelerometer; autoplay; 
                  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen="allowfullscreen"
                     mozallowfullscreen="mozallowfullscreen"
                     msallowfullscreen="msallowfullscreen"
                     oallowfullscreen="oallowfullscreen"
                     webkitallowfullscreen="webkitallowfullscreen">
                  </iframe>
               </ContainerSection3>

            </Section2>

            <Section3>
            <strong>Recomendações</strong>
               <ContainerSection2>
                  {ralacao1}
               </ContainerSection2>
            </Section3>

         </Main>

         <Footer>
         
         Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.Todos os direitos reservados !
            
         </Footer>
      </>

   )

}


