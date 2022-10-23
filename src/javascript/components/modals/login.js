class Login {
  constructor(el) {
    this.parentElement = el
  }
  render () {
    const $modalTriggerBtn = document.createElement('button')
    $modalTriggerBtn.classList.add('btn', 'btn-primary')
    $modalTriggerBtn.setAttribute('data-bs-toggle', 'modal')
    $modalTriggerBtn.setAttribute('data-bs-target', '#signupModal')
    $modalTriggerBtn.innerText = 'Launch demo modal'

    const $modalContainer = document.createElement('div')
    $modalContainer.classList.add('modal', 'fade')
    $modalContainer.setAttribute('id', 'signupModal')
    $modalContainer.setAttribute('tabindex', '-1')
    $modalContainer.setAttribute('aria-labelledby', '#signupModalLabel')
    $modalContainer.setAttribute('aria-hidden', 'true')
    const $modalDialog = document.createElement('div')
    $modalDialog.classList.add('modal-dialog')
    const $modalContent = document.createElement('div')
    $modalContent.classList.add('modal-content')
    const $modalHeader = document.createElement('div')
    $modalHeader.classList.add('modal-header')
    const $headerTitle = document.createElement('h1')
    $headerTitle.classList.add('modal-title', 'fs-5')
    $headerTitle.setAttribute('id', 'signupModalLabel')
    $headerTitle.innerText = 'Sign up'
    const $headerCloseBtn = document.createElement('button')
    $headerCloseBtn.classList.add('btn-close')
    $headerCloseBtn.setAttribute('type', 'button')
    $headerCloseBtn.setAttribute('data-bs-dismiss', 'modal')
    $headerCloseBtn.setAttribute('aria-label', 'Close')
    const $modalBody = document.createElement('div')
    $modalBody.classList.add('modal-body')

    // form 태그
    const $form = document.createElement('form')
    $form.setAttribute('name', 'form')
    $form.setAttribute('id', 'form')
    $form.setAttribute('method', 'POST')
    $form.setAttribute('action', 'http://localhost:3065/user')

    // email input
    const $emailContainer = document.createElement('div')
    $emailContainer.classList.add('row', 'mb-3')

    const $emailLavel = document.createElement('label')
    $emailLavel.classList.add('col-sm-2', 'col-form-label')
    $emailLavel.innerText = 'Email'
    $emailLavel.setAttribute('for', 'inputEmail')

    const $emailInputContainer = document.createElement('div')
    $emailInputContainer.classList.add('col-sm-10')
    
    const $emailInput = document.createElement('input')
    $emailInput.classList.add('form-control')
    $emailInput.setAttribute('type', 'email')
    $emailInput.setAttribute('id', 'inputEmail')
    $emailInput.setAttribute('name', 'email')

    $emailInputContainer.append($emailInput)
    $emailContainer.append($emailLavel)
    $emailContainer.appendChild($emailInputContainer)

    // nickname input
    const $nicknameContainer = document.createElement('div')
    $nicknameContainer.classList.add('row', 'mb-3')

    const $nicknameLavel = document.createElement('label')
    $nicknameLavel.classList.add('col-sm-2', 'col-form-label')
    $nicknameLavel.innerText = 'Nickname'
    $nicknameLavel.setAttribute('for', 'inputNickname')

    const $nicknameInputContainer = document.createElement('div')
    $nicknameInputContainer.classList.add('col-sm-10')
    
    const $nicknameInput = document.createElement('input')
    $nicknameInput.classList.add('form-control')
    $nicknameInput.setAttribute('type', 'text')
    $nicknameInput.setAttribute('id', 'inputNickname')
    $nicknameInput.setAttribute('name', 'nickname')

    $nicknameInputContainer.append($nicknameInput)
    $nicknameContainer.append($nicknameLavel)
    $nicknameContainer.appendChild($nicknameInputContainer)

    // password input
    const $passwordContainer = document.createElement('div')
    $passwordContainer.classList.add('row', 'mb-3')

    const $passwordLavel = document.createElement('label')
    $passwordLavel.classList.add('col-sm-2', 'col-form-label')
    $passwordLavel.innerText = 'Password'
    $passwordLavel.setAttribute('for', 'inputPassword')

    const $passwordInputContainer = document.createElement('div')
    $passwordInputContainer.classList.add('col-sm-10')
    
    const $passwordInput = document.createElement('input')
    $passwordInput.classList.add('form-control')
    $passwordInput.setAttribute('type', 'text')
    $passwordInput.setAttribute('id', 'inputPassword')
    $passwordInput.setAttribute('name', 'password')

    $passwordInputContainer.append($passwordInput)
    $passwordContainer.append($passwordLavel)
    $passwordContainer.appendChild($passwordInputContainer)

    // submit button
    const $buttonContainer = document.createElement('div')
    $buttonContainer.classList.add('d-flex', 'justify-content-center', 'mt-5')
    const $button = document.createElement('button')
    $button.setAttribute('type', 'submit')
    $button.classList.add('btn', 'btn-primary')
    $button.innerText = 'Sign up'
    $buttonContainer.append($button)

    $form.appendChild($emailContainer)
    $form.appendChild($nicknameContainer)
    $form.appendChild($passwordContainer)
    $form.appendChild($buttonContainer)

    
    // modal footer
    const $modalFooter = document.createElement('div')
    $modalFooter.classList.add('modal-footer')
    const $modalCloseBtn =document.createElement('button')
    $modalCloseBtn.classList.add('btn', 'btn-secondary')
    $modalCloseBtn.setAttribute('data-bs-dismiss', 'modal')
    $modalCloseBtn.setAttribute('type', 'button')
    $modalCloseBtn.innerText = 'Close'
    
    $modalHeader.append($headerTitle)
    $modalHeader.appendChild($headerCloseBtn)
    
    $modalBody.append($form)
    $modalFooter.append($modalCloseBtn)
    
    $modalContent.append($modalHeader)
    $modalContent.appendChild($modalBody)
    $modalContent.appendChild($modalFooter)

    $modalDialog.append($modalContent)
    $modalContainer.append($modalDialog)

    this.parentElement.append($modalTriggerBtn)
    this.parentElement.appendChild($modalContainer)

    window.addEventListener('submit', async (e) => {
      e.preventDefault()
      try {
        const form = e.target
        const data = {
          email: form.querySelector('input[name="email"]').value,
          nickname: form.querySelector('input[name="nickname"]').value,
          password: form.querySelector('input[name="password"]').value
        }
        fetch(form.action, {
          method: form.method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
          if (data === 'ok') {
            $modalCloseBtn.click()
          }
        })
      } catch (e) {
        console.log(e)
      }
    })
  }
}

export default Login