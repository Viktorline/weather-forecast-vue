export const capitalizeFirstLetter = (str) => {
  if (!str) {
    return ''
  }

  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const kiloposcalesToMillimetres = (kilo) => {
  if (!kilo) {
    return ''
  }

  return Math.round(kilo * 0.7501)
}

export const normalizeTime = (sec, timezone) => {
  if (!sec) {
    return ''
  }

  const millsecDate = sec * 1000
  const timezoneDate = timezone * 1000

  const date = new Date(millsecDate + timezoneDate)
  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()
  const seconds = date.getUTCSeconds()

  const normalTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

  return normalTime
}
