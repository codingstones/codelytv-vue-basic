export default class PageObject {
  constructor(wrapper) {
    this.wrapper = wrapper
  }

  async updateAsync() {
    await flushPromises()
    this.wrapper.update()
  }

  flushPromises() {
    return new Promise(resolve => setImmediate(resolve))
  }

  text() {
    return this.wrapper.text()
  }

  html() {
    return this.wrapper.html()
  }

  contains(text) {
    expect(this.text()).toContain(text)
  }

  matchSnapshot() {
    expect(this.wrapper.html()).toMatchSnapshot()
  }
}
