const acceptCookies = () => {
  const alertBar = document.querySelector(".alertbar");
  alertBar.classList.add("accept");
  alertBar.remove();
}

function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') {
        document.getElementById('ac-wrapper').style.display = "none";
    }
    else  if(localStorage.getItem("popupWasShown") == null) {
        localStorage.setItem("popupWasShown",1);
        document.getElementById('ac-wrapper').removeAttribute('style');
    }
}
window.onload = function () {
    setTimeout(function () {
        PopUp('show');
    }, 0);
}
const userReject2 = () => {
  window.onbeforeunload = function (e) {
      // window.onunload = function () {
        if (window.location.origin != ('https://m-piechatzek.github.io' || 'https://notesmachine.com')) {
                 localStorage.removeItem("popupWasShown");
        }
      // }
      // return undefined;
  };
};
const userReject = () => {
  localStorage.removeItem("popupWasShown");
}

function hideNow(e) {
    if (e.target.id == 'ac-wrapper') document.getElementById('ac-wrapper').style.display = 'none';
}
