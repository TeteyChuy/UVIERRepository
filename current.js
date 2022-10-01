const form = document.getElementById("form1");
const form2 = document.getElementById("form2");
const log = document.querySelector("#log");
const power= document.querySelector('#watts');
const alert = document.getElementById ('alert');
const current2 =document.getElementById('current2');
const agrupFactor = document.getElementById('agrupFactor');
const tempFactor = document.getElementById('tempFactor');
const alert2 =document.querySelector('.alert2');
const log1 = document.querySelector("#log1");
const tabA = document.getElementById('tabla310A');
const tabB = document.getElementById('tabla310B');
const tabA1 = document.querySelector("#tab-A");
const tabB1 = document.querySelector("#tab-B");


tabA.addEventListener('click', toggleTabA);
tabB.addEventListener('click', toggleTabB);

function toggleTabA (){
  tabA1.classList.toggle('inactive');
}

function toggleTabB (){
  tabB1.classList.toggle('inactive');
}

//variable for the first form
let conditions = [];
let current;
let voltaje1;
let ecuation;
let power1 = 0;
const temperature=[10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65];
const temp60 = [1.29, 1.22, 1.15, 1.08, 1, 0.91, 0.82, 0.71, 0.58, 0.41, 0.41, 0.41];
const temp75 = [1.20, 1.15, 1.11, 1.05, 1, 0.94, 0.88, 0.82, 0.75, 0.67, 0.58, 0.47];
//variables for the second form
let numOfCond1;
let tempFactor1;
let current3=0;
let current125;
let currentFA;
let currentFT;
let currentTotal;



form.addEventListener("submit", (event) => {
  let voltaje = [];
  const data = new FormData(form);
  for (const entry of data) {
    let juanito = voltaje.push(entry[1]);
  };
  event.preventDefault();
  voltaje1=voltaje[1];
  ecuation=voltaje[0];
  readData ();
  
}, false);

function readData (){
    power1 = power.value;
    console.log(voltaje1, ecuation)
      if (power1==0){alert.innerText = "Error la potencia NO puede ser 0"}
      else {
        switch (parseInt(ecuation)) {
          case 1: 
              current = (power1)/((voltaje1/(Math.sqrt(3)))*0.9);
              log.innerText = `Corriente = ${current.toFixed(3)} A`;
              console.log(ecuation);
            break;  
          // bifasica con neutro
          case 2: 
            current = (power1)/((voltaje1*(Math.sqrt(2)))*0.9);
            log.innerText = `Corriente = ${current.toFixed(3)} A`;
            console.log(ecuation);
            break;    
          // bifasica sin neutro  
          case 3: 
            current = (power1)/(voltaje1*0.9);
            log.innerText = `Corriente = ${current.toFixed(3)} A`;
            console.log(ecuation);
            break;             
           //trifásica
           case 4: 
              current = (power1)/((voltaje1*(Math.sqrt(3)))*0.9);
              log.innerText = `Corriente = ${current.toFixed(3)} A`;
              console.log(ecuation);
              break;     

            default: break;
            }
      } 
    //console.log(power1, voltaje1, ecuation);
}

form2.addEventListener("submit", (event1) => {
  let voltaje2;
  const data = new FormData(form2);
  // let output ="";
  // let output2;
  for (const entry of data) {
    voltaje2 = entry[1];

  };
  event1.preventDefault();
  console.log(voltaje2);
      if (parseInt(voltaje2)==1){
        calCurrent ()
      }
}, false);

function calCurrent (){
   current3 = parseFloat(current2.value); 
      if (current3 == 0){
       alert2.innerText= "Introduzca un valor de corriente" 
      }
        else {
          current125 = current3 *1.25;
        }
      currentFA = current125 * parseFloat(agrupFactor.value);
      let prov = parseInt(tempFactor.value);
      let index;
          for (const i of temperature) {
            if (prov <= i) {
              index=i;
              break;
            }
          }
      let prov1= temperature.indexOf(index);
          if (current3 >= 100) {
            currentFT = temp75[prov1];
          }
          else {
            currentFT = temp60[prov1];
          }
      currentTotal = currentFA * currentFT;
      log1.innerHTML = `La corriente al 125% es ${current125} A <br>
       La corriente aplicando Factor de Agrupamiento es ${currentFA} A <br>
       El factor de temperatura es ${currentFT} <br>
       La corriente corregida final es ${currentTotal} A`
  }