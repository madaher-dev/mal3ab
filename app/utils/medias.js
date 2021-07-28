export function getStrapiMedia(url) {
  if (url == undefined) {
    return '/empty.png'
  } else if (url == null) {
    return '/empty.png'
  } else if (url.startsWith('/')) {
    return `https://mal3ab.herokuapp.com:1337${url}`
  }
  return url
}
