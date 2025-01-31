

let cores = [['comum','white'],['raro','blue'],['épico','rgb(188, 7, 188)'],['lendário','yellow'],['secreto','red'],]
export function raridadeCartas(i,opcao){
  let textos = '';
  let texto = '';
  let bordas = '';
  let borda = '';
  if(opcao == 0){
    textos = document.querySelectorAll('.raridadelocarta');
    bordas = document.querySelectorAll('.carta');
    texto = textos[i]
    borda = bordas[i]
  }
  else if(opcao == 1){
    texto = document.querySelector('.raridadelocartaGirar');
    borda = document.querySelector('.fundoGirarCarta');
  }
  else if(opcao == 2){
    texto = document.querySelector('.raridadelocartaequipar');
  }

  /*cores*/
  cores.forEach(cor => {
    if(texto.innerHTML == cor[0]){
      texto.style.color = `${cor[1]}`;
      if(opcao == 0 || opcao == 1){
        borda.style.borderColor = `${cor[1]}`;
      }
    }
  });
  return texto
}