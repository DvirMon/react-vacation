import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
})

const regsiterSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required()
})

const schemasList = {
  login: loginSchema,
  register:  regsiterSchema
};

const useValidation = ({ validationTemplate }) => ({ schema : schemasList[validationTemplate] });

export default useValidation;