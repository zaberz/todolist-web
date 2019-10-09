const tokenName = "token";
export function getToken() {
  let tokenInfo = JSON.parse(localStorage.getItem(tokenName));
  let token = false;
  if (tokenInfo) {
    let { expireAt } = tokenInfo;
    if (expireAt > +new Date()) {
      token = tokenInfo.token;
    } else {
      localStorage.removeItem(tokenName);
    }
  }
  return token;
}

export function setToken(token, expireTime) {
  // expireTime xxx 秒
  const expireAt = +new Date() + expireTime * 1000;
  let tokenInfo = {
    token,
    expireAt
  };
  localStorage.setItem(tokenName, JSON.stringify(tokenInfo));
}
