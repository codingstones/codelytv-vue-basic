// function createGig(payload) {
//   return Promise.resolve(payload)
// }

const createGigStub = jest.fn((payload) => {
  Promise.resolve(payload)
})

module.exports = { createGig: createGigStub }
