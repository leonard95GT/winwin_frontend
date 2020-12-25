export const TOKEN_KEY = 'token';
export const NAME = 'name';
export const COMPANY = 'company';
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);

export const login = (token, name, company) => {
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(NAME, name)
  sessionStorage.setItem(COMPANY, company)
};
export const logout = () => {
  sessionStorage.clear()
};

