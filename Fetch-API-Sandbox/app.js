getText = () => {
   fetch('test.txt')
      .then((resp) =>  {
      console.log(resp)
   })
}

document.getElementById('button1').addEventListener('click', getText); 