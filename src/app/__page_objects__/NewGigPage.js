import PageObject from './PageObject'
import eInput from '../pages/NewGig/embeeded/eInput.vue'

export default class NewGigPage extends PageObject {
  constructor(wrapper) {
    super(wrapper)
    this.wrapper = wrapper
  }

  writeName(name) {
    let input = this.wrapper.find(eInput)
    return input.vm.change(name)
  }
}
