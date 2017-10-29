import PageObject from './PageObject'

export default class DayListPageObject extends PageObject {
  constructor(wrapper) {
    super(wrapper)
    this.wrapper = wrapper
  }

  clickFirstGig() {
    this.wrapper.findAll('.q-item').at(0).trigger('click')
  }

  clickSecondGig() {
    this.wrapper.findAll('.q-item').at(1).trigger('click')
  }
}
