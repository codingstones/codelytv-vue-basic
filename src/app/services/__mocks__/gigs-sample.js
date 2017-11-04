export const fakeGigsByDay =
  {
    '2017-09-18': {
      'date': '2017-09-18',
      'gigs': [
        {
          'id': '123456',
          'title': 'Anarchy in the Jota S',
          'lat_lng': '41.641851935961654,-0.8751129897638315',
          'address': 'BCN',
          'description': 'Coding Stones cantando Joticas',
          'price': '',
          'image_url': 'http://www.zaragoza.es/cont/paginas/actividades/imagen/web_320x480px.png',
          'place': 'SCBCN',
          'slug': 'stones',
          'schedule_id': 5280,
          'hour': '19:30',
          'day': '2017-09-18',
          'schedule': [
            {
              'id': 5280,
              'day': '2017-09-18',
              'hour': '19:30',
              'gig_id': 5927,
              'created_at': '2017-09-07T15:57:35.419Z',
              'updated_at': '2017-09-07T15:57:35.419Z'
            }
          ]
        },
        {
          'id': '2222222',
          'title': 'Jotas de Codely TV',
          'lat_lng': '41.641851935961654,-0.8751129897638315',
          'address': 'BCN',
          'description': 'Javi y Rafa cantando jotas',
          'price': '',
          'image_url': 'http://www.wtf.es/wtf.png',
          'affiliate_url': null,
          'place': 'Around the world',
          'slug': 'stones',
          'schedule_id': 5280,
          'hour': '19:30',
          'day': '2017-09-18',
          'schedule': [
            {
              'id': 5280,
              'day': '2017-09-18',
              'hour': '19:30',
              'gig_id': 5927,
              'created_at': '2017-09-07T15:57:35.419Z',
              'updated_at': '2017-09-07T15:57:35.419Z'
            }
          ]
        }
      ]
    }
  }

export const FIRST_DAY = fakeGigsByDay[Object.keys(fakeGigsByDay)[0]]
export const FIRST_GIG = FIRST_DAY.gigs[0]
export const DAY_LIST = Object.values(fakeGigsByDay)
