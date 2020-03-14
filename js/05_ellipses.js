;(function () {
  // convert a ellipse JavaScript object to an HTML string
  function buildEllipseHTML (ellipse) {
    // TODO: Your code goes here.
    // HINT: draw an ellipse exactly like you would a rectangle, except add to
    //       the style "border-radius: 50%"
    return `
    <div style="
      height: ${ellipse.height}px;
      width: ${ellipse.width}px;
      border-radius: 50%;
      background: ${ellipse.color};
      ">
    </div>
    `
  }

  // here we have four ellipses, each represented by a JavaScript Object,
  // all collected into an Array.
  const ellipsesData = [
    {
      height: 50,
      width: 100,
      color: '#F0F'
    },
    {
      height: 100,
      width: 50,
      color: '#F58'
    },
    {
      height: 70,
      width: 200,
      color: '#3CD'
    },
    {
      height: 180,
      width: 110,
      color: '#D2F'
    }
  ]

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('ellipsesBtn')

  function clickEllipsesBtn () {
    // using the buildEllipseHTML function, create the HTML for the ellipsesData
    // Array and then put them into the <div id=content> element

    // TODO: your code goes here
    contentElement.innerHTML = `
      <div class="d-flex flex-column align-items-center">
      ${ellipsesData.map(buildEllipseHTML).join('')}
      </div>
      `
  }

  // attach an event handler for button click
  btnEl.addEventListener('click', clickEllipsesBtn)
})()
