
export const normalizeString = (string) => {
  return string.normalize("NFD")
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, '-')
}

export const getLocalHref = (string) => {
  const lowerCaseString = string.toLowerCase()

  return `#${normalizeString(lowerCaseString)}`
}

export const getEuroFormat = (value) => {
  return new Intl.NumberFormat('es-ES', {
    currency: 'EUR'
  }).format(value)
}