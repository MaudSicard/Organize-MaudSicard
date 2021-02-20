# Démarche du projet

J'ai créer cette todolist suite à l'apprentissage des framework en formation. 
Nous avons travaillé à partir de Lumen, j'ai voulu reprendre ce framework pour m'entraîner.


## Objectfifs

- Utiliser le framework Lumen
- Créer une todolist simple (titre, catégorie, description, une image) et sympa
- Afficher toutes les catégories, ou certaines catégories
- Passer les cartes en archive ou les changer de catégorie
- Ajouter une nouvelle carte
  
Le numéro demandé à l'utilisateur sert à générer une image aléatoire à partir d'une api sur les aniimaux (les renards).
L'idée était d'animer un peu la todolist avec des images et d'utiliser une API.

## Techno utilisées

HTML, CSS (Bootstrap), JS, Ajax, PHP, Lumen, mySQL

## Difficultés rencontrées et améliorations

- Ajout de fonction notamment la fonction delete pour supprimer un élément de la base. Sur le principe, j'ai préféré ne pas ajouter cette fonction de manière à laisser une trace de toutes les cartes en base
- Envoyer un message à l'utilisateur s'il ne remplit pas correctement le formulaire d'ajout pour mieux le guider (ici juste un message si l'ajout en base n'a pas été effectué)
- Factoriser encore le JS
- Ajouter d'autres possibilités pour l'image des cartes, en travaillant avec d'autres API
- Complexifier les cartes en ajoutant des éléments de date, ,...  
