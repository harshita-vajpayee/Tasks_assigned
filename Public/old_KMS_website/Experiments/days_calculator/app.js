let datePicker = document.querySelectorAll('input');

datePicker.forEach(picker => {
  picker.addEventListener('change', _onDateSelect);
});

function _showHTML(days) {
  let domElement = document.querySelector('.date span'),
      dateWrapper = document.querySelector('.date');
  
  if(days <= 0 || !days) {
    domElement.innerHTML = 'Please check the ';
    dateWrapper.classList.remove('filled');
  } else {
    domElement.innerHTML = days;
    dateWrapper.classList.add('filled');
   }
}

function _onDateSelect(event) {
  let
    dateValue = [document.querySelector('.from-day').value, document.querySelector('.to-day').value],
    date1 = new Date(dateValue[0]),
    date2 = new Date(dateValue[1]),
    timeDiff = Math.abs(date2.getTime() - date1.getTime()),
    diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
  ;
  
  _showHTML(diffDays);
}

_showHTML(0);