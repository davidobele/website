document.addEventListener("DOMContentLoaded", function () {
    const savedPreference = localStorage.getItem("visualPreference");
    const toggleSwitch = document.querySelector('.switch input');

    if (savedPreference === "light") {
        applyLightMode();
    } else {
        applyDarkMode();
    }

    toggleSwitch.addEventListener('change', visual);

    function visual() {
        if (toggleSwitch.checked) {
            applyLightMode();
        } else {
            applyDarkMode();
        }
    }

    function applyLightMode() {
        document.documentElement.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.style.color = 'black';
            button.style.borderColor = 'black';
        });
    
        buttons.forEach(button => {
            button.addEventListener('mouseover', () => {
                button.style.backgroundColor = 'black';
                button.style.color = 'white';
                button.style.borderColor = 'white';
            });
    
            button.addEventListener('mouseout', () => {
                button.style.backgroundColor = 'transparent';
                button.style.color = 'black';
                button.style.borderColor = 'black';
            });
        });
    
        localStorage.setItem("visualPreference", "light");
    }
    
    function applyDarkMode() {
        document.documentElement.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.style.color = 'white';
            button.style.borderColor = 'white';
        });
    
        buttons.forEach(button => {
            button.addEventListener('mouseover', () => {
                button.style.backgroundColor = 'white';
                button.style.color = 'black';
                button.style.borderColor = 'black';
            });
    
            button.addEventListener('mouseout', () => {
                button.style.backgroundColor = 'transparent';
                button.style.color = 'white';
                button.style.borderColor = 'white';
            });
        });
    
        localStorage.setItem("visualPreference", "dark");
    }    
});

