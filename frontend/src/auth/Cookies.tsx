import { useNavigate } from "react-router-dom";

function setCookie(cookieName: string, cookieValue: any, daysToLive: any) {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie =
    "" + cookieName + "=" + cookieValue + "; " + expires + "; path=/";
}

function deleteCookie(cookieName: string) {
  setCookie(cookieName, null, null);
}

function exterminateCookies() {
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
}

function getCookie(cookieName: string) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = "";
  cArray.forEach((element) => {
    if (element.indexOf(cookieName) == 0) {
      result += element.substring(cookieName.length + 1);
    }
  });
  return result;
}

// function to verify is the user is logged in, if not, redirect to login page
function verifyLogin(navigate: any) {
  if (getCookie("accessToken") === "") {
    navigate("/");
  }
}

export { setCookie, deleteCookie, exterminateCookies, getCookie, verifyLogin };
