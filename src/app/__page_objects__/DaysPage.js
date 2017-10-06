import PageObject from './PageObject';

export default class DayListPage extends PageObject {
  constructor(wrapper) {
    super(wrapper)
    this.wrapper = wrapper
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
