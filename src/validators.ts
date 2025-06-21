export const positiveNumberValidator = async (value?: number) => {
  return !value || value < 0 ? "Enter a amount greater than 0" : true;
};
