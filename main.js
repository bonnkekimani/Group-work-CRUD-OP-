fetch("http://localhost:3000/Shoes")
   .then (response => response.json())
   .then (data =>{
     for(let i=0;i<data.length;i++){
      let Name = data[i].name;
      let Brand = data[i].brand;
      let Price = data[i].price;
      let image = data[i].imageURL;
      document.querySelector(".Shoestore").innerHTML+=`
          <p>${Name}</p>
         <p>${Brand}</p>
         <p>${Price}</p>
         <img src='${image}'>
         `;
    }
    })
   
 const Delete= document.getElementById("deleteid");
 Delete.addEventListener("click", myFunction);
function myFunction(e) {
e.preventDefault();
    fetch("http://localhost:3000/Shoes/11", {
        method: "DELETE",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(myFunction),
    })
    .then(response=> response.json())
    .then(data =>console.log(data))
}