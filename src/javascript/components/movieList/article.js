class Article {
  constructor (movies) {
    this.movies = movies
    this.imgSvrUrl = "https://img.megabox.co.kr"
  }
  render () {
    const article = document.createElement('article')
    article.classList.add('article')

    const ul = document.createElement('ul')
    ul.classList.add('movie-list')

    this.movies.forEach(element => {
      const li = document.createElement('li')
      li.classList.add('movie-item')

      const poster = document.createElement('img')
      poster.setAttribute('src', this.imgSvrUrl + element.imgPathNm)
      poster.setAttribute('alt', `포스터-${element.index}`)
      poster.classList.add('movie-poster')


      const title = document.createElement('div')
      title.classList.add('movie-title')
      const age = document.createElement('div')
      age.classList.add('limit-age')
      age.innerText = element.admisClassNm
      const h3 = document.createElement('h3')
      h3.innerText = element.movieNm
      title.appendChild(age)
      title.appendChild(h3)


      const info = document.createElement('div')
      info.classList.add('movie-info')
      const rate = document.createElement('span')
      rate.classList.add('advance-rate')
      rate.innerText = `예매율 ${element.boxoBokdRt}%`
      const date = document.createElement('span')
      date.classList.add('opening-date')
      date.innerText = `개봉일 ${element.rfilmDe}`
      info.appendChild(rate)
      info.appendChild(date)


      const action = document.createElement('div')
      action.classList.add('movie-action')
      const linkBtn = document.createElement('button')
      linkBtn.classList.add('like-button')
      linkBtn.innerText = element.intrstCnt
      const ticketingBtn = document.createElement('button')
      ticketingBtn.classList.add('ticketing-button')
      ticketingBtn.innerText = '예매'
      action.appendChild(linkBtn)
      action.appendChild(ticketingBtn)


      li.appendChild(poster)
      li.appendChild(title)
      li.appendChild(info)
      li.appendChild(action)

      ul.appendChild(li)
    });
    article.appendChild(ul)

    return article
  }
}

export default Article