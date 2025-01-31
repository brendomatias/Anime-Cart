let cartas = [
  
  [ /*cartas comuns*/
    {nome: "pirata", dano: 3, vida: 3, raridade: "comum", img: "/img/bannercartas/pirata.jpg", poderTotal: 3 * 3, quantidade: 1},
    {nome: "Krillin", dano: 4, vida: 5, raridade: "comum", img: "/img/bannercartas/kuririn.jpg", poderTotal: 4 * 5, quantidade: 1},
    {nome: "konohamaru", dano: 4, vida: 4, raridade: "comum", img: "/img/bannercartas/konohamaru.jpg", poderTotal: 4 * 4, quantidade: 1},
    {nome: "Choji", dano: 4, vida: 4, raridade: "comum", img: "/img/bannercartas/Choji.jpg", poderTotal: 4 * 4, quantidade: 1},
    {nome: "yamcha", dano: 5, vida: 4, raridade: "comum", img: "/img/bannercartas/yamcha.jpg", poderTotal: 5 * 4, quantidade: 1},
    {nome: "ten shin han", dano: 6, vida: 4, raridade: "comum", img: "/img/bannercartas/ten shin han.jpg", poderTotal: 6 * 4, quantidade: 1},
    {nome: "Usopp", dano: 6, vida: 9, raridade: "comum", img: "/img/bannercartas/usop.jpg", poderTotal: 6 * 9, quantidade: 1},
    {nome: "Sakura Haruno", dano: 5, vida: 12, raridade: "comum", img: "/img/bannercartas/sakura.jpg", poderTotal: 5 * 12, quantidade: 1},
    {nome: "Yajirobe", dano: 5, vida: 8, raridade: "comum", img: "/img/bannercartas/yajirobe.jpg", poderTotal: 5 * 8, quantidade: 1},
    {nome: "Goku", dano: 10, vida: 10, raridade: "comum", img: "/img/bannercartas/goku.jpg", poderTotal: 10 * 10, quantidade: 1},
    {nome: "vegeta", dano: 12, vida: 12, raridade: "comum", img: "/img/bannercartas/vegeta.jpg", poderTotal: 12 * 12, quantidade: 1}
  ],

 
  [ /*cartas raras*/
    {nome: "Rukia Kuchiki", dano: 14, vida: 18, raridade: "raro", img: "/img/bannercartas/rukia.jpg", poderTotal: 14 * 18, quantidade: 1},
    {nome: "Gon Freecss", dano: 15, vida: 21, raridade: "raro", img: "/img/bannercartas/gon.jpg", poderTotal: 15 * 21, quantidade: 1},
    {nome: "Zoro", dano: 17, vida: 18, raridade: "raro", img: "/img/bannercartas/zoro.jpg", poderTotal: 17 * 18, quantidade: 1},
    {nome: "Levi Ackerman", dano: 20, vida: 20, raridade: "raro", img: "/img/bannercartas/levi.jpg", poderTotal: 20 * 20, quantidade: 1},
    {nome: "Goku ssj1", dano: 18, vida: 25, raridade: "raro", img: "/img/bannercartas/goku ssj.jpg", poderTotal: 18 * 25, quantidade: 1},
    {nome: "Kakashi Hatake", dano: 22, vida: 25, raridade: "raro", img: "/img/bannercartas/kakashi.jpg", poderTotal: 22 * 25, quantidade: 1}
  ],
  
  [ /*cartas epicas*/
    {nome: "Killua Zoldyck", dano: 20, vida: 50, raridade: "épico", img: "/img/bannercartas/killua.jpg", poderTotal: 20 * 50, quantidade: 1},
    {nome: "Goku ssj3", dano: 30, vida: 40, raridade: "épico", img: "/img/bannercartas/goku ssj3.jpg", poderTotal: 30 * 40, quantidade: 1},
    {nome: "Law", dano: 30, vida: 40, raridade: "épico", img: "/img/bannercartas/law.jpg", poderTotal: 30 * 40, quantidade: 1},
    {nome: "Sabo", dano: 30, vida: 40, raridade: "épico", img: "/img/bannercartas/sabo.jpg", poderTotal: 30 * 40, quantidade: 1},
    {nome: "Vegeta SSJM", dano: 25, vida: 40, raridade: "épico", img: "/img/bannercartas/vegeta SSJM.jpg", poderTotal: 25 * 40, quantidade: 1},
    {nome: "Ken Kaneki", dano: 24, vida: 35, raridade: "épico", img: "/img/bannercartas/kaneki.jpg", poderTotal: 24 * 35, quantidade: 1},
    {nome: "isagi", dano: 24, vida: 35, raridade: "épico", img: "/img/bannercartas/isagi.jpg", poderTotal: 24 * 35, quantidade: 1},
    {nome: "Itachi Uchiha", dano: 22, vida: 45, raridade: "épico", img: "/img/bannercartas/itachi.jpg", poderTotal: 22 * 45, quantidade: 1},
    {nome: "Shoto Todoroki", dano: 23, vida: 37, raridade: "épico", img: "/img/bannercartas/todoroki.jpg", poderTotal: 23 * 37, quantidade: 1}
  ],
  
  
  [ /*cartas lendarias*/
    {nome: "Goku Black", dano: 75, vida: 60, raridade: "lendário", img: "/img/bannercartas/goku black.jpg", poderTotal: 75 * 60, quantidade: 1},
    {nome: "Goku SSJG", dano: 70, vida: 60, raridade: "lendário", img: "/img/bannercartas/goku ssjd.jpg", poderTotal: 70 * 60, quantidade: 1},
    {nome: "Pain", dano: 60, vida: 70, raridade: "lendário", img: "/img/bannercartas/pain.jpg", poderTotal: 60 * 70, quantidade: 1},
    {nome: "Naruto Uzumaki", dano: 55, vida: 65, raridade: "lendário", img: "/img/bannercartas/naruto modo kurama.jpg", poderTotal: 55 * 65, quantidade: 1},
    {nome: "Luffy Gear4", dano: 55, vida: 60, raridade: "lendário", img: "/img/bannercartas/luffy gear4.jpg", poderTotal: 55 * 60, quantidade: 1},
    {nome: "Toji", dano: 60, vida: 50, raridade: "lendário", img: "/img/bannercartas/toji.jpg", poderTotal: 60 * 50, quantidade: 1},
    {nome: "Barou", dano: 50, vida: 60, raridade: "lendário", img: "/img/bannercartas/barou.jpg", poderTotal: 50 * 60, quantidade: 1},
    {nome: "Aokiji", dano: 50, vida: 60, raridade: "lendário", img: "/img/bannercartas/aokiji.jpg", poderTotal: 50 * 60, quantidade: 1},
    {nome: "Erwin Smith", dano: 45, vida: 55, raridade: "lendário", img: "/img/bannercartas/erwin.jpg", poderTotal: 45 * 55, quantidade: 1},
    {nome: "Yuta", dano: 45, vida: 60, raridade: "lendário", img: "/img/bannercartas/yuta.jpg", poderTotal: 45 * 60, quantidade: 1},
    {nome: "Grimmjow", dano: 45, vida: 55, raridade: "lendário", img: "/img/bannercartas/grimmjow.jpg", poderTotal: 45 * 55, quantidade: 1},
    {nome: "Ulquiorra", dano: 45, vida: 55, raridade: "lendário", img: "/img/bannercartas/ulquiorra.jpg", poderTotal: 45 * 55, quantidade: 1},
    {nome: "Natsu Dragneel", dano: 46, vida: 54, raridade: "lendário", img: "/img/bannercartas/natsu.jpg", poderTotal: 46 * 54, quantidade: 1}
  ],
  
  
  [/*cartas secretas*/
    {nome: "Monarca", dano: 900, vida: 1400, raridade: "secreto", img: "/img/bannercartas/monarca.jpg", poderTotal: 900 * 1400, quantidade: 1},
    {nome: "Gogeta", dano: 800, vida: 1500, raridade: "secreto", img: "/img/bannercartas/gojeta.jpg", poderTotal: 800 * 1500, quantidade: 1},
    {nome: "Sukuna", dano: 750, vida: 1200, raridade: "secreto", img: "/img/bannercartas/sukuna.jpg", poderTotal: 750 * 1200, quantidade: 1},
    {nome: "Broly", dano: 750, vida: 1000, raridade: "secreto", img: "/img/bannercartas/broly.jpg", poderTotal: 750 * 1000, quantidade: 1},
    {nome: "Goku Ins", dano: 700, vida: 1200, raridade: "secreto", img: "/img/bannercartas/goku ins.jpg", poderTotal: 700 * 1200, quantidade: 1},
    {nome: "Madara Uchiha", dano: 800, vida: 1100, raridade: "secreto", img: "/img/bannercartas/madara.jpg", poderTotal: 800 * 1100, quantidade: 1},
    {nome: "Gojo Satoru", dano: 650, vida: 1000, raridade: "secreto", img: "/img/bannercartas/gojo.jpg", poderTotal: 650 * 1000, quantidade: 1},
    {nome: "Luffy Gear 5", dano: 650, vida: 1000, raridade: "secreto", img: "/img/bannercartas/luffy gear5.jpg", poderTotal: 650 * 1000, quantidade: 1},
    {nome: "All Might", dano: 650, vida: 800, raridade: "secreto", img: "/img/bannercartas/all might.jpg", poderTotal: 650 * 800, quantidade: 1},
    {nome: "Vegeta Ego", dano: 600, vida: 900, raridade: "secreto", img: "/img/bannercartas/vegeta ego.jpg", poderTotal: 600 * 900, quantidade: 1},
    {nome: "Endeavor", dano: 550, vida: 900, raridade: "secreto", img: "/img/bannercartas/endeavor.jpg", poderTotal: 550 * 900, quantidade: 1},
    {nome: "Sanji", dano: 450, vida: 800, raridade: "secreto", img: "/img/bannercartas/sanji.jpg", poderTotal: 450 * 800, quantidade: 1},
    {nome: "Sae", dano: 500, vida: 900, raridade: "secreto", img: "/img/bannercartas/sae.jpg", poderTotal: 500 * 900, quantidade: 1}
  ]]




 export function girar(numero){
  if (numero == 0){
    numero = 1 ;
  }
  let num = Math.random()* 101;
  let opcao = -1
  if(num <= 30){
    opcao = 4;
  }
  else if(num <= 45){
    opcao = 3;

  }
  else if(num <= 60){
    opcao = 2;

  }
  else if(num <= 70){
    opcao = 1;
  }
  else{
    opcao = 0;
  }
  let numOpcao = Math.floor(Math.random()*cartas[opcao].length)
  return cartas[opcao][numOpcao];
}


