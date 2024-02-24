document.getElementById('changeColorBtn').addEventListener('click', function() {
  
    let color = document.getElementById('colorInput').value;
    document.body.style.backgroundColor = color;

});