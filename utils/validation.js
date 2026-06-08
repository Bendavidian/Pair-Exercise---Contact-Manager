function validateName(name) {
  if (typeof name !== 'string' || name.trim().length === 0) {
    throw new Error('Name is required');
  }
  return true;
}

function validateEmail(email) {
  if (typeof email !== 'string' || email.trim().length === 0) {
    throw new Error('Email is required');
  }

  if (!email.includes('@')) {
    throw new Error('Email must contain @ symbol');
  }

  return true;
}

function validatePhone(phone) {
  if (typeof phone !== 'string' || phone.trim().length === 0) {
    throw new Error('Phone is required');
  }
  return true;
}

function validateContact(name, email, phone) {
  validateName(name);
  validateEmail(email);
  validatePhone(phone);
  return true;
}

module.exports = {
  validateName,
  validateEmail,
  validatePhone,
  validateContact,
};
