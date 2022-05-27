export const startsWithUidNumber = (value) => {
  if (value.startsWith("8") || value.startsWith("6")) {
    return value;
  }
};

export const startsWithVatNumber = (value) => {
  if (value.startsWith("3")) {
    return value;
  }
};
