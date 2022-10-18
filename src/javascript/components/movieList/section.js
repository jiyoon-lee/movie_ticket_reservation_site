class Section {
  constructor () {

  }
  render () {
    const section = document.createElement('section')
    section.classList.add('section')

    const spanOpening = document.createElement('span')
    spanOpening.classList.add('opening-date-order')
    spanOpening.innerText = '개봉일순'

    const spanAlphabet = document.createElement('span')
    spanAlphabet.classList.add('alphabet-order')
    spanAlphabet.innerText = '가나다순'

    const spanNumber = document.createElement('span')
    spanNumber.classList.add('number-of-movies')
    spanNumber.innerText = '33개의 영화가 검색되었습니다.'

    section.appendChild(spanOpening)
    section.appendChild(spanAlphabet)
    section.appendChild(spanNumber)
    
    return section
  }
}
export default Section