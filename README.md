# todo-js



# Todo list

L'objectif final de cette série de TD est de créer une application de gestion de tâches. Ce fil rouge vous permettra d'aborder les bases du Javascript.

## Principes généraux

1.  Les variables
2.  Les objets
3.  Les fonctions

Modifier le fichier src/todo.js pour :

1.  Déclarer une variable contenant la valeur "Faire mon CV" et l'afficher dans la console du navigateur.
2.  Créer une fonction qui prend comme argument le nom d'une tâche et l'affiche dans une boîte de dialogue.
3.  Afficher une boîte de dialogue qui demande à l'utilisateur le nom d'un tâche et transmettre cette valeur à la fonction précédente.
4.  Déclarer une class Task comprenant les propriétés suivantes : nom de la tâche, son statut (réalisé ou non) et sa priorité (valeur entier de 1 à 5).
5.  Créer un tableau contenant quatre objets de type Task dont les valeurs de priorité sont différentes.
6.  Afficher dans la console les noms des tâches contenues dans le tableau.
7.  Changer la valeur des deux tâches les plus urgentes (priorité > 4) en "réalisée"
8.  Afficher dans la console les titres des tâches non réalisées.

## Manipulation du DOM (sans JQuery !)
[Documentation](https://developer.mozilla.org/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Manipulating_documents)
1.  Créer un fichier todo.html avec un markup de base et contenant un formulaire de création d'une nouvelle tâche. Pointer cette page vers le fichier src/todo.js
2.  Faire que cliquer sur le bouton "créer" affiche les valeurs de la tâche dans un paragraphe sous le formulaire.
3.  Créer un tableau html qui sera rempli à chaque nouvelle tâche créée
4.  Ajouter un bouton en fin de ligne à chaque tâche, permettant de mettre cette tâche en "terminée".
5.  [Rendre l'interface réactive](https://css-tricks.com/reactive-uis-vanillajs-part-1-pure-functional-style/)

