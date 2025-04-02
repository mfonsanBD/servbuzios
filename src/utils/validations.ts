import Joi from 'joi'

const fieldsValidations = {
  name: Joi.string()
    .required()
    .min(3)
    .pattern(/^[^0-9]+$/)
    .messages({
      'string.base': 'Nome Completo deve conter apenas texto',
      'string.min': `Nome Completo deve conter no mínimo {#limit} caracteres.`,
      'string.empty': 'Nome Completo é um campo obrigatório.',
      'string.pattern.base': `Nome Completo não pode conter números.`
    }),
  mail: Joi.string()
    .email({
      tlds: { allow: false }
    })
    .required()
    .messages({
      'string.email': 'Digite um e-mail válido',
      'string.empty': 'Email é um campo obrigatório.'
    }),
  phone: Joi.string().required().messages({
    'string.empty': 'Telefone é um campo obrigatório.'
  }),
  role: Joi.string().required().messages({
    'string.empty': 'Cargo é um campo obrigatório.'
  })
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
  name: string
  mail: string
  phone: string
  role: string
}

export function ContactForm(values: FormProps) {
  const schema = Joi.object(fieldsValidations)
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
