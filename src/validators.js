export const validateEmail = (value) => {
  const domainRequirement = value.endsWith("@webdevsimplified.com");
  if (!domainRequirement) {
    return "Email must end with @webdevsimplified.com.";
  }
  return "";
};

export const validatePassword = (value) => {
  const lengthRequirement = value.length >= 10;
  const lowercaseRequirement = /[a-z]/.test(value);
  const uppercaseRequirement = /[A-Z]/.test(value);
  const numberRequirement = /[0-9]/.test(value);

  if (!lengthRequirement) {
    return "Password must be 10 characters or longer.";
  }
  if (!lowercaseRequirement) {
    return "Password must include a lowercase letter.";
  }
  if (!uppercaseRequirement) {
    return "Password must include an uppercase letter.";
  }
  if (!numberRequirement) {
    return "Password must include a number.";
  }
  return "";
};
