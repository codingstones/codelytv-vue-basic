export function createGigPayload(title, dateTime) {
  return {
    title: title,
    day: dateTime.substring(0, 10),
    description: 'Fake gig created by jota-api',
    place: 'Fake place',
    image_url: 'https://pbs.twimg.com/profile_images/727103317168394240/fY7WRP5T_400x400.jpg'
  }
}
