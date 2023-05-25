const inputField = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')

linkForm.addEventListener('submit', formSubmit)

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}

function formSubmit(e) {
  e.preventDefault()

  if (inputField.value === '') {
    errMsg.innerHTML = 'Please enter something'
    inputField.classList.add('border-red')
  } else if (!validURL(inputField.value)) {
    errMsg.innerHTML = 'Please enter a valid URL'
    inputField.classList.add('border-red')
  } else {
    errMsg.innerHTML = ''
    inputField.classList.remove('border-red')
    alert('Success')
  }
}