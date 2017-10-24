import PageObject from './PageObject'
import eInput from '../pages/NewGig/embeeded/eInput.vue'

export default class NewGigPage extends PageObject {
  constructor(wrapper) {
    super(wrapper)
    this.wrapper = wrapper
  }

  writeName(name) {
    let input = this.wrapper.find(eInput).find('input')
    input.element.value = name
    input.trigger('input')
  }

  writeNameAsync(name) {
    let input = this.wrapper.find(eInput)
    input.vm.change(name)
  }

  async dirtyValidation() {
    this.wrapper.vm.$v.$touch()
  }
}
