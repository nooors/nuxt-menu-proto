## Concepte

Aquesta app vol ser una part de dues (un front-office i un back-office) d'un site que dona visibilitat a restaurants.
La part back-office, aquesta app, controla una base de dades servida per una API mitjançant end-points per tal de poder fer un CRUD de totes les seves taules.
FAMILIES, DEPARTMENTS i PRODUCT TYPES són les "propietats" dels PRODUCTS. Aquesta taula engloba la totalitat dels productes que es vénen en el resturant.
Una part dels PRODUCTS (la que ens interesa) la formen els plats. Ordenats en FAMILIES (Amanides, Pastes...), PRODUCT TYPES (Entrants, principals) i DEPARTMENTS(Carta, Menú Semanal...) ens permenten seleccionar-los per a construir un menú diari, o semanal, una carta, suggerencies etc.

## Usuaris

Hi han dos tipus d'usuaris del back-office.
L'User, que té capacitat per treballar amb les taules de la DB, es a dir llegir, crear, mofificar i esborrar DEPARTMENTS, FAMILIES, PRODUCT TYPES i organitzar menús.
L'Admin, que té els mateixos privilegis i a més pot donar d'alta usuaris, modificar les seves dades (menys l'email que és inmutable) i assignar els rols.

## Limitacions

Totes les taules de la DB estan conectades a través de foreign keys i restriccions d'integritat, per tant si intentem esborrar algun camp, per exemple de DEPARTMENTS que tingui registres conectats amb altres taules, l'API no ens deixarà.

## Accés.

Qualsevol usuari té accés a la pàgina de portada.
Per accedir a la app, l'usuari s'ha d'identificar.
Si s'intenta accedir a l'app sesnse estar "logejat" l'app adreça a la pàgina de login.
L'autentificació de les dades es fan mitjançant una crida a l'API que te enregistrades les dades dels usuaris.
Si l'API respon amb un ok, torna un token.
Aquest token deserialitzat informa al frontend del userName (email) el rol i la caducitat del mateix token.
El frontend emmagatzema el token al LOCALSTORAGE.
Quan l'usuari fa LOG OUT, l'app esborra el contingut del LOCALSTORAGE.
Si l'usuari no s'ha deslogat i el token no ha caducat, l'APP entèn que es el mateix usuari de la darrera sessió i permet l'accés.
Si un usuari no té privilegis per a certa part de l'APP, directament no se li mostraran les opcions que te fora de l'abast de la seva acreditació.

## Usuaris.

Tots els usuaris de la llista estan habilitats. Jo conec i he fet probes sobre dos d'ells.
ADMINISTRADOR: user name: nooors@gmail.con
password: N000rs123!!

USER: user name: prueba@prueba.com
password: N000rs123!!

## Parts consolidades

PRODUCT TYPES, FAMILIES, DEPARTMENTS I PRODUCTES permeten fer un CRUD senscer. USERS no es poden esborrar (en un futur es podran desactivar - el backend no te desenvolupada aquesta funcionalitat encara).

## Parts simulades

La secció DAILY-MENU. Donada l'urgència de l'entrega està simulat. En comprtes de fer la crida http a l'API, treu les dades d'un arxiu JSON de la carpeta UTILS. Encara així es pot veuere un document en el que es pot sel.leccionar l'idioma del menú i que seria perfectament vàlid per a imprimir.
