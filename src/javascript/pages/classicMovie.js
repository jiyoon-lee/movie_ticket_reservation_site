class ClassicMovie {
  constructor(mainElement) {
    this.mainElement = mainElement
  }
  render() {
    const aa = document.createElement("div");
    aa.innerHTML = "클래식무비";
    return aa
  }
}
export default ClassicMovie;
