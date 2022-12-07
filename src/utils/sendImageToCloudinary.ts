/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent } from 'react'

const SendImageToCloudinary = async (event: FormEvent<HTMLFormElement>) => {
  const form = event.currentTarget
  const fileInput: any = Array.from(form.elements).find(
    ({ name }: any) => name === 'file'
  )

  if (fileInput.files[0] !== undefined) {
    const formData = new FormData()

    for (const file of fileInput.files) {
      formData.append('file', file)
    }

    formData.append('upload_preset', 'testewoof')

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/mikedevanorak/image/upload',
      {
        method: 'POST',
        body: formData
      }
    ).then((r) => r.json())

    return data
  } else {
    return 'erro'
  }
}

export { SendImageToCloudinary }
