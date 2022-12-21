/* eslint-disable @typescript-eslint/no-explicit-any */
export const SendContactMail = async (data: any) => {
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json'
    }
  })
}
