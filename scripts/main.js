function myFunction() {
    var x = document.getElementById('welcome');
    var y = document.getElementById('sidebarwidget');
    if (x.style.display === 'none' && y.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'block';
    } else {
        x.style.display = 'none';
        y.style.display = 'none';
    }
}
