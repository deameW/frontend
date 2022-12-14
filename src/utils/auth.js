/**
 * To store the authorization infomation
 */
export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(token) {
  localStorage.setItem("token", token);
}

export function isLogined() {
  if (localStorage.getItem("token") != null) {
    return true;
  }
  return false;
}

export function clearToken() {
  localStorage.removeItem("token");
}
