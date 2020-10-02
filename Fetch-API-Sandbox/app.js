const table = document.getElementById('results')
const button = document.getElementById('get_users')

function fetchUsers() {
   table.innerHTML = ''

   fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(user => user.forEach(getUserInfo))
}

function getUserInfo(user) {
   let name = user.name
   let phone = user.phone

   let row = table.insertRow(0);
   row.innerText = "Name: " + `${name}` + " " + "Phone: " + `${phone}`

   //   console.log(user.name)
   //   console.log(user.phone)
}

button.addEventListener('click', fetchUsers)