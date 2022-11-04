import Joi from 'joi'

const fieldsValidations = {
  username: Joi.string().min(5).required()
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objErrors: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objErrors.error) {
    objErrors.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

type ContactFormData = {
  name: string
  telephone: string
  message: string
}

export function signUpValidate(values: ContactFormData) {
  const schema = Joi.object(fieldsValidations)
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
