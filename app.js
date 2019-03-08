$(()=>{


/*var off = document.getElementById('Phones');
off.style.display= 'block';*/

/* ------ This code to show the right sections*/

$('.Element').children().addClass('hidden');

$('.But-El').click(()=>{
    //$('.Element').children().addClass('hidden');
    document.getElementById("Electronics").classList.toggle('hidden');
});
$('.But-Sp').click(()=>{
    //$('.Sports').children().addClass('hidden');
    document.getElementById("Sports").classList.toggle('hidden');
});
$('.But-To').click(()=>{
    //$('.Toys').children().addClass('hidden');
    document.getElementById("Toys").classList.toggle('hidden');
});
$('.But-Ph').click(()=>{
    //$('.Toys').children().addClass('hidden');
    document.getElementById("Phones").classList.toggle('hidden');
});
$('.But-Cl').click(()=>{
    //$('.Toys').children().addClass('hidden');
    document.getElementById("Clothes").classList.toggle('hidden');
});
$('.But-Al').click(()=>{
    //$('.Toys').children().addClass('hidden');
    document.getElementById("Clothes").classList.toggle('hidden');
    document.getElementById("Phones").classList.toggle('hidden');
    document.getElementById("Toys").classList.toggle('hidden');
    document.getElementById("Electronics").classList.toggle('hidden');
    document.getElementById("Sports").classList.toggle('hidden');
});


// this part of code to make the photo automatic
const Sports =[
    { name: 'Camera', price: 755, id: 1, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 2, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 3, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 4, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 5, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 6, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 7, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 8, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 9, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
];
const Clothes =[
    { name: 'Camera', price: 755, id: 11, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 12, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 13, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 14, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 15, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 16, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 17, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 18, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 19, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
];
const Phones =[
    { name: 'Camera', price: 755, id: 21, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=0', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 22, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=0', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 23, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=0', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 24, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=0', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 25, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=0', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 26, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=0', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 27, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=0', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 28, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=0', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 29, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=0', category: 'Elektronik' },
];
const Electric =[
    { name: 'Camera', price: 755, id: 31, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=0', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 32, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=0', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 33, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 34, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 35, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 36, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 37, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 38, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 39, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
];
const Toys =[
    { name: 'Camera', price: 755, id: 41, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 42, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 43, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 44, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 45, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 46, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 47, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 48, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
    { name: 'Camera', price: 755, id: 49, description: 'Lorem ipsum dolor sit similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
];


Number = 0; 
const SportPro = (Array, location)=>{
    let item = Array[Number];
    Number++;
    let item1 = Array[Number];
    Number++;
    let item2 = Array[Number];
    Number++;

    const book = `
    <div class="row">
    
    <div class="col-sm-4 Product1">
      <div class= "Main-Pro">
      <div class="container">
            <img src ="${item.picture}" alt = ${item.description} class="image">
            <div class="middle">
                <p class="text">${item.description} </p>
            </div> 
        </div>
        <p class= "ProName"> ${item.name} <small class ="SmallFont" >${item.price} kr</small>  </p>
        <button type = "button" id= "${item.id}" > Köp NU! </button>
     
    </div>
     </div>

     <div class="col-sm-4 Product1">
     <div class= "Main-Pro">
     <div class="container">
           <img src ="${item1.picture}" alt = ${item1.description} class="image">
           <div class="middle">
               <p class="text">${item1.description} </p>
           </div> 
       </div>
       <p class= "ProName"> ${item1.name} <small class ="SmallFont" >${item1.price} kr</small>  </p>
       <button type = "button" id= "${item1.id}" > Köp NU! </button>
    
   </div>
    </div>

    <div class="col-sm-4 Product1">
      <div class= "Main-Pro">
      <div class="container">
            <img src ="${item2.picture}" alt = ${item2.description} class="image">
            <div class="middle">
                <p class="text">${item2.description} </p>
            </div> 
        </div>
        <p class= "ProName"> ${item2.name} <small class ="SmallFont" >${item2.price} kr</small>  </p>
        <button type = "button" id= "${item2.id}" > Köp NU! </button>
     
    </div>
     </div>
  
  </div>`

$(location).append(book);

};
// This for lopp is to creat the right numbers of Rows 
for (var i in Sports ){

    if(Number<Sports.length ){
     
      SportPro( Sports, $('.Sports'));
     }else{
       break;
     };
  
  };
  Number = 0;

  for (var i in Clothes ){

    if(Number<Sports.length ){
     
      SportPro( Clothes, $('.Clothes'));
     }else{
       break;
     };
  
  };
  Number = 0;

  for (var i in Phones ){

    if(Number<Sports.length ){
     
      SportPro( Phones, $('.Phones'));
     }else{
       break;
     };
  
  };
  Number = 0;

  for (var i in Toys ){

    if(Number<Sports.length ){
     
      SportPro( Toys, $('.Toys'));
     }else{
       break;
     };
  
  };
  Number = 0;

  for (var i in Electric ){

    if(Number<Sports.length ){
     
      SportPro( Electric, $('.Electronics'));
     }else{
       break;
     };
  
  };
  Number = 0;

 
  const addToCard = (array, id, location) => {
    let a = array.find(i => i.id === id); 
    //console.log(a);
    const item =`       
        <li class="item" id="${a.id}">
            <h4 class = "name1">${a.name} <small> ${a.price} kr</small></h4>
            <button type="button">x</button>
        </li>
    `;
    $(location).append(item);
}

    $('.Main-Pro').on('click', 'button', (e) => {
let Ammar = e.currentTarget.id;
//console.log(Ammar);
addToCard(Electric, +Ammar, $('.buy-list'));
});

$('.buy-list').on('click', 'button', e => {
    let item = $(e.currentTarget)
      .closest('li')
      .remove();
  });



});