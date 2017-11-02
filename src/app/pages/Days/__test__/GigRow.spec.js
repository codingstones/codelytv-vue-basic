import GigRow from '@/app/pages/Days/GigRow.vue'
import { mount } from 'vue-test-utils'

describe('GigRow', () => {

  it('renders gig content', async () => {

    const GIG = {id: 'an id', title: 'a title', place: 'a place'}

    const wrapper = mount(GigRow, { propsData: {gig: GIG} })

    expect(wrapper.text()).toContain('a title - a place')
  })
})



// fit('renders the correct message with native', () => {
//   const Ctor = Vue.extend(FunctionalSFC)
//   const vm = new Ctor({ propsData: { msg: 'Hello' } }).$mount()
//   console.log('YIIIIPIIII', vm.$el.textContent)
// })

// it('renders the correct message with native from parent', () => {
//   const Ctor = Vue.extend(FunctionalSFCParent)
//   const vm = new Ctor().$mount()
//   console.log('YIIIIPIIII', vm.$el.textContent)
// })
