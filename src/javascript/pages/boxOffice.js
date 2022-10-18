import Section from '../components/movieList/section.js'
import Article from '../components/movieList/article.js'

class BoxOffice {
  constructor() {
    this.mainElement = document.createElement('main')
  }
  async getMovieList () {
    const response = await fetch('/src/data/boxOffice.json')
    const data = await response.json()
    this.movies = data
    const img = await fetch('https://img.megabox.co.kr/SharedImg/2022/10/13/TnglPxaL6kXOO8KI7PNDTDgua4HXGHwV_420.jpg')
  }
  async setMovieList () {
    await this.getMovieList()
    const section = new Section()
    const article = new Article(this.movies)

    this.mainElement.classList.add('main')
    this.mainElement.appendChild(section.render())
    this.mainElement.appendChild(article.render())
  }
  render() {
    this.setMovieList()
    return this.mainElement
  }
}
export default BoxOffice;
