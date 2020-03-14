;(function () {
  // convert a student JavaScript object to an HTML string
  function buildStudentHTML (student) {
    // TODO: Your code goes here.
    let notBooleanPres = "";
    let notBoolColor = "";

    if (student.isPresent === true) {
      notBooleanPres = "Present";
      notBoolColor = "lightgreen";
    } else {
      notBooleanPres = "Absent";
      notBoolColor = "orange";
    }

    return `
    <div class="card">
      <div class="card-body" style="text-align: center; width: 200px; background-color: ${notBoolColor}; padding: 10px;">
        <h5 class="card-title">${student.name}</h5>
        <h6>${notBooleanPres}</h6>
      </div>
    </div>
    `
  }

  // here we have five students, each represented by a JavaScript Object,
  // all collected into an Array.
  const studentsData = [
    {
      name: 'Kamilah',
      isPresent: true
    },
    {
      name: 'Kim',
      isPresent: true
    },
    {
      name: 'Stuart',
      isPresent: false
    },
    {
      name: 'Ron',
      isPresent: true
    },
    {
      name: 'Krissy',
      isPresent: false
    }
  ]

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('studentsBtn')

  function studentsBtn () {
    
    contentElement.innerHTML = `
      <div class="d-flex flex-column align-items-center">
      <h1>Roll Call!</h1>
      ${studentsData.map(buildStudentHTML).join('')}
      </div>
      `
  }

  btnEl.addEventListener('click', studentsBtn)

})()
