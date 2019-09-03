

function PontosDeVidaExtra(ficha){
    ficha.caracteristicas.pontosDeVida = (ficha.caracteristicas.resistencia + 2) * 5
}

function PontosDeMagiaExtra(ficha){
    ficha.caracteristicas.PontosDeMagiaExtra = (ficha.caracteristicas.resistencia + 2) * 5
}

export default (ficha, vantagem, vantagens) => {
    ficha.vantagens.push(vantagem);
    
    let nome = vantagem.name.toUpperCase()

    switch (nome) {
        case 'Pontos De Vida Extra'.toUpperCase():
            PontosDeVidaExtra(ficha)
            break;
        case 'Pontos De Magia Extra'.toUpperCase():
            PontosDeMagiaExtra(ficha)
            break;
        default:
          break;
      }
}