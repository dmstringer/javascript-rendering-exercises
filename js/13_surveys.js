;(function () {
  // convert a survey JavaScript object to an HTML string
  function buildSurveyHTML (survey) {
    return `
    <div class="d-flex flex-column align-items-left" style="width: 600px; margin: 20px;">
      <div class="border-bottom border-secondary">
        <h1>${survey.title}</h1>
      </div>
      <div class="justify-content-start">
        <form>
          ${survey.fields.map(buildFieldsHTML).join('')}
          <button type="submit" class="btn btn-primary mt-3">${survey.submitButtonText}</button>
        </form>
      </div>
    </div>
    `
  }

  function buildFieldsHTML (field) {

    if (field.type === "text") {
      return `
    <div class="form-group">
      <label for="textField" style="margin-top: 10px;">${field.label}</label>
      <textarea class="form-control" id="" rows="3">¯&#92;_(ツ)_/¯</textarea>
    </div>
    `
    } else {
      return `
      <label for="textField" style="margin-top: 10px;">${field.label}</label>
      ${field.options.map(buildOptionsHTML).join('')}
    `
    }
  }

  function buildOptionsHTML (option) {
    let newOption = '';
    if ((typeof option) === "string") {
      newOption = option.charAt(0).toUpperCase() + option.substring(1);
    }else {
      newOption = String(option);
    }
    return `
    <div class="form-check">
      <input class="form-check-input" type="radio" name="fieldOptions" id="fieldOption${option}" value="option${option}">
      <label class="form-check-label" for="fieldOption${option}">${newOption}</label>
    </div>
    `
  }

  // here we have four surveys, each represented by a JavaScript Object,
  // all collected into an Array.
  const surveysData = [
    {
      title: 'Movie Goer Survey',
      fields: [
        {
          label: 'Have you gone to the movies in the last month?',
          type: 'radio',
          options: [
            'yes',
            'no'
          ]
        },
        {
          label: 'On a scale of 1 to 5, Did you enjoy your last theater experience?',
          type: 'radio',
          options: [
            1,
            2,
            3,
            4,
            5
          ]
        }
      ],
      submitButtonText: 'Submit Survey'
    },
    {
      title: 'DigitalCrafts Survey',
      fields: [
        {
          label: 'Are you currently enrolled in a DigitalCrafts class?',
          type: 'radio',
          options: [
            'yes',
            'no'
          ]
        },
        {
          label: "In 3000 words or more, explain what's so great about Adam?",
          type: 'text'
        }
      ],
      submitButtonText: "I'm Done"
    }
  ]

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('surveysBtn')

  function surveysBtn () {
    
    contentElement.innerHTML = `
      <div class="d-flex flex-column align-items-center justify-content-center">
      ${surveysData.map(buildSurveyHTML).join('')}
      </div>
      `
  }

  btnEl.addEventListener('click', surveysBtn)

})()
