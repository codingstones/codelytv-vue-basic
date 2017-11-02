export function createGigPayload(title, dateTime) {
  return {
    title: title,
    day: dateTime.substring(0, 10),
    description: 'Fake gig created by jota-api',
    place: 'Fake place'
  }
}
