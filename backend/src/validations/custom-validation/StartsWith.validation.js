const startsWithUidNumber = (value, helper) => {
  if (value.startsWith("8") || value.startsWith("6")) {
    return value;
  }
  return helper.error(
    `${value} is not a valid uidNumber value must start with 8 or 6`
  );
};

const startsWithVatNumber = (value, helper) => {
  if (value.startsWith("3")|| !value) {
    return value;
  }
  return helper.error(
    `${value} is not a valid vatNumber value must start with 3`
  );
};

module.exports = {
  startsWithUidNumber,
  startsWithVatNumber,
};
