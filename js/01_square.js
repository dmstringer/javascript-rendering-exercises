;(function () {
  // Note that this is a pure function: it does not depend on anything other than
  // the singular argument passed into it: square
  // You can use this function over and over again to generate HTML for all sorts of squares.
  // This function makes good use of Template literals for readability:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  function buildSquareHTML (square) {
    return `
     <div style="
        width: ${square.side}px;
        height: ${square.side}px;
        background-color: ${square.color};
        ">
      </div>
    `
  }

  // Note that this is just pure JavaScript data (in this case, an Object)
  // It does not "know" anything about HTML, the browser, the DOM, etc
  // It is just data about a square.
  const squareData = {
    side: 100,
    color: '#00FFFF'
  }

  // let's grab some DOM elements using ids
  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('squareBtn')

  function clickSquareBtn () {
    // Step 1) let's convert squareData to an HTML string using the buildSquareHTML function
    const squareHTML = buildSquareHTML(squareData)

    // as a sanity-check, let's confirm that squareHTML is just a JavaScript string here
    console.assert(typeof squareHTML === 'string', 'uh-oh, squareHTML should be a regular old string')

    // Step 2) let's put that HTML string into the DOM and let the browser render it
    // as HTML elements complete with CSS styling and other goodies
    contentElement.innerHTML = squareHTML
  }

  // attach the clickSquareBtn function to the <button id=squareBtn> element
  btnEl.addEventListener('click', clickSquareBtn)
})()
 