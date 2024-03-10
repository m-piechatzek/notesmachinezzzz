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

window.onbeforeunload = function (e) {
    window.onunload = function () {
           localStorage.removeItem("popupWasShown");
    }
    return undefined;
};


function hideNow(e) {
    if (e.target.id == 'ac-wrapper') document.getElementById('ac-wrapper').style.display = 'none';
}
