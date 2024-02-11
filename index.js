// script.js

// Open compose email popup
document.getElementById('compose').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

// Close compose email popup
document.getElementById('close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
