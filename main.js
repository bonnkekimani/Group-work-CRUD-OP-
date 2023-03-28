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
    // Post f
    const form = document.querySelector('#shoe-form');
 console.log(form);
 form.addEventListener('submit',handlesubmit);
 function handlesubmit(e){
    e.preventDefault()
    let shoeObj= {
        name:e.target.name.value,
        brand:e.target.brand.value,
        imageURL:e.target.image.value,
        price:e.target.price.value,
    }
    console.log("hrtr");
    submit(shoeObj)
 }
 function submit(shoeObj) {
    fetch("http://localhost:3000/Shoes",{
     method:'POST',
     headers: {
        "Content-Type": "application/json"
     },
      body: JSON.stringify(shoeObj),
 })
 .then (response => response.json())
 .then (data => console.log(data))
 }

   //Delete f
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


