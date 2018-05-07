"use strict";


let dropdownlinks = document.querySelectorAll('.dropdownlinks');

dropdownlinks.forEach(x => {
    x.addEventListener('click', function() {
        dropdown.classList.add("deanimate");
        dropdown.classList.remove("animate")
    })
}) 
 
let menu = document.getElementById("menu");
let dropdown = document.getElementById("dropdown");
let dropdownItems = document.querySelectorAll(".dropdown-item");

window.onresize = function() {
    dropdown.classList.remove("deanimate");
    dropdown.classList.remove("animate")
};

menu.addEventListener("click", function() {
    if (dropdown.classList[1] === "animate") {
        dropdown.classList.add("deanimate");
        dropdown.classList.remove("animate")
    } else {
        dropdown.classList.add("animate");
        dropdown.classList.remove("deanimate")
    }
});

let animation = obj => {
    let el = document.querySelectorAll(obj.elementClassOrId);
    let styleElement = () => {
        let styles = [{
            name: "slideLeft",
            transform: "translateX(-200px)",
            opacity: 0
        }, {
            name: "slideRight",
            transform: "translateX(200px)",
            opacity: 0
        }, {
            name: "fliptoX",
            opacity: 0
        }, {
            name: "fadeIn",
            opacity: 0
        }, {
            name: "slideUp",
            opacity: 0,
            transform: "translateY(200px)"
        }];
        let found = styles.reduce((filtered, option) => {
            if (option.name.toLowerCase() === obj.styleName.toLowerCase()) {
                delete option.name;
                filtered.push(option)
            }
            return filtered
        }, []);
        el.forEach(x => {
            Object.assign(x.style, found[0])
        });
        animateElement()
    };
    let animateElement = e => {
        let animate = [{
            name: "slideLeft",
            transform: "translateY(0px)",
            opacity: 1
        }];
        let windowHeight = window.innerHeight;
        let el = document.querySelectorAll(obj.elementClassOrId);
        el.forEach(x => {
            if (window.pageYOffset > obj.range - windowHeight + x.offsetTop) {
                x.classList.add("animate")
            }
        })
    };
    styleElement();
    window.addEventListener("scroll", animateElement)
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
    })
}
let button = document.getElementById("button");

function nameValidation(obj) {
    let el = document.getElementById(obj.id);
    let error = document.getElementById("nameerror");
    el.addEventListener(obj.event, function(e) {
        if (!e.target.value.length) {
            error.style.display = "block";
            button.disabled = !0
        } else {
            error.style.display = "none";
            button.disabled = !1
        }
    })
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
            button.disabled = !0
        } else {
            error.style.display = "none";
            button.disabled = !1
        }
    })
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
            button.disabled = !0
        } else {
            error.style.display = "none";
            button.disabled = !1
        }
    })
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
        float.style.opacity = 1
    } else {
        float.style.opacity = 0
    }
}