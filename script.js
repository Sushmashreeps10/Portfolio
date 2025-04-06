function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

function accessDenied() {
    alert('Access Denied!');
}

document.addEventListener('DOMContentLoaded', function() {
    showPage('home'); // Show home page by default
});