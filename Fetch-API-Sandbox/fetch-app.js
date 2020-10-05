document.getElementById('button1').addEventListener('click', getText); 

document.getElementById('button2').addEventListener('click', getJSON); 

function getText() {
   fetch('test.txt')
      .then(response => response.text())
      .then(data => {
         console.log(data);
         document.getElementById('output').innerHTML = data;
      })
      .catch(error => console.log(error));
}

// Get Local JSON Data
function getJSON() {
   fetch('posts.json')
      .then(response => response.json())
      .then(data => {
         console.log(data)

         let output = ''; 
         data.forEach(post => {
            output += `
            <li>${post.title}</li>
            <p>${post.body}</p>
            `
         })
         document.getElementById('output').innerHTML = output
      })
   .catch(error => console.log(error))
}