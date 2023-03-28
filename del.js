fetch("http://localhost:3000/Shoes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

shoe.querySelector('Delete').addEventListener('click', () => {
    shoe.remove()
    deleteShoe(shoe.id)
})

function deleteShoe(id){
    fetch(`http://localhost:3000/Shoes/${id}` ,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(animal => console.log(shoe))
}

function renderShoe(id){
    let deleteShoe = document.createElement("button")
      deleteShoe.setAttribute('id', 'delete-btn')
      deleteShoe.innerText = "delete listing"
      deleteShoe.addEventListener("click", function(event) {
      
      
        console.log(" ", shoe.id)
      
      if (event.shoe.id === 'delete-btn') {
        fetch(`http://localhost:3000/Shoes/${shoe.id}`, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then(() => {
          shoe.innerHTML = "";
          const shoe = shoe.querySelector(`[data-id='${shoe.id}']`);
          shoe.remove();
          deleteShoe(shoe.id)
      })
      
      function deleteShoe(id){
        fetch(`http://localhost:3000/Shoes/${id}` ,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(shoe => console.log(shoe))
      }
      }
    })
  }