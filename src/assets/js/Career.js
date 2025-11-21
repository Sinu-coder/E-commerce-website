
export const careerFormValidation = (form) => {
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return { valid: false, data: null };
  }

  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  return { valid: true, data };
};
