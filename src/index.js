document.getElementById("cipher1").addEventListener("click",() =>{

//Guardar valores de los input
let str = document.getElementById("input-str").value;
 //Guardar en resultado todo el contenido de cipher
 let offset = parseInt(document.getElementById("offset").value);
 let resultado1 = cipher.encode(str, offset);
 //Reemplazar mi parrafo vacio por resultado
 document.getElementById("frase-cifrada").value = resultado1;
});

document.getElementById("cipher2").addEventListener("click",(event) =>{

	event.preventDefault();
	let str = document.getElementById("input-str").value;
 //Guardar en resultado todo el contenido de cipher
 let offset = parseInt(document.getElementById("offset").value);
 let resultado2 = cipher.decode(str, offset);
 //Reemplazar mi parrafo vacio por resultado
 document.getElementById("frase-cifrada").value = resultado2;
});