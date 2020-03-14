;(function () {
  // convert a restaurant JavaScript object to an HTML string
  function buildRestaurantHTML (restaurant) {
    // TODO: Your code goes here.

    let dollarSigns = "";
    for (let i = 0; i < restaurant.priceRating; i++) {
      dollarSigns = dollarSigns + "$";
    }

    return `
    <div class="card">
      <div class="card-body" style="text-align: left; width: 200px; background-color: lightgray; padding: 5px;">
        <h3 class="card-title">${restaurant.name}</h3>
        <h6>${restaurant.type}</h6>
        <h4 style="color: green; font-weight: bold;">${dollarSigns}</h4>
      </div>
    </div>
    `
  }

  // here we have four restaurants, each represented by a JavaScript Object,
  // all collected into an Array.
  const restaurantsData = [
    {
      name: "McDonald's",
      type: 'Fast Food',
      priceRating: 1
    },
    {
      name: 'Gunshow',
      type: 'Date Night Dining',
      priceRating: 5
    },
    {
      name: 'Iron Age',
      type: 'Korean BBQ',
      priceRating: 4
    }
  ]

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('restaurantsBtn')

  function restaurantsBtn () {
    
    contentElement.innerHTML = `
      <div class="d-flex flex-row align-items-center justify-content-center">
      ${restaurantsData.map(buildRestaurantHTML).join('')}
      </div>
      `
  }

  btnEl.addEventListener('click', restaurantsBtn)

})()
