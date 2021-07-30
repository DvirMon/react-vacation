type FormError = {
  key  : string
  type  : string
}

const setMessage = (error : FormError) : string => {

  if (error.type === 'any.required' || error.type === 'string.empty') {
    return `${error.key} is required`;
  }
  if (error.type === 'string.pattern.base') {
    return `invalid ${error.key} format`;
  }
  if (error.type === 'string.min') {
    return `${error.key} is too short`;
  }
  if (error.type === 'date.isoDate') {
    return 'invalid date format';
  }
  if (error.type === 'any.allowOnly') {
    return 'passwords do not match';
  }

  return ''
};

const useMessage = (error : FormError) : string => setMessage(error);

export default useMessage;