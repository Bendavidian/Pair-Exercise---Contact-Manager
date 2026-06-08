function validateName(name) {
  return typeof name === 'string' && name.trim().length > 0;
}

function validateEmail(email) {
  return typeof email === 'string' && email.trim().length > 0;
}

function validatePhone(phone) {
  return typeof phone === 'string' && phone.trim().length > 0;
}

function validateContact(contact) {
  return (
    contact &&
    validateName(contact.name) &&
    validateEmail(contact.email) &&
    validatePhone(contact.phone)
  );
}

module.exports = {
  validateName,
  validateEmail,
  validatePhone,
  validateContact,
};
