function wordCounter() {
  let text = document.querySelector('.input').value

  let array = text.split(' ')

  array = array.filter(empty => String(empty).trim())

  let result = array.length

  if (text == 0) {
    alert('Erro: Favor preencher a caixa de texto antes de enviar o formulário')
  } else {
    numericValue.innerHTML = result
    numericValue.style.color = '#001e57'
  }
}
