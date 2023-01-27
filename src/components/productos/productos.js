

const Products = [
    {id: 1,name: "IPA",img:"https://www.cocinista.es/download/bancorecursos/recetas/receta-cerveza-ipa-imperial.jpg", categoria:'Cervezas',precio: 19.99,stock:10,descripcion:'IPA (India Pale Ale) es un estilo de cerveza conocido por su alto contenido de lúpulo y sabor amargo. El lúpulo utilizado en esta cerveza le da un aroma y sabor característico a cítricos y resina. Además, suele tener una graduación alcohólica más alta que otras cervezas debido al mayor volumen de lúpulo utilizado en la elaboración. Es una cerveza ideal para aquellos amantes de los sabores más intensos y amargos.'},
    {id: 2,name: "APA",img:"https://recetasdecerveza.net/wp-content/uploads/2018/07/Recetas-de-American-Pale-Ale.jpg", categoria:'Cervezas',precio: 29.99,stock:10,descripcion:'APA (American Pale Ale) es un estilo de cerveza caracterizado por su uso de lúpulos americanos, que aportan un aroma y sabor distintivo afrutado y floral. Estos lúpulos le dan un sabor más suave y menos amargo que las IPA, y suelen tener un contenido alcohólico moderado. Es una cerveza ideal para aquellos que buscan un sabor lupulado pero más equilibrado.'},
    {id: 3,name: "Scotish",img:"https://recetasdecerveza.net/wp-content/uploads/2018/07/Recetas-de-Scottish-Heavy.jpg", categoria:'Cervezas',precio: 39.99,stock:10,descripcion:'Scotish, es un tipo de cerveza que se caracteriza por su dulzura maltosa y baja amargura de lúpulo, tradicionalmente se considera de un bajo contenido de alcohol (entre 4-6%) y presenta un color rojizo característico. El sabor a malta es muy presente en esta cerveza, le da un sabor a caramelo y pan tostado, es ideal para aquellos que buscan una cerveza con un sabor más suave y menos amargo. A menudo se describe como una cerveza "cálida" debido a su sabor a malta y su bajo contenido de alcohol.'},
    {id: 4,name: "Porter",img:"https://www.cocinista.es/download/bancorecursos/recetas/receta-cerveza-todo-grano-stout-dulce.jpg", categoria:'Cervezas',precio: 49.99,stock:10,descripcion:'Porter es un estilo de cerveza oscura que se caracteriza por su rico sabor y aroma a malta tostada. Porters son tradicionalmente de bajo contenido alcohólico y tienen una textura suave y cremosa. El sabor a malta tostada es muy presente en esta cerveza, le da un sabor a chocolate, café y caramelo. Es ideal para aquellos que buscan una cerveza con un sabor intenso pero suave al mismo tiempo.'},
    {id: 5,name: "Stout",img:"https://f7z3b4v3.rocketcdn.me/wp-content/uploads/2020/11/Celebramos-el-International-Stout-Day-cerveza-loopulo-04.jpg", categoria:'Cervezas',precio: 49.99,stock:10,descripcion:'Stout es un estilo de cerveza oscura que se caracteriza por su intensa tostada y cuerpo completo. Stouts suelen elaborarse con maltas oscuras tostadas, lo que les da su característico color oscuro y sabor rico y complejo. El sabor a malta tostada es muy presente en esta cerveza, le da un sabor a chocolate, café y caramelo. Es ideal para aquellos que buscan una cerveza con un sabor intenso y potente.'},
    {id: 6,name: "SessionIPA",img:"https://recetasdecerveza.net/wp-content/uploads/2018/07/Recetas-de-Saison-1.jpg", categoria:'Cervezas',precio: 49.99,stock:10,descripcion:'Session IPA es un estilo de IPA que se caracteriza por su contenido alcohólico más bajo, generalmente alrededor de 4-5%. Este estilo está diseñado para ser más fácil de beber y refrescante que las IPAs regulares, mientras mantiene el carácter y sabor lupulado de una IPA tradicional.'},
    {id: 7,name: "Gin Heredero",img:"https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/325196976_834065504348816_8973488655153320710_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=tqesHNK0GtkAX8CMExd&_nc_ht=scontent.fcor10-3.fna&oh=00_AfBiFQ1bZIRnMxffYCF0oNkTttdzsBejWa2hX3vCQ_E1qw&oe=63CE3C5D",categoria:'Gin', precio: 49.99,stock:10,descripcion:'Gin Heredero es un gin premium que se caracteriza por su sabor equilibrado y suave, con notas de cítricos y especias. Es elaborado con una selección cuidadosa de botánicos y destilado con un método tradicional. Este gin es ideal para disfrutarlo solo con hielo o en cocteles clásicos como el Martini o el G&T.'},
    {id: 8,name: "Gin Sur",img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/002/101/277/products/vaso_sur1-721564ba282bfdd22d16486565750286-1024-1024.jpg",categoria:'Gin', precio: 49.99,stock:10,descripcion:'Gin Sur es un gin artesanal que se destaca por su sabor fresco y afrutado, con notas de frutas tropicales y hierbas. Este gin es elaborado con ingredientes orgánicos y destilado con un método innovador que le da una personalidad única. Es ideal para disfrutarlo en cocteles con tonos cítricos y refrescantes.'},
    {id: 9,name: "Gin Kalmar",img:"https://d2j6dbq0eux0bg.cloudfront.net/images/61111934/2325131401.jpg", categoria:'Gin',precio: 49.99,stock:10,descripcion:'Gin Kalmar es un gin de edición limitada que se caracteriza por su sabor complejo y potente, con notas de cítricos, especias y hierbas. Es elaborado con una selección de botánicos raros y destilado con un método tradicional. Este gin es ideal para disfrutarlo solo con hielo o en cocteles elaborados. Ideal para los amantes de los gin más potentes y complejos.'}
  ];


//Promesa que se encarga de 

const getProducts = new Promise ((resolve,reject) => {
    setTimeout(()=> {
        resolve(Products);
    },1000) 
});


export default getProducts

