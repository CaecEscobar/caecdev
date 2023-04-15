document.getElementById("gb").addEventListener("click", gb);
document.getElementById("gbc").addEventListener("click", gbc);
document.getElementById("gba").addEventListener("click", gba);
document.getElementById("eng").addEventListener("click", eng);
document.getElementById("esp").addEventListener("click", esp);
document.getElementById("buttonNext").addEventListener("click", buttonNext);

function buttonNext() {
  nextid = document.getElementById("buttonNext1").innerHTML;
  url = window.location.protocol + "//" + window.location.host + "/";
  version = document.getElementById("naroom").src;
  idioma = document.getElementById("modal-header-family").innerHTML;

  if (version == url + "public/naroom-gb.png") {
    if (nextid == 1 && idioma == "<h2>FAMILY</h2>") {
      document.getElementById("buttonNext1").innerHTML = "2";
      document.getElementById("header-work-Cescobar").innerHTML = "GUEST HOUSE";
      document.getElementById("body-work-Cescobar").innerHTML =
        'Band / Landing Page<br><a href="https://www.guesthouse.com.mx/" target="_blank" class="text-body-secondary">Link</a>';
      document.getElementById("workimg1").src = "public/work-gh-1-gb.png";
      document.getElementById("workimg2").src = "public/work-gh-2-gb.png";
      document.getElementById("workimg3").src = "public/work-gh-5-gb.png";
    } else if (nextid == 2 && idioma == "<h2>FAMILY</h2>") {
      document.getElementById("buttonNext1").innerHTML = "1";
      document.getElementById("header-work-Cescobar").innerHTML =
        "C.ESCOBAR ARCHITECT";
      document.getElementById("body-work-Cescobar").innerHTML =
        'Architect / Portfolio<br><a href="https://www.ce-arq.xyz/index-ENG.html" target="_blank" class="text-body-secondary">Link</a>';
      document.getElementById("workimg1").src = "public/work-cescobar-1-gb.png";
      document.getElementById("workimg2").src = "public/work-cescobar-2-gb.png";
      document.getElementById("workimg3").src = "public/work-cescobar-5-gb.png";
    } else if (nextid == 1 && idioma == "<h2>FAMILIA</h2>") {
      document.getElementById("buttonNext1").innerHTML = "2";
      document.getElementById("header-work-Cescobar").innerHTML = "GUEST HOUSE";
      document.getElementById("body-work-Cescobar").innerHTML =
        'Banda / Landing Page<br><a href="https://www.guesthouse.com.mx/" target="_blank" class="text-body-secondary">Link</a>';
      document.getElementById("workimg1").src = "public/work-gh-1-gb.png";
      document.getElementById("workimg2").src = "public/work-gh-2-gb.png";
      document.getElementById("workimg3").src = "public/work-gh-5-gb.png";
    } else if (nextid == 2 && idioma == "<h2>FAMILIA</h2>") {
      document.getElementById("buttonNext1").innerHTML = "1";
      document.getElementById("header-work-Cescobar").innerHTML =
        "C.ESCOBAR ARQUITECTO";
      document.getElementById("body-work-Cescobar").innerHTML =
        'Arquitecto / Portafolio<br><a href="https://www.ce-arq.xyz/index-ENG.html" target="_blank" class="text-body-secondary">Link</a>';
      document.getElementById("workimg1").src = "public/work-cescobar-1-gb.png";
      document.getElementById("workimg2").src = "public/work-cescobar-2-gb.png";
      document.getElementById("workimg3").src = "public/work-cescobar-5-gb.png";
    }
  } else {
    if (nextid == 1 && idioma == "<h2>FAMILY</h2>") {
      document.getElementById("buttonNext1").innerHTML = "2";
      document.getElementById("header-work-Cescobar").innerHTML = "GUEST HOUSE";
      document.getElementById("body-work-Cescobar").innerHTML =
        'Band / Landing Page<br><a href="https://www.guesthouse.com.mx/" target="_blank" class="text-body-secondary">Link</a>';
      document.getElementById("workimg1").src = "public/work-gh-1.jpg";
      document.getElementById("workimg2").src = "public/work-gh-2.jpg";
      document.getElementById("workimg3").src = "public/work-gh-5.jpg";
    } else if (nextid == 2 && idioma == "<h2>FAMILY</h2>") {
      document.getElementById("buttonNext1").innerHTML = "1";
      document.getElementById("header-work-Cescobar").innerHTML =
        "C.ESCOBAR ARCHITECT";
      document.getElementById("body-work-Cescobar").innerHTML =
        'Architect / Portfolio<br><a href="https://www.ce-arq.xyz/index-ENG.html" target="_blank" class="text-body-secondary">Link</a>';
      document.getElementById("workimg1").src = "public/work-cescobar-1.jpg";
      document.getElementById("workimg2").src = "public/work-cescobar-2.jpg";
      document.getElementById("workimg3").src = "public/work-cescobar-5.jpg";
    } else if (nextid == 1 && idioma == "<h2>FAMILIA</h2>") {
      document.getElementById("buttonNext1").innerHTML = "2";
      document.getElementById("header-work-Cescobar").innerHTML = "GUEST HOUSE";
      document.getElementById("body-work-Cescobar").innerHTML =
        'Banda / Landing Page<br><a href="https://www.guesthouse.com.mx/" target="_blank" class="text-body-secondary">Link</a>';
      document.getElementById("workimg1").src = "public/work-gh-1.jpg";
      document.getElementById("workimg2").src = "public/work-gh-2.jpg";
      document.getElementById("workimg3").src = "public/work-gh-5.jpg";
    } else if (nextid == 2 && idioma == "<h2>FAMILIA</h2>") {
      document.getElementById("buttonNext1").innerHTML = "1";
      document.getElementById("header-work-Cescobar").innerHTML =
        "C.ESCOBAR ARQUITECTO";
      document.getElementById("body-work-Cescobar").innerHTML =
        'Arquitecto / Portafolio<br><a href="https://www.ce-arq.xyz/index-ENG.html" target="_blank" class="text-body-secondary">Link</a>';
      document.getElementById("workimg1").src = "public/work-cescobar-1.jpg";
      document.getElementById("workimg2").src = "public/work-cescobar-2.jpg";
      document.getElementById("workimg3").src = "public/work-cescobar-5.jpg";
    }
  }
}

function gb() {
  document.getElementById("gb").addEventListener("click", gb);
  document.getElementById("naroom").src = "public/naroom-gb.png";
  document.getElementById("logohtml").src = "public/logo-html-gb.png";
  document.getElementById("logocss").src = "public/logo-css-gb.png";
  document.getElementById("logojs").src = "public/logo-javascript-gb.png";
  document.getElementById("logobs").src = "public/logo-bootstrap-gb.png";
  document.getElementById("logoreact").src = "public/logo-react-gb.png";
  document.getElementById("logophp").src = "public/logo-php-gb.png";
  document.getElementById("logomysql").src = "public/logo-mysql-gb.png";
  document.getElementById("logojquery").src = "public/logo-jquery-gb.png";
  document.getElementById("logolaravel").src = "public/logo-laravel-gb.png";
  document.getElementById("familyimg0").src = "public/family-1-gb.png";
  document.getElementById("workimg1").src = "public/work-cescobar-1-gb.png";
  document.getElementById("workimg2").src = "public/work-cescobar-2-gb.png";
  document.getElementById("workimg3").src = "public/work-cescobar-5-gb.png";
  document.getElementById("css").href = "stylesGb.css";
  document.getElementById("boxHobbies").src = "public/boxHobbiesGb.png";
  idioma = document.getElementById("modal-header-family").innerHTML;
  if (idioma == "<h2>FAMILY</h2>") {
    document.getElementById("boxFamily").src = "public/boxFamilyGb.png";
    document.getElementById("boxTech").src = "public/boxTechGb.png";
    document.getElementById("boxWork").src = "public/boxWorkGb.png";
    document.getElementById("boxAbout").src = "public/boxAboutGb.png";
    document.getElementById("boxContact").src = "public/boxContactGb.png";
    document.getElementById("buttonNext1").innerHTML = "1";
    document.getElementById("header-work-Cescobar").innerHTML =
      "C.ESCOBAR ARCHITECT";
    document.getElementById("body-work-Cescobar").innerHTML =
      'Architect / Portfolio<br><a href="https://www.ce-arq.xyz/index-ENG.html" target="_blank" class="text-body-secondary">Link</a>';
  } else if (idioma == "<h2>FAMILIA</h2>") {
    document.getElementById("boxFamily").src = "public/boxFamilyGbEsp.png";
    document.getElementById("boxTech").src = "public/boxTechGbEsp.png";
    document.getElementById("boxWork").src = "public/boxWorkGbEsp.png";
    document.getElementById("boxAbout").src = "public/boxAboutGbEsp.png";
    document.getElementById("boxContact").src = "public/boxContactGbEsp.png";
    document.getElementById("buttonNext1").innerHTML = "1";
    document.getElementById("header-work-Cescobar").innerHTML =
      "C.ESCOBAR ARQUITECTO";
    document.getElementById("body-work-Cescobar").innerHTML =
      'Arquitecto / Portafolio<br><a href="https://www.ce-arq.xyz/index-ENG.html" target="_blank" class="text-body-secondary">Link</a>';
  }
}

function gbc() {
  document.getElementById("gbc").addEventListener("click", gbc);
  document.getElementById("naroom").src = "public/naroom-gbc.png";
  document.getElementById("logohtml").src = "public/logo-html.png";
  document.getElementById("logocss").src = "public/logo-css.png";
  document.getElementById("logojs").src = "public/logo-javascript.png";
  document.getElementById("logobs").src = "public/logo-bootstrap.png";
  document.getElementById("logoreact").src = "public/logo-react.png";
  document.getElementById("logophp").src = "public/logo-php.png";
  document.getElementById("logomysql").src = "public/logo-mysql.png";
  document.getElementById("logojquery").src = "public/logo-jquery.png";
  document.getElementById("logolaravel").src = "public/logo-laravel.png";
  document.getElementById("familyimg0").src = "public/family-1.jpg";
  document.getElementById("workimg1").src = "public/work-cescobar-1.jpg";
  document.getElementById("workimg2").src = "public/work-cescobar-2.jpg";
  document.getElementById("workimg3").src = "public/work-cescobar-5.jpg";
  document.getElementById("css").href = "stylesGbc.css";
  document.getElementById("boxHobbies").src = "public/boxHobbiesGbc.png";
  idioma = document.getElementById("modal-header-family").innerHTML;
  if (idioma == "<h2>FAMILY</h2>") {
    document.getElementById("boxFamily").src = "public/boxFamilyGbc.png";
    document.getElementById("boxTech").src = "public/boxTechGbc.png";
    document.getElementById("boxWork").src = "public/boxWorkGbc.png";
    document.getElementById("boxAbout").src = "public/boxAboutGbc.png";
    document.getElementById("boxContact").src = "public/boxContactGbc.png";
    document.getElementById("buttonNext1").innerHTML = "1";
    document.getElementById("header-work-Cescobar").innerHTML =
      "C.ESCOBAR ARCHITECT";
    document.getElementById("body-work-Cescobar").innerHTML =
      'Architect / Portfolio<br><a href="https://www.ce-arq.xyz/index-ENG.html" target="_blank" class="text-body-secondary">Link</a>';
  } else if (idioma == "<h2>FAMILIA</h2>") {
    document.getElementById("boxFamily").src = "public/boxFamilyGbcEsp.png";
    document.getElementById("boxTech").src = "public/boxTechGbcEsp.png";
    document.getElementById("boxWork").src = "public/boxWorkGbcEsp.png";
    document.getElementById("boxAbout").src = "public/boxAboutGbcEsp.png";
    document.getElementById("boxContact").src = "public/boxContactGbcEsp.png";
    document.getElementById("buttonNext1").innerHTML = "1";
    document.getElementById("header-work-Cescobar").innerHTML =
      "C.ESCOBAR ARQUITECTO";
    document.getElementById("body-work-Cescobar").innerHTML =
      'Arquitecto / Portafolio<br><a href="https://www.ce-arq.xyz/index-ENG.html" target="_blank" class="text-body-secondary">Link</a>';
  }
}

function gba() {
  document.getElementById("gba").addEventListener("click", gba);
  document.getElementById("naroom").src = "public/naroom-gba.png";
  document.getElementById("logohtml").src = "public/logo-html.png";
  document.getElementById("logocss").src = "public/logo-css.png";
  document.getElementById("logojs").src = "public/logo-javascript.png";
  document.getElementById("logobs").src = "public/logo-bootstrap.png";
  document.getElementById("logoreact").src = "public/logo-react.png";
  document.getElementById("logophp").src = "public/logo-php.png";
  document.getElementById("logomysql").src = "public/logo-mysql.png";
  document.getElementById("logojquery").src = "public/logo-jquery.png";
  document.getElementById("logolaravel").src = "public/logo-laravel.png";
  document.getElementById("familyimg0").src = "public/family-1.jpg";
  document.getElementById("workimg1").src = "public/work-cescobar-1.jpg";
  document.getElementById("workimg2").src = "public/work-cescobar-2.jpg";
  document.getElementById("workimg3").src = "public/work-cescobar-5.jpg";
  document.getElementById("css").href = "stylesGba.css";
  document.getElementById("boxHobbies").src = "public/boxHobbiesGba.png";
  idioma = document.getElementById("modal-header-family").innerHTML;
  if (idioma == "<h2>FAMILY</h2>") {
    document.getElementById("boxFamily").src = "public/boxFamilyGba.png";
    document.getElementById("boxTech").src = "public/boxTechGba.png";
    document.getElementById("boxWork").src = "public/boxWorkGba.png";
    document.getElementById("boxAbout").src = "public/boxAboutGba.png";
    document.getElementById("boxContact").src = "public/boxContactGba.png";
    document.getElementById("buttonNext1").innerHTML = "1";
    document.getElementById("header-work-Cescobar").innerHTML =
      "C.ESCOBAR ARCHITECT";
    document.getElementById("body-work-Cescobar").innerHTML =
      'Architect / Portfolio<br><a href="https://www.ce-arq.xyz/index-ENG.html" target="_blank" class="text-body-secondary">Link</a>';
  } else if (idioma == "<h2>FAMILIA</h2>") {
    document.getElementById("boxFamily").src = "public/boxFamilyGbaEsp.png";
    document.getElementById("boxTech").src = "public/boxTechGbaEsp.png";
    document.getElementById("boxWork").src = "public/boxWorkGbaEsp.png";
    document.getElementById("boxAbout").src = "public/boxAboutGbaEsp.png";
    document.getElementById("boxContact").src = "public/boxContactGbaEsp.png";
    document.getElementById("buttonNext1").innerHTML = "1";
    document.getElementById("header-work-Cescobar").innerHTML =
      "C.ESCOBAR ARQUITECTO";
    document.getElementById("body-work-Cescobar").innerHTML =
      'Arquitecto / Portafolio<br><a href="https://www.ce-arq.xyz/index-ENG.html" target="_blank" class="text-body-secondary">Link</a>';
  }
}

function eng() {
  document.getElementById("eng").addEventListener("click", eng);
  version = document.getElementById("naroom").src;
  url = window.location.protocol + "//" + window.location.host + "/";
  // NAV
  document.getElementById("versionNav").innerHTML = "Version ";
  document.getElementById("languageNav").innerHTML = "Language ";
  // FAMILY
  document.getElementById("modal-header-family").innerHTML = "<h2>FAMILY</h2>";
  document.getElementById("card-footer-family").innerHTML =
    "Kenny, Andy and Polly";
  // TECH
  document.getElementById("modal-header-tech").innerHTML =
    "<h2>TECHNOLOGIES</h2>";
  // WORK
  document.getElementById("modal-header-work").innerHTML = "<h2>WORK</h2>";
  document.getElementById("buttonNext1").innerHTML = "1";
  document.getElementById("header-work-Cescobar").innerHTML =
    "C.ESCOBAR ARCHITECT";
  document.getElementById("body-work-Cescobar").innerHTML =
    'Architect / Portfolio<br><a href="https://www.ce-arq.xyz/index-ENG.html" target="_blank" class="text-body-secondary">Link</a>';
  // HOBBIES
  document.getElementById("modal-body-hobbies").innerHTML =
    '<h4>Music</h4><p>I also own and run a music studio called "Nuevos Amigos Estudios" and am a member of a band called "Guest House"<br><br><a class="text-body-secondary" href="https://www.linktr.ee/nuevosamigos" target="_blank">Nuevos Amigos Estudios</a><br><br><a class="text-body-secondary" href="https://www.guesthouse.com.mx" target="_blank">Guest House</a></p>';
  // ABOUT
  document.getElementById("modal-header-about").innerHTML = "<h2>SOBRE MÍ</h2>";
  document.getElementById("modal-body-about").innerHTML =
    "<h4>Hi! my name is Carlos</h4><p>and I am an experienced programmer with skills in both Frontend and Backend technologies such as React, JavaScript, PHP, jQuery, among others. I strive to maintain high standards of code quality and focus on meeting goals and deadlines. Working with me guarantees clear and efficient communication. Don't hesitate to contact me to discuss how I can assist you on your next project!</p>";
  // CONTACT
  document.getElementById("modal-header-contact").innerHTML =
    "<h2>CONTACT</h2>";
  document.getElementById("modal-body-contact").innerHTML =
    "<h4>GET IN TOUCH</h4><p>Name : Carlos Escobar<br>Email: Caec.dev@gmail.com<br>Phone: MX +52 6672 64 67 89</p>";
  if (version == url + "public/naroom-gb.png") {
    // FAMILY
    document.getElementById("boxFamily").src = "public/boxFamilyGb.png";
    // TECH
    document.getElementById("boxTech").src = "public/boxTechGb.png";
    // WORK
    document.getElementById("boxWork").src = "public/boxWorkGb.png";
    document.getElementById("workimg1").src = "public/work-cescobar-1-gb.png";
    document.getElementById("workimg2").src = "public/work-cescobar-2-gb.png";
    document.getElementById("workimg3").src = "public/work-cescobar-5-gb.png";
    // HOBBIES
    // ABOUT
    document.getElementById("boxAbout").src = "public/boxAboutGb.png";
    // CONTACT
    document.getElementById("boxContact").src = "public/boxContactGb.png";
  } else if (version == url + "public/naroom-gbc.png") {
    // FAMILY
    document.getElementById("boxFamily").src = "public/boxFamilyGbc.png";
    // TECH
    document.getElementById("boxTech").src = "public/boxTechGbc.png";
    // WORK
    document.getElementById("boxWork").src = "public/boxWorkGbc.png";
    document.getElementById("workimg1").src = "public/work-cescobar-1.jpg";
    document.getElementById("workimg2").src = "public/work-cescobar-2.jpg";
    document.getElementById("workimg3").src = "public/work-cescobar-5.jpg";
    // HOBBIES
    // ABOUT
    document.getElementById("boxAbout").src = "public/boxAboutGbc.png";
    // CONTACT
    document.getElementById("boxContact").src = "public/boxContactGbc.png";
  } else if (version == url + "public/naroom-gba.png") {
    // FAMILY
    document.getElementById("boxFamily").src = "public/boxFamilyGba.png";
    // TECH
    document.getElementById("boxTech").src = "public/boxTechGba.png";
    // WORK
    document.getElementById("boxWork").src = "public/boxWorkGba.png";
    document.getElementById("workimg1").src = "public/work-cescobar-1.jpg";
    document.getElementById("workimg2").src = "public/work-cescobar-2.jpg";
    document.getElementById("workimg3").src = "public/work-cescobar-5.jpg";
    // HOBBIES
    // ABOUT
    document.getElementById("boxAbout").src = "public/boxAboutGba.png";
    // CONTACT
    document.getElementById("boxContact").src = "public/boxContactGba.png";
  }
}

function esp() {
  document.getElementById("esp").addEventListener("click", esp);
  version = document.getElementById("naroom").src;
  url = window.location.protocol + "//" + window.location.host + "/";
  // NAV
  document.getElementById("versionNav").innerHTML = "Versión ";
  document.getElementById("languageNav").innerHTML = "Idioma ";
  // FAMILY
  document.getElementById("modal-header-family").innerHTML = "<h2>FAMILIA</h2>";
  document.getElementById("card-footer-family").innerHTML =
    "Kenny, Andy y Polly";
  // TECH
  document.getElementById("modal-header-tech").innerHTML =
    "<h2>TECNOLOGÍAS</h2>";
  // WORK
  document.getElementById("modal-header-work").innerHTML = "<h2>TRABAJO</h2>";
  document.getElementById("buttonNext1").innerHTML = "1";
  document.getElementById("header-work-Cescobar").innerHTML =
    "C.ESCOBAR ARQUITECTO";
  document.getElementById("body-work-Cescobar").innerHTML =
    'Arquitecto / Portafolio<br><a href="https://www.ce-arq.xyz/index-ENG.html" target="_blank" class="text-body-secondary">Link</a>';
  document.getElementById("workimg1").src = "public/work-cescobar-1-gb.png";
  document.getElementById("workimg2").src = "public/work-cescobar-2-gb.png";
  document.getElementById("workimg3").src = "public/work-cescobar-5-gb.png";
  // HOBBIES
  document.getElementById("modal-body-hobbies").innerHTML =
    '<h4>Música</h4><p>También soy dueño y dirijo un estudio de música llamado "Nuevos Amigos Estudios" y soy miembro de una banda llamada "Guest House"<br><br><a class="text-body-secondary" href="https://www.linktr.ee/nuevosamigos" target="_blank">Nuevos Amigos Estudios</a><br><br><a class="text-body-secondary" href="https://www.guesthouse.com.mx" target="_blank">Guest House</a></p>';
  // ABOUT
  document.getElementById("modal-header-about").innerHTML = "<h2>SOBRE MÍ</h2>";
  document.getElementById("modal-body-about").innerHTML =
    "<h4>¡Hola! soy Carlos</h4><p>y soy un programador experimentado con habilidades tanto en Frontend como Backend con tecnologías como React, JavaScript, PHP, jQuery entre otras. Me esfuerzo por mantener altos estándares de calidad de código y me enfoco en cumplir metas y plazos. Trabajar conmigo garantiza una comunicación clara y eficiente. ¡No dudes en contactarme para discutir cómo puedo ayudarte en tu próximo proyecto!</p>";
  // CONTACT
  document.getElementById("modal-header-contact").innerHTML =
    "<h2>CONTACTO</h2>";
  document.getElementById("modal-body-contact").innerHTML =
    "<h4>PONTE EN CONTACTO</h4><p>Nombre: Carlos Escobar<br>Correo: Caec.dev@gmail.com<br>Número: MX +52 6672 64 67 89</p>";
  if (version == url + "public/naroom-gb.png") {
    // FAMILY
    document.getElementById("boxFamily").src = "public/boxFamilyGbEsp.png";
    // TECH
    document.getElementById("boxTech").src = "public/boxTechGbEsp.png";
    // WORK
    document.getElementById("boxWork").src = "public/boxWorkGbEsp.png";
    document.getElementById("workimg1").src = "public/work-cescobar-1-gb.png";
    document.getElementById("workimg2").src = "public/work-cescobar-2-gb.png";
    document.getElementById("workimg3").src = "public/work-cescobar-5-gb.png";
    // HOBBIES
    // ABOUT
    document.getElementById("boxAbout").src = "public/boxAboutGbEsp.png";
    // CONTACT
    document.getElementById("boxContact").src = "public/boxContactGbEsp.png";
  } else if (version == url + "public/naroom-gbc.png") {
    // FAMILY
    document.getElementById("boxFamily").src = "public/boxFamilyGbcEsp.png";
    // TECH
    document.getElementById("boxTech").src = "public/boxTechGbcEsp.png";
    // WORK
    document.getElementById("boxWork").src = "public/boxWorkGbcEsp.png";
    document.getElementById("workimg1").src = "public/work-cescobar-1.jpg";
    document.getElementById("workimg2").src = "public/work-cescobar-2.jpg";
    document.getElementById("workimg3").src = "public/work-cescobar-5.jpg";
    // HOBBIES
    // ABOUT
    document.getElementById("boxAbout").src = "public/boxAboutGbcEsp.png";
    // CONTACT
    document.getElementById("boxContact").src = "public/boxContactGbcEsp.png";
  } else if (version == url + "public/naroom-gba.png") {
    // FAMILY
    document.getElementById("boxFamily").src = "public/boxFamilyGbaEsp.png";
    // TECH
    document.getElementById("boxTech").src = "public/boxTechGbaEsp.png";
    // WORK
    document.getElementById("boxWork").src = "public/boxWorkGbaEsp.png";
    document.getElementById("workimg1").src = "public/work-cescobar-1.jpg";
    document.getElementById("workimg2").src = "public/work-cescobar-2.jpg";
    document.getElementById("workimg3").src = "public/work-cescobar-5.jpg";
    // HOBBIES
    // ABOUT
    document.getElementById("boxAbout").src = "public/boxAboutGbaEsp.png";
    // CONTACT
    document.getElementById("boxContact").src = "public/boxContactGbaEsp.png";
  }
}
