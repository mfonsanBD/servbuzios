import Joi from 'joi'

const fieldsValidations = {
  quantidade: Joi.string().required(),
  nome: Joi.string().required(),
  tema: Joi.string().required(),
  title: Joi.string().required()
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

type FormProps = {
  quantidade: string
  nome: string
  tema: string
}

export function modeloForm(values: FormProps) {
  const schema = Joi.object(fieldsValidations)
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function addPostTitle(title: string) {
  const schema = Joi.object(fieldsValidations)
  return getFieldErrors(schema.validate(title, { abortEarly: false }))
}
