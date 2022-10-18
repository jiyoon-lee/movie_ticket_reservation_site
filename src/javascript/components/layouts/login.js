class Login {
  constructor() {

  }
  render () {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.style.display = 'flex'
    const dialog = document.createElement('div')
    dialog.classList.add('dialog')
    dialog.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi at consectetur consequuntur aperiam cumque quas possimus tempora nobis autem, quisquam earum dolore sunt cupiditate modi, temporibus veritatis asperiores quod debitis quae quo. Explicabo quasi earum numquam magni nostrum ullam, minus dolor! Quibusdam laudantium consectetur aspernatur suscipit ad totam voluptates quis?'
    
    const closeButton = document.createElement('button')
    closeButton.innerText = '닫기'

    dialog.appendChild(closeButton)

    modal.appendChild(dialog)

    closeButton.addEventListener('click', (e) => {
      e.preventDefault()
      console.log(modal.style.display)
      modal.style.display = 'none'
    })

    return modal
  }
}

export default Login