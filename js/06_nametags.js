;(function () {
  // convert a nametag JavaScript object to an HTML string
  function buildNametagHTML (nametag) {
    // TODO: Your code goes here.
    return `
    <div class="card">
      <div class="card-header" style="text-align: center; background-color: blue; color: white;">
        Hello, my name is:
      </div>
      <div class="card-body" style="text-align: center;">
        <h5 class="card-title">${nametag}</h5>
      </div>
    </div>
    `
  }

  // here we have five nametags, each represented by a JavaScript String,
  // all collected into an Array.
  const nametagsData = [
    'Kamilah',
    'Kim',
    'Stuart',
    'Ron',
    'Krissy'
  ]

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.
  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('nametagsBtn')

  function clickNameTagsBtn () {
    
    contentElement.innerHTML = `
      <div class="d-flex flex-column align-items-center">
      ${nametagsData.map(buildNametagHTML).join('')}
      </div>
      `
  }

  btnEl.addEventListener('click', clickNameTagsBtn)

})()
