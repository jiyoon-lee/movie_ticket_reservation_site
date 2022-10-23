class Login {
  constructor() {

  }
  submitInput () {
    document.addEventListener('submit', (e) => {
      const form = e.target
      
      fetch(form.action, {
        method: form.method,
        body: newFromData(form)
      })

      e.preventDefault()
    })
  }
  render () {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.style.display = 'flex'
    const dialog = document.createElement('div')
    dialog.classList.add('dialog')

    // form 태그
    const form = document.createElement('form')
    form.setAttribute('name', 'form')
    form.setAttribute('id', 'form')
    form.setAttribute('method', 'POST')
    form.setAttribute('action', 'http://localhost:3065/user')

    // email input
    const emailInput = document.createElement('input')
    emailInput.setAttribute('type', 'email')
    emailInput.setAttribute('name', 'email')
    emailInput.setAttribute('placeholder', '이메일을 입력해주세요.')

    // nickname input
    const nicknameInput = document.createElement('input')
    nicknameInput.setAttribute('type', 'text')
    nicknameInput.setAttribute('name', 'nickname')
    nicknameInput.setAttribute('placeholder', '닉네임은 입력해주세요.')

    // password input
    const passwordInput = document.createElement('input')
    passwordInput.setAttribute('type', 'password')
    passwordInput.setAttribute('name', 'password')
    passwordInput.setAttribute('placeholder', '비밀번호를 입력해주세요.')

    // submit button
    const submitButton = document.createElement('input')
    submitButton.setAttribute('type', 'submit')
    submitButton.setAttribute('value', '제출')

    document.addEventListener('submit', async (e) => {
      const form = e.target
      const data = new FormData(form)
      
      const aa = await fetch(form.action, {
        method: form.method,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
          email: 'jiyoon3421@gmail.com',
          nickname: 'jiyoon',
          password: '1234'
        })
      })

      console.log(aa)
      e.preventDefault()
    })

    form.appendChild(emailInput)
    form.appendChild(nicknameInput)
    form.appendChild(passwordInput)
    form.appendChild(submitButton)


    dialog.appendChild(form)

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