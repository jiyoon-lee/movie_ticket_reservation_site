import Login from '../modals/login.js'
class Header {
  constructor () {
  }
  render () {
    const $headerContainer = document.createElement('div')
    const $header = document.createElement('header');
    $header.classList.add('header')
    const $img = document.createElement('img')
    $img.classList.add('header-logo')
    $img.setAttribute('src', '/src/assets/header_logo.png')
    $img.setAttribute('alt', 'ν€λ λ‘κ³ ')
    $header.appendChild($img)

    const modalSwitch = document.createElement('div')
    modalSwitch.classList.add('modal-switch')
    modalSwitch.innerText = 'π©πΏβπ»'
    $header.appendChild(modalSwitch)

    window.addEventListener('click', (e) => {
      if (e.target.className === 'modal-switch') {
        const modal = document.querySelector('.modal')
        modal.style.display = 'flex'
      }
    })

    const login = new Login($header)
    login.render()

    const $nav = document.createElement('nav')
    $nav.classList.add('nav')
    
    const $ul = document.createElement('ul')
    $ul.classList.add('nav-list')
    
    const navList = [
      { title: "λ°μ€μ€νΌμ€", link: '/' },
      { title: "μμμμ μ", link: '/comingsoon' },
      { title: "νΉλ³μμ", link: '/special' },
      { title: "νλ¦μμ¬μ΄μ΄ν°", link: '/film' },
      { title: "ν΄λμμμ¬μ΄μ΄ν°", link: '/classic' }
    ]

    navList.forEach(element => { 
      const $li = document.createElement('li')
      $li.classList.add('navi-list-item')
      const alink = document.createElement('a')
      alink.setAttribute('href', element.link);
      alink.innerText = element.title
      $li.appendChild(alink)

      $ul.appendChild($li)
    })
    $nav.appendChild($ul)

    $headerContainer.appendChild($header)
    $headerContainer.appendChild($nav)

    return $headerContainer
  }
}
export default Header