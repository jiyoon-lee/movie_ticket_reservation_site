import Login from './login.js'
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
    $img.setAttribute('alt', '헤더 로고')
    $header.appendChild($img)

    const modalSwitch = document.createElement('div')
    modalSwitch.classList.add('modal-switch')
    modalSwitch.innerText = '👩🏿‍💻'
    $header.appendChild(modalSwitch)

    window.addEventListener('click', (e) => {
      e.preventDefault()
      if (e.target.className === 'modal-switch') {
        const modal = document.querySelector('.modal')
        modal.style.display = 'flex'
      }
    })

    const login = new Login()
    $header.appendChild(login.render())

    const $nav = document.createElement('nav')
    $nav.classList.add('nav')
    
    const $ul = document.createElement('ul')
    $ul.classList.add('nav-list')
    
    const navList = [
      { title: "박스오피스", link: '/' },
      { title: "상영예정작", link: '/comingsoon' },
      { title: "특별상영", link: '/special' },
      { title: "필름소사이어티", link: '/film' },
      { title: "클래식소사이어티", link: '/classic' }
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