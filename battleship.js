var randomLoc = Math.floor(Math.random() * 7);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var location4 = location3 + 1;
var guess; 
var hits = 0;
var guesses = 0;
var isSunk = false;
var previousGuesses = []; // Массив для хранения предыдущих попыток

while (isSunk == false) { 
  guess = prompt("Готовься! Целься! Пли! (введи значение в диапазоне 0-9):");
  
  if (isNaN(guess) || guess < 0 || guess > 9) { 
    alert("Ошибка ввода! Введи числовое значение в заданном диапазоне!");
  } else if (previousGuesses.includes(guess)) {
    alert("Ты уже стрелял по этой клетке!");
  } else { 
    guesses = guesses + 1;
    previousGuesses.push(guess); // Добавляем текущую попытку в массив предыдущих попыток
    
    if (guess == location1 || guess == location2 || guess == location3 || guess == location4) {
      alert("Есть пробитие💥!!");
      hits = hits + 1;
      
      if (hits == 4) {
        isSunk = true;
        alert("Ты выиграл бой!!");
      }
    } else {
      alert("Промах! Попробуй еще разок😉");
    }
  }
} 

var stats = "Тебе понадобилось " + guesses + " попыток для потопления линкора, " +
  "это означает, что точность стрельбы составляет  " + (4 / guesses);
alert(stats);