"use strict";

const game = () => {
  let userScore = 0,
      computerScore = 0,
      newNameUser = 'Пользователь',
      newNameComputer = 'Компьютер';


  // start the game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button'),
          introScreen = document.querySelector('.intro'),
          match = document.querySelectorAll('.match');
          

    // Change Name
    function changeName () {
      const reNameUser = document.querySelector('.user_score h2'),
            reNameComputer = document.querySelector('.computer_score h2');

      reNameUser.addEventListener('click', () => {
        newNameUser = prompt('Введите имя', 'Пользователь');
        if(newNameUser == null) {
          newNameUser = 'Пользователь';
        }
        reNameUser.textContent = newNameUser;
      });
      reNameComputer.addEventListener('click', () => {
        newNameComputer = prompt('Введите имя', 'Компьютер');
        if(newNameComputer == null) {
          newNameComputer = 'Компьютер';
        }
        reNameComputer.textContent = newNameComputer;
      });
    }
    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.forEach(item => {
        item.classList.add('fadeIn');
        item.classList.remove('fadeOut');
      });
    });
    changeName();
  };

  // play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button'),
          userHand = document.querySelector('.user_hand'),
          computerHand = document.querySelector('.computer_hand');

    const computerOptions = ['rock', 'scissors', 'paper'];

    options.forEach((option, i) => {
      option.addEventListener('click', () => {
        // Computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        computerHands(option.getAttribute('id'), computerChoice);

        //update images
        
        userHand.src = `img/${option.getAttribute('id')}.png`;
        computerHand.src = `img/${computerChoice}R.png`;

        //Update score
        const updateUserScore = document.querySelector('.user_score p');
        const updateComputerScore = document.querySelector('.computer_score p');

        updateUserScore.textContent = userScore;
        updateComputerScore.textContent = computerScore;
      });
    });
  };

  // Winner text
  const computerHands = (userChoice, computerChoice) => {
    const winner = document.querySelector('.winnerText');

    if(userChoice == computerChoice) {
      winner.textContent = 'Ничья';
      return;
    }
    else if(userChoice == 'rock') {
      if(computerChoice == 'scissors') {
        winner.textContent = `${newNameUser} выйграл`;
        userScore++;
        return;
      } else {
        winner.textContent = `${newNameComputer} выйграл`;
        computerScore++;
        return;
      }
    }
    else if(userChoice == 'scissors') {
      if(computerChoice == 'paper') {
        winner.textContent = `${newNameUser} выйграл`;
        userScore++;
        return;
      } else {
        winner.textContent = `${newNameComputer} выйграл`;
        computerScore++;
        return;
      }
    }
    else if(userChoice == 'paper') {
      if(computerChoice == 'rock') {
        winner.textContent = `${newNameUser} выйграл`;
        userScore++;
        return;
      } else {
        winner.textContent = `${newNameComputer} выйграл`;
        computerScore++;
        return;
      }
    }
  };

  
  startGame();
  playMatch();
}

game();