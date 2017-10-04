export default class GigsContainerPO {
  constructor(wrapper) {
    this.wrapper = wrapper
  }

  async updateAsync() {
    await flushPromises()
    this.wrapper.update()
  }

  dayTexts() {
    return this.wrapper.findAll('.q-list-header').wrappers.map((day) => day.text())
  }

  gigRowsFor(dayNumber) {
    return this.wrapper.findAll('.day').at(dayNumber).findAll('.q-item').wrappers.map((row) => row.text().trim())
  }

  text() {
    return this.wrapper.text()
  }

  clickFirstGig() {
    return this.wrapper.find('.row').first().simulate('click')
  }

  clickSecondGig() {
    return this.wrapper.find('.row').at(1).simulate('click')
  }
}
