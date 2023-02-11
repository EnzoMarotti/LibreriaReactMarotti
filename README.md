Proyecto React CoderHouse.

Le adjunto el Drive donde está subido el video de la navegación del sitio:
https://drive.google.com/drive/folders/1pLSfrjXXkcfe_TOXG9tJ68znknHXXWEh?usp=sharing

El proyecto consiste en un E-commerce sobre bebidas alcoholicas, enfocada principalmente en distintas variedades de Cerveza, a la cual se le suman 3 estilos particulares de Gin.

A grandes rasgos, la pagina cuenta con un Home en el cual se muestran todos los productos, seguido de 2 categorias correspondientes a "cervezas" y "gin".

El navbar ademas presenta un cardwidget el cual al clickear, nos envía a la seccion de Cart para nosotros comenzar la compra.


Empezando desde la base, tenemos el archivo "item" el cual contiene toda la estructura de cada "card" del item.

Luego, "itemList" tiene el proposito de armar las listas de productos mediante un map.

Dentro de "ItemListContainer" tenemos gran parte de la Lógica del sitio. A grandes rasgos, genera una lista de productos dinámicos, llamando a los items que hay dentro de Firestore escuchando los cambios que ocurran en relación al parámetro de la "categoria", generando un filtro entre las mismas según el valor que tenga cada producto en "categorias".

Después tenemos un "ItemDetailContainer" e "itemDetail" que es el detalle de cada producto. En resumen trae la información de algun producto que seleccionemos. Esta pagina va a contener una imagen del producto, descripción, precio, stock, la posibilidad de elegir la cantidad de unidades de ese producto que querramos. Un botón de agregarlo al carrito y una vez agregado, la posibilidad de ir al carrito mediante un link de "terminar compra", para esto se utilizó un ternario.

"ItemCart" tiene la estructura que va a componer cada item agregado al carrito sumado a un contexto "removeProduct" que nos permite eliminar algun elemento del carrito que ya no se desee.

"Cart" presenta la lógica de que se muestra en el carrito. Tenemos 2 posibles opciones que dependen si hay elementos en el carrito o no. Si no hay elementos, nos dirá que el carrito está vacío y nos proporciona un link al "/home" par invitarnos a comprar.
Cuando hay elementos dentro del carrito, se renderizan los elementos de "ItemCart", junto al precio final que proviene del CartContext.
Sumado a esto tenemos un formulario que al completarlo envía la información a Firebase.



En resumen, creo que se logró lo se buscaba en cuanto a la funcionalidad de la página, todo lo propuesto funciona sin errores. El código quizás se pueda optimizar todavia un poco más pero creo que está bastante bien logrado. 


