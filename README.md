# CifrApp

## Índice

* [Preámbulo](#preámbulo)
* [Resúmen del proyecto](#resúmen-del-proyecto)
* [Url Página web](#link)
* [Historias de usuarios](#historias-de-usuarios)
* [Modo de uso](#modo-de-uso)
* [Diseño de la Interfaz del usuario](#Consideraciones-para-el-diseño-de-la-interfaz-del-usuario)
* [Implementación de la Interfaz del usuario](#Implementación-de-la-Interfaz-del-usuario)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Planificación](#planificación)
* [Resultado final](#resultado-final)

***

## Preámbulo

Cifrar significa codificar.
En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Resúmen del proyecto
Esta App utiliza el método de [cifrado César](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar), que es una de las técnicas más simples para cifrar un mensaje. Fue uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.
Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.
Por ejemplo, si usamos un desplazamiento (offset) de 3 posiciones:
La letra A se cifra como D.
La palabra CASA se cifra como FDVD.
Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
Podrás crear claves de acceso para tus documentos importantes, y también por qué no, codificar los nombres de tus clientes y lugares de encuentro de los cuales sólo tú tendrás conocimiento esa información.

## Esta página web es posible visualizarla en el siguiente [link](https://danielaestrada.github.io/SCL008-Cipher/src/index.html)

## Historias de usuarios

### Usuario 1: 
Como joven que utiliza RRSS.
Quiero tener diferentes claves para cada red social que utilizo.
Para impedir que otros accedan a mi contenido personal y privado.

Criterios de aceptación:
-Visualización amigable y juvenil.
-De acceso rápido y fácil.
-Ingresar una palabra y poder codificarla.
-Elegir un parámetro secreto (indicador que sólo yo conozco). Número para que sea más fácil de recordar.
-Mostrar la palabra codificada (resultado).

### Usuario 2:
Como Empresario.
Quiero crear diferentes claves de acceso para mis diferentes cuentas bancarias.
Para impedir el acceso a mis cuentas bancarias.

Criterios de aceptación:
-Visualización simple.
-De acceso rápido y fácil.
-Ingresar un número y poder codificarlo.
-Elegir un parámetro secreto (indicador que sólo yo conozco). Número para que sea más fácil de recordar.
-Mostrar el número codificado (resultado).

### Usuario 3:
Como cualquier usuario.
Quiero crear un texto secreto.
Para que otros no conozcan el contenido de lo que escribo.

Criterios de aceptación:
-Visualización simple.
-De acceso rápido y fácil.
-Ingresar un texto y poder codificarlo.
-Elegir un parámetro secreto (indicador que sólo yo conozco). Número para que sea más fácil de recordar.
-Mostrar el texto codificado (resultado).


## Modo de uso

Primero es recomendable leer las instrucciones de uso. 

Para comenzar, primero es necesario seleccionar un N° secreto (parámetro desde el cual se realizará el cálculo de cifrado/descifrado). Luego, escribir en la caja de texto. Y para finalizar, es necesario presionar el botón “cifrar” o “descifrar” para poder ver el resultado en la segunda caja de texto.


## Consideraciones para el diseño de la interfaz del usuario

Esta página se compone de un único módulo:

 - Título. 
 - Barra de navegación con información útil para utilizar la App:
   - Botón "Funcionamiento".
   - Botón "Instrucciones de uso".
 - Seleccionador del paŕametro secreto (offset).
 - Caja de texto 1: Para ingresar lo que quiero cifrar.
 - Botón 1 (cifrar) y botón 2 (descifrar).
 - Caja de texto 2: Muestra el resultado cifrado o descifrado.

Una vez creado el diseño se realiza el primer testeo.

#### Prototipo de baja fidelidad


#### Testeos de usabilidad

Se realiza pruebas con 4 usuarios.

Usuario1: Solicita agregar información acerca del método de cifrado.

Usuario2: No tiene claro si puede utilizar símbolos.

Entonces, procedemos a realizar las modificaciones correspondientes con las sugerencias de los usuarios testeados, y los cambios generados son los siguientes:

 - Se agrega un link de interés (Código César en Wikipedia) en el modal de "Funcionamiento".
 - Se modifican las Instrucciones de uso indicando el modo en el que se debe ingresar el mensaje y sus respectivas restricciones (utilizar sólo el alfabeto simple, sin “Ñ”).

## Implementación de la Interfaz de Usuario (HTML/CSS/JS)

La interfaz permite al usuario:
Elegir un desplazamiento (offset) indicando cuántas posiciones queremos que el cifrado desplace cada carácter.
Insertar un mensaje (texto) que queremos cifrar.
Ver el resultado del mensaje cifrado.
Insertar un mensaje (texto) a descifrar.
Ver el resultado del mensaje descifrado.
Se puede visualizar sin problemas desde distintos tamaños de pantallas: móviles,
tablets y desktops.


## Consideraciones técnicas

La lógica del proyecto está implementada completamente en JavaScript(ES6), HTML y CSS.   


## Resúmen del código

El código creado es una fórmula que permite cifrar y descifrar. Programado con JavaScript y utilizando un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.


## Planificación

Es posible ver la planificación del proyecto en el siguiente [Trello:](https://trello.com/b/SHwFc1NN)


## Resultado final




