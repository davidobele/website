window.onload = function() {
    const theme = localStorage.getItem('theme');
    const toggleSwitch = document.querySelector('.switch input');
    
    if (theme === 'light') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.querySelectorAll('i').forEach(icon => icon.style.color = 'black');
        toggleSwitch.checked = true; 
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.querySelectorAll('i').forEach(icon => icon.style.color = 'white');
        toggleSwitch.checked = false; 
    }
};

function visual() {
    const toggleSwitch = document.querySelector('.switch input');
    const isLightMode = document.body.style.backgroundColor === 'white';
    
    if (isLightMode) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.querySelectorAll('i').forEach(icon => icon.style.color = 'white');
        localStorage.setItem('theme', 'dark');
        toggleSwitch.checked = false; 
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.querySelectorAll('i').forEach(icon => icon.style.color = 'black');
        localStorage.setItem('theme', 'light');
        toggleSwitch.checked = true;
    }
}