const EMAIL_URL = 'https://emailapi.alejandrocoder.com'

export const sendEmail = (form) => {
  return fetch(EMAIL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
}
