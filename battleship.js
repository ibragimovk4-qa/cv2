var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess; 
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false) { 
 guess = prompt("Готовься! Целься! Пли! (введи значение в диапазоне 0-6):");
 if (guess < 0 || guess > 6) { 
 alert("Введи значение в заданном диапазоне!");
 } else { 
 guesses = guesses + 1;
 if (guess == location1 || guess == location2 || guess == location3) {
 alert("Есть пробитие💥!!");
 hits = hits + 1;
 if (hits == 3) {
 isSunk = true;
 alert("Ты выиграл бой!!");
 }
 } else {
 alert("Промах! Попробуй еще разок😉");
 }
 }
} 
var stats = "Тебе понадобилось " + guesses + " попыток(ки) для потопления линкора, " +
 "это означает, что точность стрельбы составляет  " + (3/guesses);
alert(stats);