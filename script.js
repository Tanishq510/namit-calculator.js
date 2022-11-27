let string = '';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      console.log(string);
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'C') {
      string = '';
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'DEL') {
      let inputValue = document.getElementsByClassName('input')[0].value;
      string = inputValue.slice(0, -1);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == '√') {
      let freshinput = document.querySelector('input').value;
      string = Math.sqrt(freshinput);
      document.querySelector('input').value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});

function changeImage() {
  let randomNumber = Math.round(Math.random() * 10);
  let image = `https://picsum.photos/900/600?random=${randomNumber}`;
  document.body.style.backgroundImage = "url('" + image + "')";
  console.log('image changed');
}
