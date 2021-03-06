"use strict";

window.onload = function() {
  if (window.location.pathname === "/success") {
    setTimeout(function() {
      window.location = "/";
    }, 5000);
  } else {
    let links = document.querySelectorAll(".link");

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      links.forEach(x => {
        x.setAttribute("href", `#${x.getAttribute("data-name")}`);
      });
    } else {
      links.forEach(x => {
        x.addEventListener("click", function(e) {
          window.scroll({
            top: getElementOffSet(e.target.getAttribute("data-name")),
            behavior: "smooth"
          });

          function getElementOffSet(id) {
            let el = document.getElementById(id.toLowerCase());

            if (id === "contact") {
              let footer = document.querySelector("footer");
              window.scroll({
                top: footer.offsetTop,
                behavior: "smooth"
              });

              return false;
            } else {
              return el.offsetTop;
            }
          }
        });
      });
    }

    let menu = document.getElementById("menu");
    let dropdown = document.getElementById("dropdown");
    let dropdownItems = document.querySelectorAll(".dropdown-item");

    let dropdownlinks = document.querySelectorAll(".link");

    dropdownlinks.forEach(x => {
      x.addEventListener("click", function() {
        console.log(1);
        dropdown.classList.add("deanimate");
        dropdown.classList.remove("animate");
      });
    });

    window.onresize = function() {
      dropdown.classList.remove("animate");
    };

    menu.addEventListener("click", function() {
      dropdown.classList.toggle("animate");
    });

    let animation = obj => {
      let el = document.querySelectorAll(obj.elementClassOrId);
      let styleElement = () => {
        let styles = [
          {
            name: "slideLeft",
            transform: "translateX(-200px)",
            opacity: 0
          },
          {
            name: "slideRight",
            transform: "translateX(200px)",
            opacity: 0
          },
          {
            name: "fliptoX",
            opacity: 0
          },
          {
            name: "fadeIn",
            opacity: 0
          },
          {
            name: "slideUp",
            opacity: 0,
            transform: "translateY(200px)"
          }
        ];
        let found = styles.reduce((filtered, option) => {
          if (option.name.toLowerCase() === obj.styleName.toLowerCase()) {
            delete option.name;
            filtered.push(option);
          }
          return filtered;
        }, []);
        el.forEach(x => {
          Object.assign(x.style, found[0]);
        });
        animateElement();
      };
      let animateElement = e => {
        let animate = [
          {
            name: "slideLeft",
            transform: "translateY(0px)",
            opacity: 1
          }
        ];
        let windowHeight = window.innerHeight;
        let el = document.querySelectorAll(obj.elementClassOrId);
        el.forEach(x => {
          if (window.pageYOffset > obj.range - windowHeight + x.offsetTop) {
            x.classList.add("animate");
          }
        });
      };
      styleElement();
      window.addEventListener("scroll", animateElement);
    };
    if (window.innerWidth > 1200) {
      animation({
        styleName: "slideLeft",
        elementClassOrId: "#header-text",
        range: 700
      });
      animation({
        styleName: "slideLeft",
        elementClassOrId: ".bodytext-wrapper",
        range: 800
      });
      animation({
        styleName: "slideLeft",
        elementClassOrId: ".sectionTwoHeader",
        range: 1100
      });
      animation({
        styleName: "fliptoX",
        elementClassOrId: ".sectionTwoIcon",
        range: 1300
      });
      animation({
        styleName: "fadeIn",
        elementClassOrId: ".icon-paragraph",
        range: 1300
      });
      animation({
        styleName: "slideLeft",
        elementClassOrId: ".otherSkillsHeading",
        range: 1700
      });
      animation({
        styleName: "slideRight",
        elementClassOrId: ".skill-wrapper",
        range: 1700
      });
      animation({
        styleName: "slideRight",
        elementClassOrId: ".projectsheading",
        range: 2200
      });
      animation({
        styleName: "slideUp",
        elementClassOrId: ".project",
        range: 2500
      });
    }
    let button = document.getElementById("button");
    button.disabled = true;

    function nameValidation(obj) {
      let el = document.getElementById(obj.id);
      let error = document.getElementById("nameerror");
      el.addEventListener(obj.event, function(e) {
        if (!e.target.value.length) {
          error.style.display = "block";
          button.disabled = true;
        } else {
          error.style.display = "none";
          button.disabled = false;
        }
      });
    }
    nameValidation({
      id: "name",
      event: "blur"
    });
    nameValidation({
      id: "name",
      event: "keyup"
    });

    function emailValidation(obj) {
      let el = document.getElementById(obj.id);
      let error = document.getElementById("emailerror");
      el.addEventListener(obj.event, function(e) {
        if (!e.target.value.length) {
          error.style.display = "block";
          button.disabled = true;
        } else {
          error.style.display = "none";
          button.disabled = false;
        }
      });
    }
    emailValidation({
      id: "email",
      event: "keyup"
    });
    emailValidation({
      id: "email",
      event: "blur"
    });

    function messageValidation(obj) {
      let el = document.getElementById(obj.id);
      let error = document.getElementById("messageerror");

      el.addEventListener(obj.event, function(e) {
        if (!e.target.value.length) {
          error.style.display = "block";
          button.disabled = true;
        } else {
          error.style.display = "none";
          button.disabled = false;
        }
      });
    }
    messageValidation({
      id: "message",
      event: "blur"
    });
    messageValidation({
      id: "message",
      event: "keyup"
    });

    window.onscroll = function() {
      let float = document.getElementById("float");
      if (pageYOffset > 150) {
        float.style.opacity = 1;
      } else {
        float.style.opacity = 0;
      }
    };
  }
};
