import {
  ComingsoonMovie,
  ClassicMovie,
  FilmMovie,
  SpecialMovie,
  BoxOffice,
} from "./pages/index.js";
import Header from './components/layouts/header.js'
import { Router } from "./utils/index.js";
class App {
  constructor(props) {
    this.props = props;
  }
  setup() {
    // 레이아웃
    const { el } = this.props;
    const rootElement = document.querySelector(el)
    const header = new Header(el)
    const $header = header.render()

    rootElement.appendChild($header)

    const main = document.createElement('main');
    // const container = document.createElement('div')

    rootElement.appendChild(main)
    // rootElement.appendChild(container)

    // 내부 바뀌는 컴포넌트
    // 박스오피스 | 상영예정작 | 특별상영 | 필름소사이어티 | 클래식소사이어티
    const router = new Router({
      "/": BoxOffice,
      "/comingsoon": ComingsoonMovie,
      "/special": SpecialMovie,
      "/film": FilmMovie,
      "/classic": ClassicMovie,
    });
    router.init(main);
  }
}

export default App;
