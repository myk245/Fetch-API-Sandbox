document.getElementById('button1').addEventListener('click', getText); 

function getText() {
   fetch('test.txt')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.log(error))
}