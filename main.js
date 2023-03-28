fetch("http://localhost:3000/Shoes")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

card.querySelector('#delete').addEventListener('click', () => {
    card.remove()
    deleteShoe(shoe.id)
})
    
function deleteShoe(id){
    fetch(`http://localhost:3000/Shoes/${id}` ,{
        method:'DELETE',
        headers: {
            'Content-type':'application/json'
        }
    })
    .then(res => res.json())
    .then(animal => console.log(shoe))
}
