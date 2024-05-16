function whichBrowser() {
  if (isFirefox()) {
    return "firefox";
  } else if (isChrome()) {
    return "chrome";
  } else {
    return "idfk";
  }
}
  
function agentHas(keyword) {
  return navigator.userAgent.toLowerCase().search(keyword.toLowerCase()) > -1;
}
  
function isChrome() {
  return agentHas("CriOS") || agentHas("Chrome") || !!window.chrome;
}
  
function isFirefox() {
  return agentHas("Firefox") || agentHas("FxiOS") || agentHas("Focus");
}

function fixbuttons() {
  if (whichBrowser() == "firefox"){
    button = document.getElementsByClassName("button")
    for (let i = 0; i < button.length; i++) {
      button[i].style.width = "24.4%"
    }
  }
}

window.onload = fixbuttons()

function yt() {
  window.open("https://www.youtube.com/@maxflyman171", '_blank');
}

function tt() {
  window.open("https://www.tiktok.com/@maxflymann", '_blank');
}

function disc() {
  window.open("https://discord.gg/3SzwSmtdWd", '_blank');
}

function twch() {
  window.open("https://www.twitch.tv/maxflyman1", '_blank');
}

function twit() {
  window.open("https://twitter.com/MaxFlyMann", '_blank');
}

function redd() {
  window.open("https://www.reddit.com/user/MaxFlyman", '_blank');
}

function spot() {
  window.open("https://open.spotify.com/user/joi9zmlvrwp8atmquz9f5zmff", '_blank');
}

function cash() {
  window.open("https://cash.app/$MaxFlyMan", '_blank');
}

function meow() {
  meowsound = new Audio("../media/audio/meow.wav");
  meowsound.play();
}
