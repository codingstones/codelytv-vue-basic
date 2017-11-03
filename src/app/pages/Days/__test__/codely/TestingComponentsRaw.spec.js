import Vue from 'vue'
import GigRow from '@/app/pages/Days/GigRow.vue'

describe('GigRow', () => {

  it('renders gig content', async () => {

    const GIG = {id: 'an id', title: 'a title', place: 'a place'}

    const GigRowBuilder = Vue.extend(GigRow)
    const vm = new GigRowBuilder({ propsData: {gig: GIG} }).$mount()

    expect(vm.$el.textContent).toContain('a title')
    expect(vm.$el.textContent).toContain('a place')
  })
})
