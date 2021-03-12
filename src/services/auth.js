export const EMAIL = "@hyacorp-mint/email";
export const ID = "@hyacorp-mint/id";

export const isAuthenticated = () => localStorage.getItem(EMAIL) !== null;

export const getEmail = () => localStorage.getItem(EMAIL);
export const getId = () => localStorage.getItem(ID);

export const login = (user) => {
  localStorage.setItem(EMAIL, user.email);
  localStorage.setItem(ID, user.id);
};

export const logout = () => {
  localStorage.removeItem(EMAIL);
  localStorage.removeItem(ID);
};
