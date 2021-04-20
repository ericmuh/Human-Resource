export const logout = () => {
  localStorage.removeItem("LoggedIn");
  location.reload();
  return;
};
