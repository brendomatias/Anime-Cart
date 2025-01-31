import {raridadeCartas} from './funcoesGlobais.js';
import {girar} from './cartas.js';

/*variaveis iniciais */
let fundo = localStorage.getItem('fundo') === 'true';
console.log(fundo)
let raridadeCartasLista = [{raridade: 'secreto', ativado: true},{raridade: 'lendário', ativado: true},{raridade: 'épico', ativado: true},{raridade: 'raro', ativado: true},{raridade: 'comum', ativado: true}]
let inventario = []
let inventarioStorage = JSON.parse(localStorage.getItem("inventarioStorage"))
let rotacao = 0;

if (inventarioStorage!= null){
  inventario = inventarioStorage;
}


/*codigo para limapr a memoria local */
// localStorage.removeItem("inventarioStorage");

/*animação de girar a carta*/

function girarCart(num){
  rotacao +=1.8
  let carta = document.querySelector('.cartaGirar');
  let cartaFundo = document.querySelector('.fundoGirarCarta');
  carta.style.transform = `rotateY(${180-num}deg)`
  if(num == 140){
    cartaFundo.style.opacity = `0.1`
  }
  if(num >= 180){
    cartaFundo.style.opacity = `0.1`
    return rotacao = 0;;
  }
  return setTimeout(()=>(girarCart(rotacao),10000))
}

/* opcao de girar carta */
export function GirarCarta(){
  if(rotacao === 0){
    let menudiv = document.querySelector('.bannerCarta');
    if(menudiv && menudiv.childElementCount >=1){
      menudiv.innerHTML = ''
    }
    let objeto = girar(0);
    console.log(objeto)
    let div = document.createElement('div');
          div.innerHTML = `
          <div class="cartaGirar">
            <div class="fundoGirarCarta"></div>
              <div class="inffooterGirar">
                <h1 class="titulocartaGirar">${objeto.nome}</h1>
                <h1 class="raridadelocartaGirar">${objeto.raridade}</h1>
              </div>
              <img class="imgcartaGirar" src="${objeto.img}" alt="">
              <div class="infGirar">
                <p>vida: ${objeto.vida}</p>
                <p>dano: ${objeto.dano}</p>
              </div>
          </div>`
    document.querySelector('.bannerCarta').appendChild(div);
    raridadeCartas(0,1)
    girarCart(rotacao);
    for(let i = 0;i<inventario.length;i++){
      if(inventario[i].nome == objeto.nome){
        inventario[i].quantidade++;
        ;
        return;
      }
    }
    inventario.push(objeto)
    localStorage.setItem("inventarioStorage", JSON.stringify(inventario))
    ;
  }
}
function mostrarTipoRaridade(num){
  let cont = 0;
  for(let i = 0;i<5;i++){
    if(raridadeCartasLista[i].ativado == true){
      cont++;
    }
  }
  if(cont == 5 ){
    for(let i = 0;i<5;i++){
      raridadeCartasLista[i].ativado = !raridadeCartasLista[i].ativado;
    }
  }
  raridadeCartasLista[num].ativado = !raridadeCartasLista[num].ativado ;
  ;
  console.log(raridadeCartasLista)

}

/* para as funções serem reconhecida no html */

window.GirarCarta = GirarCarta;
window.mostrarTipoRaridade = mostrarTipoRaridade

/* girar 10 mil cartas de uma vez só (só para dev) */

/*funções iniciais ativadas */


