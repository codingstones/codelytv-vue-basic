import PageObject from './PageObject'
import eInput from '../pages/NewGig/embeeded/eInput.vue'
import eDateTime from '../pages/NewGig/embeeded/eDateTime.vue'
import FormButton from '../shared/FormButton.vue'

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

  dirtyValidation() {
    this.wrapper.vm.$v.$touch()
  }

  writeDatetime(datetime) {
    const edatetime = this.wrapper.find(eDateTime)
    edatetime.vm.change(datetime)
  }

  // This does not work but it's interesting to review WHY in the video
  writeDatetimeTry(datetime) {
    let div = this.wrapper.find(eDateTime).find('.q-input-target')
    div.element.innerHTML = datetime
    div.trigger('input')
  }

  hasDatetimeError() {
    return this.wrapper.find(eDateTime).hasClass('text-red')
  }

  hasNameError() {
    return this.wrapper.find(eInput).hasClass('text-red')
  }

  isSaveButtonDisabled() {
    return this.wrapper.find(FormButton).hasProp('disabled', true)
  }
}
