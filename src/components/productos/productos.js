

const Products = [
    {id: 1,name: "IPA",img:"https://www.cocinista.es/download/bancorecursos/recetas/receta-cerveza-ipa-imperial.jpg", categoria:'Cervezas',precio: 19.99,stock:10,descripcion:'cerveza IPA lorem'},
    {id: 2,name: "APA",img:"https://recetasdecerveza.net/wp-content/uploads/2018/07/Recetas-de-American-Pale-Ale.jpg", categoria:'Cervezas',precio: 29.99,stock:10,descripcion:'cerveza APA lorem'},
    {id: 3,name: "Scotish",img:"https://recetasdecerveza.net/wp-content/uploads/2018/07/Recetas-de-Scottish-Heavy.jpg", categoria:'Cervezas',precio: 39.99,stock:10,descripcion:'cerveza Schotish lorem'},
    {id: 4,name: "Porter",img:"https://media.istockphoto.com/id/910481830/es/foto/vaso-de-cerveza-oscuro.jpg?s=612x612&w=0&k=20&c=vLDkHNtVvAjWkvEaOM5OOhMHszn4FCupLSaDoTE69LA=", categoria:'Cervezas',precio: 49.99,stock:10,descripcion:'cerveza Porter lorem'},
    {id: 5,name: "Stout",img:"https://f7z3b4v3.rocketcdn.me/wp-content/uploads/2020/11/Celebramos-el-International-Stout-Day-cerveza-loopulo-04.jpg", categoria:'Cervezas',precio: 49.99,stock:10,descripcion:'cerveza Stout lorem'},
    {id: 6,name: "SessionIPA",img:"https://recetasdecerveza.net/wp-content/uploads/2018/07/Recetas-de-Saison-1.jpg", categoria:'Cervezas',precio: 49.99,stock:10,descripcion:'cerveza sessionIPA lorem'},
    {id: 7,name: "Gin Heredero",img:"https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/325196976_834065504348816_8973488655153320710_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=tqesHNK0GtkAX8CMExd&_nc_ht=scontent.fcor10-3.fna&oh=00_AfBiFQ1bZIRnMxffYCF0oNkTttdzsBejWa2hX3vCQ_E1qw&oe=63CE3C5D",categoria:'Gin', precio: 49.99,stock:10,descripcion:'Gin Heredero lorem'},
    {id: 8,name: "Gin Sur",img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/002/101/277/products/vaso_sur1-721564ba282bfdd22d16486565750286-1024-1024.jpg",categoria:'Gin', precio: 49.99,stock:10,descripcion:'Gin Sur  lorem'},
    {id: 9,name: "Gin Kalmar",img:"https://d2j6dbq0eux0bg.cloudfront.net/images/61111934/2325131401.jpg", categoria:'Gin',precio: 49.99,stock:10,descripcion:'Gin Kalmar lorem'}
  ];

const getProducts = new Promise ((resolve,reject) => {
    setTimeout(()=> {
        resolve(Products);
    },1000) 
});


export default getProducts

