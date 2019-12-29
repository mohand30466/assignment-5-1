
  //  const start = document.querySelector(".btn").addEventListener("click", getStart);
  //  function getStart(){

    let cards = document.querySelectorAll(".memoryGame>div");
    console.log(cards);
    let hasFlippedCard = false;
    let firstCard, secondCard;

    function flipCard() {
    
      this.lastElementChild.classList.add('flip');

      if (!hasFlippedCard) {
        
        hasFlippedCard = true;
       
        return;
      }
      hasFlippedCard = false;
    }

    function checkForMatch() {
      let isMatch = firstCard.dataset.name === secondCard.dataset.name;
      isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);

    }

    function unflipCards() {
    

      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

      }, 1500);
    }


    cards.forEach(card => card.addEventListener('click', flipCard));
   
    
    // } 
