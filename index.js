'use strict';

function displayDropdown() {
  document.getElementById('dropdownList').classList.add('show');
}

let input, filter, a, i, txtValue, div;
input = document.getElementById('bankInput');
div = document.getElementById('dropdownList');
a = div.getElementsByTagName('a');
console.log(a);

function bankAnchor(links) {
  links.forEach(arr => {
    arr.addeventListener('click', function () {
      // const bankName = a.textContent;
      // input = bankName;
      console.log(arr);
    });
  });
}

function filterDropdown() {
  filter = input.value.toUpperCase();
  bankAnchor(a);
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = '';
    } else {
      a[i].style.display = 'none';
    }
  }
}

// for (let i = 0; i < a.length; i++) {
//   a[i].addEventListener('click', function () {
//     input = a[i].innerText;
//     document.querySelector('.dropdown-input').textContent = input;
//   });
// }

// console.log(document.getElementById('bankInput').innerText.value);
