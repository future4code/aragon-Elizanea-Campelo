/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 
 - As cartas tem um valor de acordo com seu número (a carta 4♣️ tem valor 4, e a carta 9♦️ tem valor 9). 
 As cartas J, Q e K tem valor 10, e a carta A tem valor 11.
 (13 números e 4 naipes)
  naipe (Copas (♥️), Paus (♣️), Ouros(♦️) e Espadas(♠️)). 
   jogo inicia com cada jogador (usuário e computador) recebendo 2 cartas.
    A pontuação de cada jogador é a soma do valor das suas cartas.  */
    //1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".

    console.log("♥️ Boas vindas ao jogo de Blackjack!♠️")

    
    let usuario
    let computador
    let somarCartaUsuario
    

    let rodada = confirm("Quer iniciar uma nova rodada?")
    
         if(rodada) {

            
               
               let cartaUsuario1 = comprarCarta(usuario)     
               let cartaUsuario2 = comprarCarta(usuario)                      
               somarCartaUsuario= cartaUsuario1.valor  + cartaUsuario2.valor     
               console.log(`Usuario - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario1.valor} ${cartaUsuario2.valor} - pontuação: ${somarCartaUsuario}`)
               
                
               let cartaComputador1= comprarCarta(computador)
               let cartaComputador2= comprarCarta(computador)
               somarCartaComputador= cartaComputador1.valor  + cartaComputador2.valor 
               console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador1.valor} ${cartaComputador2.valor} - pontuação: ${somarCartaComputador}`)
               
               
               if (somarCartaUsuario > somarCartaComputador) {
                  console.log("O usuário ganhou!")
              } else if (somarCartaUsuario < somarCartaComputador) {
                  console.log("O computador ganhou!")
              } else if (pontuacaoUsuario === pontuacaoPc) {
                  console.log("Empate!")
              }
               
           
            

   }   

         else {
            console.log("O jogo acabou.")
   }