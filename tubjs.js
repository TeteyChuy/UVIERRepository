const h1=document.querySelector('h1');
//const form=document.querySelector('#form');
//numero de cables
const numCables=document.querySelector('#numCables');
//tipo de calibre
const cal=document.querySelector('#cal');
//tipo de tubería

const tiptub=document.querySelector('#tiptub');
const calcul=document.querySelector('#calcul');
const eMT=document.querySelector('#EMT');
const iMC=document.querySelector('#IMC');
const rMC=document.querySelector('#RMC');
const pVC=document.querySelector('#PVC');
const alert=document.querySelector('#alert');
const tuberiaElegida=document.querySelector('#tuberiaElegida');
const numero_de_cables=document.querySelector('#numero_de_cables');
const resul=document.querySelector('#resul');
const raiz = 3 ** (1/2);
const cedulaCab = ["16 (1/2)", "21 (3/4)", "27 (1)", "35 (1-1/4)", "41 (1-1/2)", "53 (2)", "63 (2-1/2)", "78mm (3)","i1 (3-1/2)" ,"103mm (4)"];
const tubEMT = [78, 137, 222, 387, 526, 866, 1543, 2280, 2980, 3808];
const tubIMC = [89, 151, 248, 425, 573, 937, 1323, 2046, 2729, 3490];
const tubRMC = [81, 141, 229, 394, 533, 879, 1255, 1936, 2584, 3326];
const tubPVC = [74, 131, 214, 374, 513, 849, 1212, 1877, 2511, 3237];
console.log (cedulaCab.length, tubEMT.length)

let indicetubSize = 0;
let tValue; let cal2; let cal1; let numCables1=0; let=begin=0; let kindOfTube; let selectedTube=0;

//objeto de tuberías


calcul.addEventListener('click', start);
eMT.addEventListener('click', printEMT);
iMC.addEventListener('click', printIMC);
rMC.addEventListener('click', printRMC);
pVC.addEventListener('click', printPVC);

function printEMT (){
        tuberiaElegida.innerHTML=("EMT")
        selectedTube=tubEMT;
        begin=1;
        
}

function printIMC (){
        tuberiaElegida.innerHTML=("IMC")
        selectedTube=tubIMC;
        begin=1;
        
}

function printRMC (){
        tuberiaElegida.innerHTML=("RMC")
        selectedTube=tubRMC;
        begin=1;
        
}

function printPVC (){
        tuberiaElegida.innerHTML=("PVC")
        selectedTube=tubPVC;
        begin=1;
        
}

function start (){
        if (begin == 0){
                resul.innerHTML=("Por favor selecciona una tuberia")
        }
        else getData ()
}

function getData()
        {
        numCables1 = Math.floor(parseInt (numCables.value));
        let prov = isNaN(numCables1);
        //console.log(prov)
                if (prov == true){ numCables1 = 0}
        //console.log(numCables1)
                if (numCables1 == 0){
                        numero_de_cables.innerHTML = ("el número de conductores no puede ser cero");
                }
        //console.log(numCables1);
        cal1 = parseInt (cal.value)
        switch (cal1) {
                case 2: cal1 = 85.932; break;
                case 4: cal1 =62.786; break;
                case 6: cal1 = 46.833; break;
                case 8: cal1 = 28.218; break;
                case 7: cal1 = 50.265; alert.innerHTML = "Fotovoltaico" ; break;
                case 9: cal1 = 32.17; alert.innerHTML = "Fotovoltaico" ; break;
                case 11: cal1 = 25.517; alert.innerHTML = "Fotovoltaico" ; break;
                case 10: cal1 = 15.693; break;
                case 12: cal1 = 11.708; break;
                case 14: cal1 = 8.962; break;
                case 110: cal1 = 143.35; break;
                case 210: cal1 = 169.255; break;
                case 310: cal1 = 201.062; break;
                case 410: cal1 = 239.979; break;
                case 250: cal1 = 296.507; break;
                case 300: cal1 = 340.776; break;
                case 400: cal1 = 426.385; break;
                case 500: cal1 = 509.904; break;
                default: cal1 = 0; break;
        }
        
        if (cal1 >= 1){
        //h1.innerHTML = cal1;
        calcularArea ()
        alert.innerHTML = ""
        }
        else alert.innerHTML = "calibre no valido"
    }

function calcularArea (){
        cal2 = cal1 * numCables1;
        
        // console.log(cal2);
        // console.log(numCables1);
        // console.log(cal1);
        tipoTub (selectedTube);
}

function tipoTub(kindOfTube){
                for (tValue of kindOfTube){
                        if (tValue >= cal2){
                                indicetubSize = tValue;
                                break;
                        }
                        else resul.innerHTML = "Se requiere más de una tubería"

                        console.log(indicetubSize)
                }
                let pos = kindOfTube.indexOf(indicetubSize)
                let tub = cedulaCab[pos]
                resul.innerHTML=`La tubería correcta es ${tub}`               
}
