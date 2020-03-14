;(function () {
  // convert a pokerhand JavaScript object to an HTML string
  function buildPokerHandHTML (pokerHand) {
    // TODO: Your code goes here.
    // HINT: utilize the (conveniently named) images in the ./images/cards/
    //       directory to render each card in the hand.
    return `
    <div>
    <img src="images/cards/${pokerHand.value}${pokerHand.suit}.png" height="146" width="100"> 
    </div>
    `
  }

  // here we have a pokerHand, represented by a JavaScript Array,
  // each card represented by an Object.
  const pokerHandData = [
    {
      value: 'K',
      suit: 'C'
    },
    {
      value: 'K',
      suit: 'D'
    },
    {
      value: '9',
      suit: 'S'
    },
    {
      value: '2',
      suit: 'H'
    },
    {
      value: '9',
      suit: 'H'
    }
  ]

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('pokerHandsBtn')

  function pokerHandsBtn () {
    
    contentElement.innerHTML = `
      <div class="d-flex flex-row align-items-center justify-content-center">
      ${pokerHandData.map(buildPokerHandHTML).join('')}
      </div>
      `
  }

  btnEl.addEventListener('click', pokerHandsBtn)

})()
