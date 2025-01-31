import {girar} from './cartas.js';


/*variaveis iniciais */
let fundo = localStorage.getItem('fundo') === 'true';
console.log(fundo)
let raridadeCartasLista = [{raridade: 'secreto', ativado: true},{raridade: 'lendário', ativado: true},{raridade: 'épico', ativado: true},{raridade: 'raro', ativado: true},{raridade: 'comum', ativado: true}]
// let raridadeCartasLista = ['secreto',['lendário'],['épico'],['raro'],['comum']]
let upgrade = [1]
let inventario = []
let equipados = [[],[],[]]
let inventarioStorage = JSON.parse(localStorage.getItem("inventarioStorage"))
let rotacao = 0;

/*codigo para limapr a memoria local */
// localStorage.removeItem("inventarioStorage");

/*funções iniciais */

/*funções para puxar o tipo do fundo da tela, se é claro ou escuro */
function salvamentoStorage(){
  if(fundo){
    document.body.classList.add('bodyEscuro')
      document.querySelector('.olho').classList.add('olhoFechado')
  }
}


/*funções para mudar a cor do fundoo */
 export function mudarCorDeFundo(){
  fundo = !fundo;
  document.body.classList.toggle('bodyEscuro')
  document.querySelector('.olho').classList.toggle('olhoFechado')
  localStorage.setItem('fundo',fundo);
}

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


/*mudar a cor das bordas cas cartas de girar e mudar a cor da raridade*/

function raridadeCartas(i,opcao){
  let texto = ""
  let carta = ""
  let cont = 0;
  let borda = document.querySelector('.fundoGirarCarta');

  if(opcao == 0){
  document.querySelectorAll('.raridadelocarta').forEach(element => {
    if(i == cont){
      texto = element;
    }
    cont++;
  });
  cont = 0;
  document.querySelectorAll('.carta').forEach(element => {
    if(i == cont){
      carta = element;
    }
    cont++;
  });}
  else if(opcao == 2 ){
    texto = document.querySelector('.raridadelocartaequipar');
    console.log(texto.innerHTML)
  }
  cont = 0
  if(opcao == 0){
    document.querySelectorAll('.carta').forEach(element => {
      if(i == cont){
        carta = element;
      }
      cont++;
    });
  borda = carta
}
  if(texto.innerHTML == 'raro'){
    if(opcao == 1 || opcao == 0){
      borda.style.borderColor = "blue";
    }
     texto.style.color = 'blue';
     return
  }
  else if(texto.innerHTML == 'épico'){
    if(opcao == 1 || opcao == 0){
      borda.style.borderColor = 'rgb(188, 7, 188)';
    }
     texto.style.color = 'rgb(188, 7, 188)';
     return
  }
  else if(texto.innerHTML == 'lendário'){
    if(opcao == 1 || opcao == 0){
      borda.style.borderColor = " yellow";
    }
     texto.style.color = 'yellow';
     return
  }
  else if(texto.innerHTML == 'secreto'){
    if(opcao == 1 || opcao == 0){
      borda.style.borderColor = " red";
    }
     texto.style.color = 'red';
     return
  }
  if(opcao == 1){
    borda.style.borderColor = "white";
  }

  return texto
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
        mostrarCartas();
        return;
      }
    }
    inventario.push(objeto)
    localStorage.setItem("inventarioStorage", JSON.stringify(inventario))
    mostrarCartas();
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
  mostrarCartas();
  console.log(raridadeCartasLista)

}

/* para as funções serem reconhecida no html */

window.GirarCarta = GirarCarta;
window.mudarCorDeFundo = mudarCorDeFundo
window.mostrarTipoRaridade = mostrarTipoRaridade

/* girar 10 mil cartas de uma vez só (só para dev) */

/*funções iniciais ativadas */
salvamentoStorage();


