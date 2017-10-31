import faker from 'faker'
import { isoFuture, spanishFromIso } from '../date-utils'

export function createFakeGig(date) {
  return {
    id: faker.random.number().toString(),
    title: randomTitle(),
    description: faker.lorem.paragraph(),
    image_url: randomImageUrl(),
    lat_lng: `${faker.address.latitude()},${faker.address.longitude()}`,
    address: faker.address.streetAddress(),
    price: randomNumber(5, 100) + '€',
    place: randomPlace(),
    hour: randomNumber(4, 11) + 'PM',
    day: date
  }
}

function randomNumber(min, max) {
  return faker.random.number({min, max})
}

export function createFakeDay(date) {
  return {
    day: spanishFromIso(date),
    gigs: Array(randomNumber(1, 10)).fill().map(() => createFakeGig(date))
  }
}

export function createFakeDays() {
  return Array(randomNumber(3, 10)).fill().map((number, index) => {
    return createFakeDay(isoFuture(index))
  })
}

function randomImageUrl() {
  return imageUrls[randomNumber(0, imageUrls.length - 1)]
}

const imageUrls = [
  'https://i.pinimg.com/736x/0e/de/f8/0edef8dd970d352a95a8caeaa55aa81c--marina-dancing.jpg',
  'https://i.pinimg.com/564x/95/83/8b/95838bc6e43c5229b7a677a78c70e09a.jpg',
  'https://i.pinimg.com/564x/08/d5/dd/08d5ddd4bb0c8a59b7a4021ba87a38e8.jpg',
  'https://i.pinimg.com/564x/31/c7/4e/31c74e89d905b300e3832b439ce7ffc0.jpg',
  'https://i.pinimg.com/564x/97/0b/73/970b736b7d75062ab9a525ad5f3c3497.jpg',
  'https://i.pinimg.com/564x/cf/b7/b6/cfb7b6fc2000dfdbb9f4aeb8800f7e87.jpg',
  'https://i.pinimg.com/564x/59/bb/59/59bb5945d68e8d913b2130f3628949b9.jpg'
]

function randomPlace() {
  return places[randomNumber(0, places.length - 1)]
}

const places = [
  'Sala Razzmatazz',
  'Codely Headquarters',
  'Pabellón Principe Felipe',
  'Estadio Vicente Calderón',
  'Palacio Municipal de los Deportes Huesca',
  'Joy Slava',
  'Sala Z',
  'Estadio de Wembley',
  'CBGB New York',
  'Teatro Principal de Zaragoza'
]

function randomTitle() {
  return firstTerm[randomNumber(0, firstTerm.length - 1)] + ' ' +
  secondTerm[randomNumber(0, secondTerm.length - 1)] + ' ' +
  thirdTerm[randomNumber(0, thirdTerm.length - 1)]
}

const firstTerm = [
  'Grupo', 'Agrupación', 'Amigos', 'Folklore', 'Colectivo', 'Banda', 'Ronda', 'Rondalla', 'Escuela'
]

const secondTerm = [
  'Folclore', 'Baluarte', 'Danzantes', 'Joteros', 'Jota', 'Baile'
]

const thirdTerm = [
  'De Zaragoza', 'Aragonés', 'Turolense', 'Oscense'
]

// {
//   'schedule_id': 5280,
//   'schedule': [
//   {
//     'id': 5280,
//     'day': '2017-09-18',
//     'hour': '19:30',
//     'gig_id': 5927,
//     'created_at': '2017-09-07T15:57:35.419Z',
//     'updated_at': '2017-09-07T15:57:35.419Z'
//   }
// ]
// },
