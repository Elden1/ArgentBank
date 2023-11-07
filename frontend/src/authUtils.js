export function isTokenPresent() {
    return localStorage.getItem('userToken') !== null;
  }