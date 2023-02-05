var a 
a = 0
var b
b = 0

function iffunc(vara){
   if(a == 1){
      document.getElementById("button__We").style.color = "#47126b";
      document.getElementById("button__We").style.backgroundColor = "#B210BA";
   }
   else {
      document.getElementById("button__We").style.color = "#FFF";
      document.getElementById("button__We").style.backgroundColor = "transparent";
   }

   if (a == 2){
      document.getElementById("button__BSonya").style.color = "#47126b";
      document.getElementById("button__BSonya").style.backgroundColor = "#B210BA";}
   else{
      document.getElementById("button__BSonya").style.color = "#FFF";
      document.getElementById("button__BSonya").style.backgroundColor = "transparent";
   }

   if (a == 4){
      document.getElementById("button__Sveta").style.color = "#47126b";
      document.getElementById("button__Sveta").style.backgroundColor = "#B210BA";}
   else {
      document.getElementById("button__Sveta").style.color = "#FFF";
      document.getElementById("button__Sveta").style.backgroundColor = "transparent";
   }
   }

   function iffunc1(varb){
   if(b == 1){
      document.getElementById("button__water").style.color = "#47126b";
      document.getElementById("button__water").style.backgroundColor = "#B210BA";
   }
   else {
      document.getElementById("button__water").style.color = "#FFF";
      document.getElementById("button__water").style.backgroundColor = "transparent";
   }

   if (b == 4){
      document.getElementById("button__light").style.color = "#47126b";
      document.getElementById("button__light").style.backgroundColor = "#B210BA";}

   else {
      document.getElementById("button__light").style.color = "#FFF";
      document.getElementById("button__light").style.backgroundColor = "transparent";
   }

   if (b == 5){
      document.getElementById("button__flat").style.color = "#47126b";
      document.getElementById("button__flat").style.backgroundColor = "#B210BA";
   }
   else {
      document.getElementById("button__flat").style.color = "#FFF";
      document.getElementById("button__flat").style.backgroundColor = "transparent";
   }

   if (b == 6){
      document.getElementById("button__transportgaz").style.color = "#47126b";
      document.getElementById("button__transportgaz").style.backgroundColor = "#B210BA";
   }
   else {
      document.getElementById("button__transportgaz").style.color = "#FFF";
      document.getElementById("button__transportgaz").style.backgroundColor = "transparent";
   }

   if (b == 7){
      document.getElementById("button__trash").style.color = "#47126b"; 
      document.getElementById("button__trash").style.backgroundColor = "#B210BA"; 
   }
   else {
      document.getElementById("button__trash").style.color = "#FFF";
      document.getElementById("button__trash").style.backgroundColor = "transparent";
   }

   if (b == 8){
      document.getElementById("button__call").style.color = "#47126b";
      document.getElementById("button__call").style.backgroundColor = "#B210BA";

   }
   else {
      document.getElementById("button__call").style.color = "#FFF";
      document.getElementById("button__call").style.backgroundColor = "transparent";
   }

   if (b == 9){
      document.getElementById("button__gaz").style.color = "#47126b"; 
      document.getElementById("button__gaz").style.backgroundColor = "#B210BA"; 
   }
   else {
      document.getElementById("button__gaz").style.color = "#FFF";
      document.getElementById("button__gaz").style.backgroundColor = "transparent";
   }
   }

function nameFun1(vara) {
a = 1
document.getElementById("change__ico").className = "bi bi-telephone-fill"

return a;}

function nameFun2(vara) {
a = 2
document.getElementById("change__ico").className = "bi bi-telephone-fill"


return a;}

function nameFun3(vara) {
a = 3
document.getElementById("change__ico").className = "bi bi-telephone-fill"


return a;}

function nameFun4(vara) { 
a = 4

if(a == 4){
document.getElementById("change__ico").className = "bi bi-dash-square"
}
return a;}



function typeFun1(vara) { //Вода
b = 1

document.getElementById("main__title2").innerHTML = "Показник л-ка в кінці місяця";
document.getElementById("main__title3").innerHTML = "Показник л-ка на початку місяця";
document.getElementById("main__title1").style.opacity = "1";
document.getElementById("main__title2").style.opacity = "1";
document.getElementById("main__title3").style.opacity = "1";
document.getElementById("select").style.opacity = "1";
document.getElementById("input__end").style.opacity = "1";
document.getElementById("input__start").style.opacity = "1";
document.getElementById("results__btn2").style.opacity = "1";
document.getElementById("results__btn3").style.opacity = "1";
document.getElementById("results__btn4").style.opacity = "1";
document.getElementById("results__btn5").style.opacity = "1";
document.getElementById("results__btn6").style.display = "inline";
document.getElementById("results__btn7").style.display = "inline";
document.getElementById("results__btn8").style.display = "inline";
document.getElementById("results__btn9").style.display = "inline";
document.getElementById("description").style.display = "flex";
document.getElementById("description").style.justifyContent = "space-around";
document.getElementById("description").style.alignItems = "center";
document.getElementById("description__water").style.padding = "6px";
document.getElementById("description__water").style.width = "33%";
document.getElementById("description__stock").style.padding = "6px";
document.getElementById("description__stock").style.width = "33%";
document.getElementById("description__abon").style.padding = "6px";
document.getElementById("description__abon").style.width = "33%";
document.getElementById("description__stock").style.display = "block";
document.getElementById("description__abon").style.display = "block";
document.getElementById("Description1").style.display = "block";
document.getElementById("Description1").style.fontSize = "32px";
document.getElementById("Description1").style.fontWeight = "500";
document.getElementById("Description1").style.marginBottom = "15px";
document.getElementById("Description2").style.display = "block";
document.getElementById("Description2").style.fontSize = "32px";
document.getElementById("Description2").style.fontWeight = "500";
document.getElementById("Description2").style.marginBottom = "15px";
document.getElementById("Description2").style.opacity = "1";
document.getElementById("Description3").style.display = "block";
document.getElementById("Description3").style.fontSize = "32px";
document.getElementById("Description3").style.fontWeight = "500";
document.getElementById("Description3").style.marginBottom = "15px";
document.getElementById("Description3").style.opacity = "1";
document.getElementById("Sum1").style.display = "block";
document.getElementById("Sum1").style.fontSize = "35px";
document.getElementById("Sum1").style.fontWeight = "500";
document.getElementById("Sum1").style.marginBottom = "15px";
document.getElementById("Sum2").style.display = "block";
document.getElementById("Sum2").style.fontSize = "35px";
document.getElementById("Sum2").style.fontWeight = "500";
document.getElementById("Sum2").style.marginBottom = "15px";
document.getElementById("Sum2").style.opacity = "1";
document.getElementById("Sum3").style.display = "block";
document.getElementById("Sum3").style.fontSize = "35px";
document.getElementById("Sum3").style.fontWeight = "500";
document.getElementById("Sum3").style.marginBottom = "15px";
document.getElementById("Sum3").style.opacity = "1";

if(a==2){
document.getElementById("main__title2").innerHTML = "Кухня кінець місяця";
document.getElementById("main__title3").innerHTML = "Кухня початок місяця";
document.getElementById("main__title4").innerHTML = "Туалет кінець місяця";
document.getElementById("main__title5").innerHTML = "Туалет початок місяця";
document.getElementById("main__title4").style.display = "block";
document.getElementById("main__title5").style.display = "block";
document.getElementById("input__start1").style.display = "inline";
document.getElementById("input__end1").style.display = "inline";
document.getElementById("main__inner").style.marginBottom = "0px";

document.getElementById("main__title1").style.opacity = "1";
document.getElementById("main__title2").style.opacity = "1";
document.getElementById("main__title3").style.opacity = "1";
document.getElementById("main__title4").style.opacity = "1";
document.getElementById("main__title5").style.opacity = "1";
document.getElementById("select").style.opacity = "1";
document.getElementById("input__end").style.opacity = "1";
document.getElementById("input__start").style.opacity = "1";
document.getElementById("input__end1").style.opacity = "1";
document.getElementById("input__start1").style.opacity = "1";
document.getElementById("results__btn2").style.opacity = "1";
document.getElementById("results__btn3").style.opacity = "1";
document.getElementById("results__btn4").style.opacity = "1";
document.getElementById("results__btn5").style.opacity = "1";
document.getElementById("results__btn6").style.opacity = "1";
document.getElementById("results__btn7").style.opacity = "1";
document.getElementById("results__btn6").style.display = "inline";
document.getElementById("results__btn7").style.display = "inline";
}

if(a==4){
document.getElementById("main__title2").innerHTML = "Кухня кінець місяця";
document.getElementById("main__title3").innerHTML = "Кухня початок місяця";
document.getElementById("main__title4").innerHTML = "Ванна кінець місяця";
document.getElementById("main__title5").innerHTML = "Ванна початок місяця";
document.getElementById("main__title4").style.display = "block";
document.getElementById("main__title5").style.display = "block";
document.getElementById("input__start1").style.display = "inline";
document.getElementById("input__end1").style.display = "inline";
document.getElementById("main__inner").style.marginBottom = "2px";
document.getElementById("main").style.paddingBottom = "25px";

document.getElementById("main__title1").style.opacity = "1";
document.getElementById("main__title2").style.opacity = "1";
document.getElementById("main__title3").style.opacity = "1";
document.getElementById("main__title4").style.opacity = "1";
document.getElementById("main__title5").style.opacity = "1";
document.getElementById("select").style.opacity = "1";
document.getElementById("input__end").style.opacity = "1";
document.getElementById("input__start").style.opacity = "1";
document.getElementById("input__end1").style.opacity = "1";
document.getElementById("input__start1").style.opacity = "1";
document.getElementById("results__btn2").style.opacity = "1";
document.getElementById("results__btn3").style.opacity = "1";
document.getElementById("results__btn4").style.opacity = "1";
document.getElementById("results__btn5").style.opacity = "1";
document.getElementById("results__btn6").style.opacity = "1";
document.getElementById("results__btn7").style.opacity = "1";
document.getElementById("results__btn6").style.display = "inline";
document.getElementById("results__btn7").style.display = "inline";
}

return b;}

function typeFun3(vara) { // Абонплата
b = 3
document.getElementById("main__title1").style.opacity = "0";
document.getElementById("main__title2").style.opacity = "0";
document.getElementById("main__title3").style.opacity = "0";
document.getElementById("select").style.opacity = "0";
document.getElementById("input__end").style.opacity = "0";
document.getElementById("input__start").style.opacity = "0";

document.getElementById("main__title4").style.opacity = "0";
document.getElementById("main__title5").style.opacity = "0";
document.getElementById("results__btn6").style.display = "none";
document.getElementById("results__btn7").style.display = "none";
document.getElementById("results__btn8").style.display = "none";
document.getElementById("results__btn9").style.display = "none";
document.getElementById("input__end1").style.opacity = "0";
document.getElementById("input__start1").style.opacity = "0";

document.getElementById("description__water").style.width = "100%";
document.getElementById("description__water").style.padding = "0";
document.getElementById("description__stock").style.display = "none";
document.getElementById("Description1").style.fontSize = "37px";
document.getElementById("Sum1").style.fontSize = "37px";


return b;}

function typeFun4(vara) { //Світло
b = 4

if(a==2){
document.getElementById("main__title1").style.opacity = "1";
document.getElementById("main__title2").style.opacity = "1";
document.getElementById("main__title3").style.opacity = "1";
document.getElementById("select").style.opacity = "1";
document.getElementById("input__end").style.opacity = "1";
document.getElementById("input__start").style.opacity = "1";
document.getElementById("results__btn2").style.opacity = "1";
document.getElementById("results__btn3").style.opacity = "1";
document.getElementById("results__btn4").style.opacity = "1";
document.getElementById("results__btn5").style.opacity = "1";
document.getElementById("results__btn6").style.display = "none";
document.getElementById("results__btn7").style.display = "none";
document.getElementById("results__btn8").style.display = "none";
document.getElementById("results__btn9").style.display = "none";
document.getElementById("main__title2").innerHTML = 'Показник л-ка в кінці місяця';
document.getElementById("main__title3").innerHTML = 'Показник л-ка на початку місяця';

document.getElementById("main__title4").style.opacity = "0";
document.getElementById("main__title5").style.opacity = "0";
document.getElementById("input__end1").style.opacity = "0";
document.getElementById("input__start1").style.opacity = "0";

document.getElementById("description__water").style.width = "100%";
document.getElementById("description__water").style.padding = "0";
document.getElementById("description__stock").style.display = "none";
document.getElementById("Description1").style.fontSize = "37px";
document.getElementById("Sum1").style.fontSize = "37px";
}

document.getElementById("main__title1").style.opacity = "1";
document.getElementById("main__title2").style.opacity = "1";
document.getElementById("main__title3").style.opacity = "1";
document.getElementById("select").style.opacity = "1";
document.getElementById("input__end").style.opacity = "1";
document.getElementById("input__start").style.opacity = "1";
document.getElementById("results__btn2").style.opacity = "1";
document.getElementById("results__btn3").style.opacity = "1";
document.getElementById("results__btn4").style.opacity = "1";
document.getElementById("results__btn5").style.opacity = "1";
document.getElementById("results__btn6").style.display = "none";
document.getElementById("results__btn7").style.display = "none";
document.getElementById("results__btn8").style.display = "none";
document.getElementById("results__btn9").style.display = "none";
document.getElementById("main__title2").innerHTML = 'Показник л-ка в кінці місяця';
document.getElementById("main__title3").innerHTML = 'Показник л-ка на початку місяця';

document.getElementById("main__title4").style.opacity = "0";
document.getElementById("main__title5").style.opacity = "0";
document.getElementById("input__end1").style.opacity = "0";
document.getElementById("input__start1").style.opacity = "0";

document.getElementById("description__water").style.width = "100%";
document.getElementById("description__water").style.padding = "0";
document.getElementById("description__stock").style.display = "none";
document.getElementById("Description1").style.fontSize = "37px";
document.getElementById("Sum1").style.fontSize = "37px";
//console.log(b)
return b;}

function typeFun5(vara) { //Квартплата
b = 5
document.getElementById("main__title2").style.opacity = "0";
document.getElementById("main__title3").style.opacity = "0";
document.getElementById("input__end").style.opacity = "0";
document.getElementById("input__start").style.opacity = "0";
document.getElementById("results__btn5").style.opacity = "0";

document.getElementById("main__title1").style.opacity = "1";
document.getElementById("select").style.opacity = "1";
document.getElementById("results__btn2").style.opacity = "1";
document.getElementById("results__btn3").style.opacity = "1";
document.getElementById("results__btn4").style.opacity = "1";
document.getElementById("results__btn6").style.display = "none";
document.getElementById("results__btn7").style.display = "none";
document.getElementById("results__btn8").style.display = "none";
document.getElementById("results__btn9").style.display = "none";

document.getElementById("main__title4").style.opacity = "0";
document.getElementById("main__title5").style.opacity = "0";
document.getElementById("input__end1").style.opacity = "0";
document.getElementById("input__start1").style.opacity = "0";

document.getElementById("description__water").style.width = "100%";
document.getElementById("description__water").style.padding = "0";
document.getElementById("description__stock").style.display = "none";
document.getElementById("Description1").style.fontSize = "37px";
document.getElementById("Sum1").style.fontSize = "37px";

return b;}

function typeFun6(vara) { //Транспорт газу
b = 6
document.getElementById("main__title2").style.opacity = "0";
document.getElementById("main__title3").style.opacity = "0";
document.getElementById("input__end").style.opacity = "0";
document.getElementById("input__start").style.opacity = "0";
document.getElementById("main__title1").style.opacity = "1";
document.getElementById("select").style.opacity = "1";
document.getElementById("results__btn2").style.opacity = "1";
document.getElementById("results__btn3").style.opacity = "1";
document.getElementById("results__btn4").style.opacity = "1";
document.getElementById("results__btn5").style.opacity = "1";
document.getElementById("results__btn6").style.display = "none";
document.getElementById("results__btn7").style.display = "none";
document.getElementById("results__btn8").style.display = "none";
document.getElementById("results__btn9").style.display = "none";

document.getElementById("main__title4").style.opacity = "0";
document.getElementById("main__title5").style.opacity = "0";
document.getElementById("input__end1").style.opacity = "0";
document.getElementById("input__start1").style.opacity = "0";

document.getElementById("description__water").style.width = "100%";
document.getElementById("description__water").style.padding = "0";
document.getElementById("description__stock").style.display = "none";
document.getElementById("Description1").style.fontSize = "37px";
document.getElementById("Sum1").style.fontSize = "37px";

return b;}

function typeFun7(vara) { //Сміття
b= 7
document.getElementById("main__title2").style.opacity = "0";
document.getElementById("main__title3").style.opacity = "0";
document.getElementById("input__end").style.opacity = "0";
document.getElementById("input__start").style.opacity = "0";
document.getElementById("main__title1").style.opacity = "1";
document.getElementById("select").style.opacity = "1";
document.getElementById("results__btn2").style.opacity = "1";
document.getElementById("results__btn3").style.opacity = "1";
document.getElementById("results__btn4").style.opacity = "1";
document.getElementById("results__btn5").style.opacity = "1";
document.getElementById("results__btn6").style.display = "none";
document.getElementById("results__btn7").style.display = "none";
document.getElementById("results__btn8").style.display = "none";
document.getElementById("results__btn9").style.display = "none";

document.getElementById("main__title4").style.opacity = "0";
document.getElementById("main__title5").style.opacity = "0";
document.getElementById("input__end1").style.opacity = "0";
document.getElementById("input__start1").style.opacity = "0";

document.getElementById("description__water").style.width = "100%";
document.getElementById("description__water").style.padding = "0";
document.getElementById("description__stock").style.display = "none";
document.getElementById("Description1").style.fontSize = "37px";
document.getElementById("Sum1").style.fontSize = "37px";

return b;}

function typeFun8(vara) { //Домофон
b = 8

if (a==1) !! (a==3)
document.getElementById("main__title1").style.opacity = "0";
document.getElementById("select").style.opacity = "0";
document.getElementById("main__title2").innerHTML = '3 ...';
document.getElementById("main__title3").innerHTML = 'По ...';
document.getElementById("main__title2").style.opacity = "1";
document.getElementById("main__title3").style.opacity = "1";
document.getElementById("input__end").style.opacity = "1";
document.getElementById("input__start").style.opacity = "1";
document.getElementById("results__btn2").style.opacity = "1";
document.getElementById("results__btn3").style.opacity = "1";
document.getElementById("results__btn4").style.opacity = "1";
document.getElementById("results__btn5").style.opacity = "1";
document.getElementById("results__btn6").style.display = "none";
document.getElementById("results__btn7").style.display = "none";
document.getElementById("results__btn8").style.display = "none";
document.getElementById("results__btn9").style.display = "none";

document.getElementById("main__title4").style.opacity = "0";
document.getElementById("main__title5").style.opacity = "0";
document.getElementById("input__end1").style.opacity = "0";
document.getElementById("input__start1").style.opacity = "0";

document.getElementById("description__water").style.width = "100%";
document.getElementById("description__water").style.padding = "0";
document.getElementById("description__stock").style.display = "none";
document.getElementById("Description1").style.fontSize = "37px";
document.getElementById("Sum1").style.fontSize = "37px";


if(a==2){
document.getElementById("main__title1").style.opacity = "0";
document.getElementById("main__title2").style.opacity = "0";
document.getElementById("main__title3").style.opacity = "0";
document.getElementById("select").style.opacity = "0";
document.getElementById("input__end").style.opacity = "0";
document.getElementById("input__start").style.opacity = "0";
document.getElementById("results__btn2").style.opacity = "0";
document.getElementById("results__btn3").style.opacity = "0";
document.getElementById("results__btn4").style.opacity = "0";
document.getElementById("results__btn5").style.opacity = "0";
document.getElementById("results__btn6").style.display = "none";
document.getElementById("results__btn7").style.display = "none";
document.getElementById("results__btn8").style.display = "none";
document.getElementById("results__btn9").style.display = "none";

document.getElementById("main__title4").style.opacity = "0";
document.getElementById("main__title5").style.opacity = "0";
document.getElementById("input__end1").style.opacity = "0";
document.getElementById("input__start1").style.opacity = "0";

document.getElementById("description__water").style.width = "100%";
document.getElementById("description__water").style.padding = "0";
document.getElementById("description__stock").style.display = "none";
document.getElementById("Description1").style.fontSize = "37px";
document.getElementById("Sum1").style.fontSize = "37px";
}

if (a==4){
document.getElementById("main__title1").style.opacity = "1";
document.getElementById("select").style.opacity = "1";
document.getElementById("main__title2").style.opacity = "0";
document.getElementById("main__title3").style.opacity = "0";
document.getElementById("input__end").style.opacity = "0";
document.getElementById("input__start").style.opacity = "0";
document.getElementById("results__btn2").style.opacity = "1";
document.getElementById("results__btn3").style.opacity = "1";
document.getElementById("results__btn4").style.opacity = "1";
document.getElementById("results__btn5").style.opacity = "1";
document.getElementById("results__btn6").style.display = "none";
document.getElementById("results__btn7").style.display = "none";
document.getElementById("results__btn8").style.display = "none";
document.getElementById("results__btn9").style.display = "none";

document.getElementById("main__title4").style.opacity = "0";
document.getElementById("main__title5").style.opacity = "0";
document.getElementById("input__end1").style.opacity = "0";
document.getElementById("input__start1").style.opacity = "0";

document.getElementById("description__water").style.width = "100%";
document.getElementById("description__water").style.padding = "0";
document.getElementById("description__stock").style.display = "none";
document.getElementById("Description1").style.fontSize = "37px";
document.getElementById("Sum1").style.fontSize = "37px";
}

return b;}

function typeFun9(vara) { //Газ
b = 9
document.getElementById("main__title1").style.opacity = "0";
document.getElementById("main__title2").style.opacity = "0";
document.getElementById("main__title3").style.opacity = "0";
document.getElementById("select").style.opacity = "0";
document.getElementById("input__end").style.opacity = "0";
document.getElementById("input__start").style.opacity = "0";
document.getElementById("results__btn2").style.opacity = "0";
document.getElementById("results__btn3").style.opacity = "0";
document.getElementById("results__btn4").style.opacity = "0";
document.getElementById("results__btn5").style.opacity = "0";
document.getElementById("results__btn6").style.display = "none";
document.getElementById("results__btn7").style.display = "none";
document.getElementById("results__btn8").style.display = "none";
document.getElementById("results__btn9").style.display = "none";

document.getElementById("main__title4").style.opacity = "0";
document.getElementById("main__title5").style.opacity = "0";
document.getElementById("input__end1").style.opacity = "0";
document.getElementById("input__start1").style.opacity = "0";

document.getElementById("description__water").style.width = "100%";
document.getElementById("description__water").style.padding = "0";
document.getElementById("description__stock").style.display = "none";
document.getElementById("Description1").style.fontSize = "37px";
document.getElementById("Sum1").style.fontSize = "37px";

return b;
}

function myFunction(vara, varb){
var numberBegin = document.getElementById("input__start").value;
var numberEnd = document.getElementById("input__end").value;
var numberBegin1 = document.getElementById("input__start1").value;
var numberEnd1 = document.getElementById("input__end1").value;
var sum = numberEnd - numberBegin;
var sum1 = numberEnd1 - numberBegin1;
var sumwater = (numberEnd - numberBegin) + (numberEnd1 - numberBegin1);
var sel = document.getElementById('select').selectedIndex;
var opt = document.getElementById('select').options;
document.getElementById("results").style.display = "block";
// --------------------------------------------------------------------------------------------------Ми--------------------------------------------------------------------------------------------

if ((a==1) && (b==1)){
var money = sum*12.95;
document.getElementById("Rahunok").append("UA523365030000000260003001081")
document.getElementById("Company").append("Ів.Фр.ВОДОЕКОТЕХПРОМ")
document.getElementById("Number").append("32360815")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 502592 Галицька 149/30 Ванчуляк В.С. за воду Показник лічильника: " + numberEnd + " - " + numberBegin + " = " + Math.round(sum*100)/100) + "."
document.getElementById("Sum1").append(Math.round(money * 100)/100)

var money = sum*15.29;
document.getElementById("Description2").append("За " + opt[sel].text + " 2023 О/Р 502592 Галицька 149/30 Ванчуляк В.С. за водовідведення Показник лічильника: " + numberEnd + " - " + numberBegin + " = " + Math.round(sum*100)/100) + "."
document.getElementById("Sum2").append(Math.round(money * 100)/100)

var money = 25;
document.getElementById("Description3").append("Абонплата за воду О/Р 502592 Галицька 149/30 Ванчуляк В.С.") + "."
document.getElementById("Sum3").append(Math.round(money * 100)/100)
}

if ((a==1) && (b==4)){
var money = sum*1.44;
document.getElementById("Rahunok").append("UA883365030000026034300046328")
document.getElementById("Company").append("ТОВ \"Прикарпаттяенерготрейд\"")
document.getElementById("Number").append("42129720")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 24014792 Галицька 149/30 Ванчуляк В.С. за електроенергію Показник лічильника: " + numberEnd + " - " + numberBegin + " = " + Math.round(sum*100)/100 + " квт.") + "."
document.getElementById("Sum1").append(Math.round(money * 100)/100)
}

if ((a==1) && (b==5)){
document.getElementById("Rahunok").append("UA643052990000026008045502450")
document.getElementById("Company").append("ТОВ \"Ролекта ІФ\"")
document.getElementById("Number").append("41871161")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 54779 Галицька 149/30 Ванчуляк В.С. за квартплату") + "."
document.getElementById("Sum1").append("Ціна змінюється")
}

if ((a==1) && (b==6)){
var money = 215.08;
document.getElementById("Rahunok").append("UA673365030000002600630101135")
document.getElementById("Company").append("ПАТ \"Ів.Франківськгаз\"")
document.getElementById("Number").append("03361046")
document.getElementById("Description1").append("За " + opt[sel+1].text + " 2023 О/Р 0710361359 за розподіл газу ") + "."
document.getElementById("Sum1").append(Math.round(money * 100)/100)
}

if ((a==1) && (b==7)){
var money = 150;
document.getElementById("Rahunok").append("UA603808050000000026005197284")
document.getElementById("Company").append("АВТОКОЛОНА 2222 ДП")
document.getElementById("Number").append("30475732")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 54779 Галицька 149/30 Ванчуляк В.С. за вивіз сміття") + "."
document.getElementById("Sum1").append(Math.round(money * 100)/100)
}

if ((a==1) && (b==8)){
var money = 207;
document.getElementById("Rahunok").append("UA513052990000026008021002327")
document.getElementById("Company").append("Домофон Люкс")
document.getElementById("Number").append("3244604114")
document.getElementById("Description1").append(" *11076030 Ванчуляк В.С. Галицька 149/30 з " + numberEnd + " по " + numberBegin) + "."
document.getElementById("Sum1").append(Math.round(money * 100)/100)
}

if ((a==1) && (b==9)){
document.getElementById("Rahunok").append("160155947")
}
// --------------------------------------------------------------------------------------------------Баба Соня--------------------------------------------------------------------------------------------
if ((a==2) && (b==1)){
var money = sumwater*12.95;
document.getElementById("Rahunok").append("UA523365030000000260003001081")
document.getElementById("Company").append("Ів.Фр.ВОДОЕКОТЕХПРОМ")
document.getElementById("Number").append("32360815")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 705053 вул. Набережна 40б/22 Ванчуляк С.В. за х. воду кухня, х. воду туалет. П. кухня: " + numberEnd + " - " + numberBegin + " = " + Math.round(sum*100)/100 + "." + " П. туалет: " + numberEnd1 + " - " + numberBegin1 + " = " + Math.round(sum1*100)/100) + "."
document.getElementById("Sum1").append(Math.round(money * 100)/100)

var money = sumwater*15.29;
document.getElementById("Description2").append("За " + opt[sel].text + " 2023 О/Р 705053 вул. Набережна 40Б/22 Ванчуляк С.В. за водовідведення кухня, водовідведення туалет. П. кухня: " + numberEnd + " - " + numberBegin + " = " + Math.round(sum*100)/100 + "." + " П. туалет: " + numberEnd1 + " - " + numberBegin1 + " = " + Math.round(sum1*100)/100)+ "."
document.getElementById("Sum2").append(Math.round(money * 100)/100)

var money = 25;
document.getElementById("Description3").append("Абонплата за воду Ванчуляк С.В. вул. Стефаника Набережна 40Б/22 О/Р 705053.")
document.getElementById("Sum3").append(Math.round(money * 100)/100)
}

if ((a==2) && (b==4)){
document.getElementById("Rahunok").append("UA883365030000026034300046328")
document.getElementById("Company").append("ТОВ \"Прикарпаттяенерготрейд\"")
document.getElementById("Number").append("42129720")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 24058752 вул. Набережна 40Б/22 Ванчуляк С.В. за електроенергію.")
document.getElementById("Sum1").append("Ціна змінюється")
}

if ((a==2) && (b==5)){
document.getElementById("Rahunok").append("UA213365030000026004300231011")
document.getElementById("Company").append("КП \"Управляюча компанія\" \"Комфортний дім\"")
document.getElementById("Number").append("44051740")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 76461 вул. Набережна 40Б/22 Ванчуляк С.В. за квартплату.")
document.getElementById("Sum1").append("Ціна змінюється")
}

if ((a==2) && (b==6)){
document.getElementById("Rahunok").append("UA673365030000002600630101135")
document.getElementById("Company").append("ПАТ \"Ів.Франківськгаз\"")
document.getElementById("Number").append("03361046")
document.getElementById("Description1").append("За " + opt[sel+1].text + " 2023 О/Р 0710339842 вул. Набережна 40Б/22 Ванчуляк С.В. за розподіл газу.")
document.getElementById("Sum1").append("Ціна змінюється")
}

if ((a==2) && (b==7)){
var money = 75;
document.getElementById("Rahunok").append("UA793365030000002600830101339")
document.getElementById("Company").append("ВАТ АТП-0928")
document.getElementById("Number").append("03345863")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 776461 вул. Набережна 40Б/22 Ванчуляк С.В. за вивіз сміття.")
document.getElementById("Sum1").append(Math.round(money * 100)/100)
}

if ((a==2) && (b==8)){
document.getElementById("Rahunok").append("UA843365030000026004300235697")
document.getElementById("Company").append("ТОВ \"Домофонсервіс-Захід\"")
document.getElementById("Number").append("37409980")
document.getElementById("Description1").append("Абонплата Ст. Набережна 40Б п.1 кв.22 *84200693* Ванчуляк Степан Васильович.")
document.getElementById("Sum1").append("Ціна змінюється")
}

if ((a==2   ) && (b==9)){
document.getElementById("Rahunok").append("160124704")
}
// --------------------------------------------------------------------------------------------------Баба Слава--------------------------------------------------------------------------------------------

if ((a==3) && (b==1)){
var money = sum*12.95;
document.getElementById("Rahunok").append("UA523365030000000260003001081")
document.getElementById("Company").append("Ів.Фр.ВОДОЕКОТЕХПРОМ")
document.getElementById("Number").append("32360815")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 700622 вул. Південний бульвар буд 40/53  Сурмачевський Г. Д. за воду. Показник лічильника: " + numberEnd + " - " + numberBegin + " = " + Math.round(sum*100)/100) + "."
document.getElementById("Sum1").append(Math.round(money * 100)/100)

var money = sum*15.29;
document.getElementById("Description2").append("За " + opt[sel].text + " 2023 О/Р 700622 вул. Південний бульвар буд 40/53 Сурмачевський Г. Д. за водовідведення. Показник лічильника: " + numberEnd + " - " + numberBegin + " = " + Math.round(sum*100)/100) + "."
document.getElementById("Sum2").append(Math.round(money * 100)/100)

var money = 55;
document.getElementById("Description3").append("Абонплата за воду О/Р 700622 вул. Південний бульвар буд 40/53 Сурмачевський Г. Д.")
document.getElementById("Sum3").append(Math.round(money * 100)/100)
}


if ((a==3) && (b==4)){
var money = sum*1.44;
document.getElementById("Rahunok").append("UA883365030000026034300046328")
document.getElementById("Company").append("ТОВ \"Прикарпаттяенерготрейд\"")
document.getElementById("Number").append("42129720")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 24047794  вул. Південний бульвар буд 40/53 Сурмачевський Г. Д. за електроенергію. Показник лічильника: " + numberEnd + " - " + numberBegin + " = " + Math.round(sum*100)/100 + " квт.") + "."
document.getElementById("Sum1").append(Math.round(money * 100)/100)
}

if ((a==3) && (b==5)){
document.getElementById("Rahunok").append("UA873365030000026008300992107")
document.getElementById("Company").append("ОСББ")
document.getElementById("Number").append("40595359")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 вул. Південний бульвар буд 40/53 Сурмачевський Г. Д. за квартплату.")
document.getElementById("Sum1").append("250")
}

if ((a==3) && (b==6)){
var money = 85.94;
document.getElementById("Rahunok").append("UA673365030000002600630101135")
document.getElementById("Company").append("ПАТ \"Ів.Франківськгаз\"")
document.getElementById("Number").append("03361046")
document.getElementById("Description1").append("За " + opt[sel+1].text + " 2023 О/Р 0710377251 за розподіл газу.")
document.getElementById("Sum1").append(Math.round(money * 100)/100)
}

if ((a==3) && (b==7)){
var money = 75;
document.getElementById("Rahunok").append("UA793365030000002600830101339")
document.getElementById("Company").append("ІВ.- ФР. АТП-0928 ВАТ")
document.getElementById("Number").append("03345863")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 775549 вул. Південний бульвар буд 40/53 Сурмачевський Г. Д. за вивіз сміття.")
document.getElementById("Sum1").append(Math.round(money * 100)/100)
}

if ((a==3) && (b==8)){
var money = 207;
document.getElementById("Rahunok").append("UA513052990000026008021002327")
document.getElementById("Company").append("Домофон Люкс")
document.getElementById("Number").append("3244604114")
document.getElementById("Description1").append(" *11403053 Сурмачевський Г. Д. вул. Південний бульвар буд 40/53 з " + numberEnd + " по " + numberBegin  + ".")
document.getElementById("Sum1").append(Math.round(money * 100)/100)
}

if ((a==3) && (b==9)){
document.getElementById("Rahunok").append("160048975")
}

// --------------------------------------------------------------------------------------------------Свєта--------------------------------------------------------------------------------------------
if ((a==4) && (b==1)){
var money = sumwater*12.95;
document.getElementById("Rahunok").append("UA523365030000000260003001081")
document.getElementById("Company").append("Ів.Фр.ВОДОЕКОТЕХПРОМ")
document.getElementById("Number").append("32360815")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 706755 вул. Набережна 42А/12 Ванчуляк С.С. за х. воду кухня, х. воду ванна. П. кухня: " + numberEnd + " - " + numberBegin + " = " + Math.round(sum*100)/100 + "." + " П. ванна: " + numberEnd1 + " - " + numberBegin1 + " = " + Math.round(sum1*100)/100) + "."
document.getElementById("Sum1").append(Math.round(money * 100)/100)

var money = sumwater*15.29;
document.getElementById("Description2").append("За " + opt[sel].text + " 2023 О/Р 706755 вул. Набережна 42А/12 Ванчуляк С.С. за водовідведення кухня, водовідведення ванна. П. кухня: " + numberEnd + " - " + numberBegin + " = " + Math.round(sum*100)/100 + "." + " П. ванна: " + numberEnd1 + " - " + numberBegin1 + " = " + Math.round(sum1*100)/100)+ "."
document.getElementById("Sum2").append(Math.round(money * 100)/100)

var money = 25
document.getElementById("Description3").append("Абонплата за воду Ванчуляк С.С. вул. Набережна 42А/12 О/Р 706755.")
document.getElementById("Sum3").append(Math.round(money * 100)/100)
}


if ((a==4) && (b==4)){
var money = sum*1.44;
document.getElementById("Rahunok").append("UA213365030000026004300231011")
document.getElementById("Company").append("КП \"Комфортний Дім\"")
document.getElementById("Number").append("44051740")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 76729 вул. Набережна 42А/12 Ванчуляк С.С. за електроенергію. Показник лічильника: " + numberEnd + " - " + numberBegin + " = " + Math.round(sum*100)/100 + " квт.")
document.getElementById("Sum1").append(Math.round(money * 100)/100)
}

if ((a==4) && (b==5)){
document.getElementById("Rahunok").append("UA213365030000026004300231011")
document.getElementById("Company").append("КП \"Управляюча компанія\" \"Комфортний дім\"")
document.getElementById("Number").append("44051740")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 76729 вул. Набережна 42А/12 Ванчуляк С.С. за квартплату.")
document.getElementById("Sum1").append("Ціна змінюється")
}

if ((a==4) && (b==6)){
document.getElementById("Rahunok").append("UA673365030000002600630101135")
document.getElementById("Company").append("ПАТ \"Ів.Франківськгаз\"")
document.getElementById("Number").append("03361046")
document.getElementById("Description1").append("За " + opt[sel+1].text + " 2023 О/Р 0710339866 вул. Набережна 42А/12 Ванчуляк С.С. за розподіл газу.")
document.getElementById("Sum1").append("Ціна змінюється")
}

if ((a==4) && (b==7)){
var money = 75;
document.getElementById("Rahunok").append("UA793365030000002600830101339")
document.getElementById("Company").append("ВАТ АТП-0928")
document.getElementById("Number").append("03345863")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 776729 вул. Набережна 42А/12 Ванчуляк С.С. за вивіз сміття.")
document.getElementById("Sum1").append(Math.round(money * 100)/100)
}

if ((a==4) && (b==8)){
document.getElementById("Rahunok").append("UA923803770000026003601600012")
document.getElementById("Company").append("ДМП Івано-Франківськ теплокомуненерго")
document.getElementById("Number").append("03346058")
document.getElementById("Description1").append("За " + opt[sel].text + " 2023 О/Р 03610042а306 вул. Набережна 42А/12 Ванчуляк С.С. за опалення")
document.getElementById("Sum1").append("Ціна змінюється")
}

if ((a==4) && (b==9)){
document.getElementById("Rahunok").append("160125189")
}

if (a==0){
alert("Виберіть платника!");
window.location.reload()
}

if (b==0){
alert("Виберіть комунальну послугу!");
window.location.reload()
}

window.scroll(0, window.scrollY + 947);}

function copyDivToClipboard1() {
var range = document.createRange();
range.selectNode(document.getElementById("Rahunok"));
window.getSelection().removeAllRanges(); 
window.getSelection().addRange(range); 
document.execCommand("copy");
window.getSelection().removeAllRanges();}

function copyDivToClipboard2() {
var range = document.createRange();
range.selectNode(document.getElementById("Company"));
window.getSelection().removeAllRanges(); 
window.getSelection().addRange(range); 
document.execCommand("copy");
window.getSelection().removeAllRanges();}

function copyDivToClipboard3() {
var range = document.createRange();
range.selectNode(document.getElementById("Number"));
window.getSelection().removeAllRanges(); 
window.getSelection().addRange(range); 
document.execCommand("copy");
window.getSelection().removeAllRanges();}

function copyDivToClipboard4() {
var range = document.createRange();
range.selectNode(document.getElementById("Description1"));
window.getSelection().removeAllRanges(); 
window.getSelection().addRange(range); 
document.execCommand("copy");
window.getSelection().removeAllRanges();}

function copyDivToClipboard5() {
var range = document.createRange();
range.selectNode(document.getElementById("Description2"));
window.getSelection().removeAllRanges(); 
window.getSelection().addRange(range); 
document.execCommand("copy");
window.getSelection().removeAllRanges();}

function copyDivToClipboard6() {
var range = document.createRange();
range.selectNode(document.getElementById("Sum1"));
window.getSelection().removeAllRanges(); 
window.getSelection().addRange(range); 
document.execCommand("copy");
window.getSelection().removeAllRanges();}

function copyDivToClipboard7() {
var range = document.createRange();
range.selectNode(document.getElementById("Sum2"));
window.getSelection().removeAllRanges(); 
window.getSelection().addRange(range); 
document.execCommand("copy");
window.getSelection().removeAllRanges();}

function copyDivToClipboard8() {
   var range = document.createRange();
   range.selectNode(document.getElementById("Description3"));
   window.getSelection().removeAllRanges(); 
   window.getSelection().addRange(range); 
   document.execCommand("copy");
   window.getSelection().removeAllRanges();}

   function copyDivToClipboard9() {
      var range = document.createRange();
      range.selectNode(document.getElementById("Sum3"));
      window.getSelection().removeAllRanges(); 
      window.getSelection().addRange(range); 
      document.execCommand("copy");
      window.getSelection().removeAllRanges();}

function refreshPage(){
window.location.reload() }