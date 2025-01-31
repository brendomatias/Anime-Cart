import {raridadeCartas} from './funcoesGlobais.js';


/*variaveis iniciais */

let raridadeCartasLista = [{cor: 'red', raridade: 'secreto', ativado: true},{cor: 'yellow', raridade: 'lendário', ativado: true},{cor: 'rgb(188, 7, 188)', raridade: 'épico', ativado: true},{cor: 'blue', raridade: 'raro', ativado: true},{cor: 'white', raridade: 'comum', ativado: true}]
// let raridadeCartasLista = ['secreto',['lendário'],['épico'],['raro'],['comum']]
let upgrade = [1]
let inventario = []
let equipados = [[],[],[]]
let inventarioStorage = JSON.parse(localStorage.getItem("inventarioStorage"))
let rotacao = 0;

if (inventarioStorage!= null){
  inventario = inventarioStorage;
  mostrarCartas();
}

/*codigo para limapr a memoria local */
// localStorage.removeItem("inventarioStorage");

/*funções iniciais */

function cartasinv(i){
  let div = document.createElement('div');
        div.classList.add('cartasDiv')
        div.innerHTML = `
        <div onclick="VisCart(${i})" class="carta">
          <div class="inffooter">
            <h1 class="titulocarta">${inventario[i].nome}</h1>
            <h1 class="raridadelocarta">${inventario[i].raridade}</h1>
          </div>
          <div class="imgcarta"></div>
          <div class="inf">
            <p>${inventario[i].poderTotal}</p>
          </div>
      </div>`
      div.querySelector('.imgcarta').style.backgroundImage = `url("${inventario[i].img}") `;
      return div;
}

function mostrarCartaInv(numero){
  let div = document.createElement('div');
  div.innerHTML = `
    <div class="cartaequipar">
      <div class="fundoequiparCarta"></div>
          <div class="inffooterequipar">
            <h1 class="titulocartaequipar">${inventario[numero].nome}</h1>
            <h1 class="raridadelocartaequipar">${inventario[numero].raridade}</h1>
          </div>
          <span class="imcartaequipar"></span>
          
          <div class="infequipar">
            <p><img class="iconInv" src="/img/bannercartas/coração.png" alt=""> ${inventario[numero].vida}</p>
            <p>quantidade: ${inventario[numero].quantidade}</p>
            <p><img class="iconInv" src="/img/bannercartas/espada.png" alt=""> ${inventario[numero].dano}</p>
          </div>
          <div class="equiparinv">
            <buttom onclick="equiparCartas(${numero},0)" class = "buttoesEquipar" >slot 1</buttom>
            <buttom onclick="equiparCartas(${numero},1)" class = "buttoesEquipar" >slot 2</buttom>
            <buttom onclick="equiparCartas(${numero},2)" class = "buttoesEquipar" >slot 3</buttom>
        </div>
        <div class="desinv">
            <buttom onclick="equiparCartas(${numero},3)" class = "buttoesdesequipar" >Desequipar</buttom>
        </div>
      </div>`
      div.querySelector('.imcartaequipar').style.backgroundImage = `url("${inventario[numero].img}") `;
      return div
}


/*mudar a cor das bordas cas cartas de girar e mudar a cor da raridade*/


function VisCart(numero){
  let i = 0;
  let tela = document.querySelector('.telaIncDireta')
  console.log(tela.childElementCount)
  if(tela.childElementCount >= 1){
    tela.innerHTML = '';
  }
  let carta = mostrarCartaInv(numero);
  tela.appendChild(carta)
  let cartaclass = document.querySelector('.cartaequipar');
  cartaclass.classList.add('cartaequipar');
  cartaclass.classList.remove('cartasEquiparDiv');
  setTimeout(()=>{
  cartaclass.classList.remove('cartaequipar');
  cartaclass.classList.add('cartasEquiparDiv');
  document.querySelector('.equiparinv').style.display = 'flex'
  document.querySelector('.desinv').style.display = 'flex'
  },20)
  
  raridadeCartas(numero,2);
}

/* equipar carta no deck */
function equiparCartas(i,slot){
    if(slot !=3){
      let cont = 0
    for (let j = 0; j < equipados.length; j++) {
      if(inventario[i].nome == equipados[j].nome){
        cont++;
      }
    }
    if(cont < inventario[i].quantidade || cont == 0){
      equipados[slot] = inventario[i];
    }
  }
  else{
    equipados = [[],[],[]]
  }
  console.log(equipados)
  console.log(inventario)
  mostrarCartas()
}

/*ordenar as cartas no inventario*/

function removerCartasinv(){
  let divcarta = document.querySelector('.Cartas');
  divcarta.querySelectorAll('.cartasDiv').forEach(element => {
    element.remove()
  });;
}

function mostrarCartas(){
  removerCartasinv()
  let listaxs = [];
  /*organziar as cartas por maior dano*/
  for(let j = 0;j<inventario.length-1;j++){
    for(let i = 0;i<inventario.length-1;i++){
      if(inventario[i].poderTotal < inventario[i+1].poderTotal){
        listaxs = inventario[i];
        inventario[i] = inventario[i+1];
        inventario[i+1] = listaxs;
        }
      }
    }
  /*mostrar primeira as equipadas*/

    let quantidade = 0;
    equipados.forEach(equipadosfilhos => {
      if(equipadosfilhos.length!= 0){
        for(let i=0;i<inventario.length;i++){
          if(inventario[i].nome == equipadosfilhos.nome){
            let div = cartasinv(i);
            document.querySelector('.Cartas').appendChild(div)
            raridadeCartas(quantidade,0)
            quantidade++;
          }
        }
      }
    });   
    let cons = 0;
    for(let j = 0;j<5;j++){
      for(let i = 0 ;i<inventario.length;i++){
        if(inventario[i].nome != equipados[0].nome && inventario[i].nome != equipados[1].nome && inventario[i].nome != equipados[2].nome && raridadeCartasLista[j].raridade == inventario[i].raridade && raridadeCartasLista[j].ativado == true){
          let div = cartasinv(i);
          document.querySelector('.Cartas').appendChild(div)
          raridadeCartas(cons,0)
          cons++;
          
        }
        
      }
      for(let i=0;i<quantidade;i++){
        let div = document.querySelectorAll('.carta');
        let borda = div[i]
        borda.style.borderColor = 'rgb(62, 252, 5)';
      }
    }

}

function mostrarTipoRaridade(num){
  let cont = 0;
  let butoes = document.querySelectorAll('.buttoeslabel')
  let butao = butoes[num]
  for(let i = 0;i<5;i++){
    if(raridadeCartasLista[i].ativado == true){
      cont++;
    }
  }
  if(cont == 5 ){
    for(let i = 0;i<5;i++){
      raridadeCartasLista[i].ativado = !raridadeCartasLista[i].ativado;
      butao = butoes[i]
      butao.style.backgroundColor = 'black';
      butao.style.color = `white`

    }
  }
  butao = butoes[num]
  if(raridadeCartasLista[num].ativado == true){
    butao.style.backgroundColor = 'black'
    butao.style.color = `white`
  }
  else{
    butao.style.backgroundColor = `white`
    butao.style.color = `black`
  }

  
  raridadeCartasLista[num].ativado = !raridadeCartasLista[num].ativado ;
  mostrarCartas();
}

/* para as funções serem reconhecida no html */

window.VisCart = VisCart
window.equiparCartas = equiparCartas
window.mostrarTipoRaridade = mostrarTipoRaridade

/* girar 10 mil cartas de uma vez só (só para dev) */


/*funções iniciais ativadas */


