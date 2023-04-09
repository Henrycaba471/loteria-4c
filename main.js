const numberOne = document.querySelector('.one');
const numberTwo = document.querySelector('.two');
const numberThree = document.querySelector('.three');
const numberFour = document.querySelector('.four');
const stop = document.getElementById('send');
const retry = document.getElementById('retry');
const name = document.getElementById('name');
const signo = document.querySelector('.signo');
const selected = document.querySelector('select');



let colors = ['#88E1F2', '#0078D7', '#A7FF83', '#17B978', '#F4FA9C', '#88BEF5', '#43DDE6', '#FFFFDD', '#FFD5E5', '#BEEBE9', '#DF7861', '#FF7C7C', '#21243D', '#FFD082', '#88E1F2', '#88E1F2', '#21243D', '#FF2E63', '#2A7886', '#A8E6CF', '#0F4C81', '#9399FF', '#721B65', '#B80D57', '#4F3961', '#1EB2A6', '#D4F8E8', '#FFA34D', '#F67575', '#FFF591', '#A3F7BF', '#05DFD7', '#F35588', '#FFAC41'];

let signos = ['ARIES', 'TAURO', 'GÉMINIS', 'CÁNCER', 'LEO', 'VIRGO', 'LIBRA', 'ESCORPIÓN', 'SAGITARIO', 'CAPRICORNIO', 'ACUARIO', 'PISCIS'];

function randomNumber(cant) {
  return Math.round(Math.random() * (cant - 1));
}

function numberR() {
  running = setInterval(() => {
    numberOne.innerHTML = `<span style='color: #753A88'>${randomNumber(10)}</span>`
    numberOne.style.backgroundColor = colors[randomNumber(colors.length)];
    numberTwo.innerHTML = `<span style='color: #753A88'>${randomNumber(10)}</span>`
    numberTwo.style.backgroundColor = colors[randomNumber(colors.length)];
    numberThree.innerHTML = `<span style='color: #753A88'>${randomNumber(10)}</span>`
    numberThree.style.backgroundColor = colors[randomNumber(colors.length)];
    numberFour.innerHTML = `<span style='color: #753A88'>${randomNumber(10)}</span>`
    numberFour.style.backgroundColor = colors[randomNumber(colors.length)];
    signo.innerHTML = `<h3>${signos[randomNumber(signos.length)]}</h3>`;
    signo.style.backgroundColor = colors[randomNumber(colors.length)];
    signo.style.border = `2px solid ${colors[randomNumber(colors.length)]}`;

  }, 20);
  retry.disabled = true;
  stop.addEventListener('click', () => {
    clearInterval(running)
    retry.disabled = false;
    selected.disabled = false;
  });
}

selected.addEventListener('change', () => {
  
  let lotSelect = selected.value.toString();
  if (lotSelect === 'Select') {
    location.reload();
    alert('Debes seleccionar una lotería');
  }
  if (lotSelect !== 'Astro Luna' && lotSelect !== 'Astro Sol') {
    signo.style.display = 'none';
    
  } else {
    signo.style.display = 'block';
  }
  
  name.innerHTML = `Tu número de la suerte para <mark style='color: ${colors[randomNumber(colors.length)]}; background-color: #87e; border-radius: 5px; padding: 0px 4px;'>${lotSelect}</mark> es:`;
  
  retry.disabled = false;
  selected.disabled = true;
  numberR();
});

retry.addEventListener('click', () => numberR());