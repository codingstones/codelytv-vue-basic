import faker from 'faker'
import { isoFuture } from '../date-utils'

let UUID = 0

export function createFakeGig(date) {
  UUID += 1
  return {
    id: (UUID).toString(),
    title: randomTitle(),
    description: faker.lorem.paragraph(15),
    image_url: randomImageUrl(),
    lat_lng: `${faker.address.latitude()},${faker.address.longitude()}`,
    address: fakeAddress(),
    price: randomNumber(5, 60) + '€',
    place: randomPlace(),
    hour: randomNumber(4, 11) + 'PM',
    day: date
  }
}

function fakeAddress() {
  return faker.address.streetAddress() +
   '<br/>' + faker.address.city() + ', ' + faker.address.country() +
   '<br/>' + faker.address.zipCode()
}

function randomNumber(min, max) {
  return faker.random.number({min, max})
}

export function createFakeDay(date) {
  return {
    date: date,
    gigs: Array(randomNumber(1, 10)).fill().map(() => createFakeGig(date))
  }
}

export function createFakeDays() {
  let days = {}
  Array(randomNumber(3, 10)).fill().forEach((number, index) => {
    days[isoFuture(index)] = createFakeDay(isoFuture(index))
  })
  return days
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
  'Grupo', 'Rondalla', 'Agrupación', 'Amigos', 'Folklore', 'Colectivo', 'Banda', 'Ronda',
  'Rondalla', 'Escuela', 'Dulzaineros'
]

const secondTerm = [
  'Folclore', 'Baluarte', 'Danzantes', 'Joteros', 'Jota', 'Baile', 'Bandurrias', 'Copla'
]

const thirdTerm = [
  'de Zaragoza', 'de Aragón', 'Turolense', 'Oscense', 'Fematera', 'Rondadera'
]
