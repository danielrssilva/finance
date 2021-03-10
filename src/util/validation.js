function validateLenghtGreater0(str) {
  if (str && str.length > 0) {
    return true;
  }
  return false;
}
function validadeValue(value) {
  if (value > 0) {
    return true;
  }
  return false;
}

export const validateObject = ({ type, value, date }) => {
  if (
    validateLenghtGreater0(type) &&
    validadeValue(value) &&
    validateLenghtGreater0(date)
  ) {
    return true;
  }
  return false;
};
