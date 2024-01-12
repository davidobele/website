document.addEventListener('DOMContentLoaded', function () {

    var savedColorPreference = localStorage.getItem('colorPreference');
    var savedToggleState = localStorage.getItem('toggleState');

    if (savedColorPreference === 'light') {
        applyLightMode();
    } else {
        applyDarkMode();
    }

    var switchInput = document.querySelector('.switch input');
    switchInput.checked = savedToggleState === 'checked';
});

function visual() {
    var switchInput = document.querySelector('.switch input');

    if (switchInput.checked) {
        applyLightMode();
        localStorage.setItem('colorPreference', 'light');
        localStorage.setItem('toggleState', 'checked');
    } else {
        applyDarkMode();
        localStorage.setItem('colorPreference', 'dark');
        localStorage.setItem('toggleState', 'unchecked');
    }
}

function applyLightMode() {
    var body = document.body;
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
}

function applyDarkMode() {
    var body = document.body;
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
}

