import PageObject from './PageObject'

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

  clickFirstGig() {
    this.wrapper.findAll('.q-item').at(0).trigger('click')
  }

  clickSecondGig() {
    this.wrapper.findAll('.q-item').at(1).trigger('click')
  }

  setRouterSpy(routerSpy) {
    this.wrapper.vm.mosicaRouter = routerSpy
  }
}
