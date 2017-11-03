import Days from '@/app/pages/Days/Days.vue'
import { mount } from 'vue-test-utils'
import { fakeGigsByDay } from '../../../../services/__mocks__/gigs-sample'
import DaysPageObject from '../../../../__page_objects__/DaysPageObject'

jest.mock('@/app/services/jota-api')

xdescribe('Days', () => {

  /* Test to demonstrate how to explicitly inject backendService as a prop
  (less MAGIC than manual jest mock)
   */
  it('renders days', async () => {
    const retrieveDays = () => Promise.resolve(fakeGigsByDay)

    const wrapper = mount(Days, {propsData: {retrieveDays}})
    const page = new DaysPageObject(wrapper)
    await page.wait()

    expect(wrapper.html()).toContain('rapsus')
  })
})
