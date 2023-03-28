function deleteShoe(id){
    fetch(`http://localhost:3000/Shoes/${id}` ,{
        method:'DELETE'
        
    })
    .then(res => res.json())
    .then(animal => console.log(shoe))
}