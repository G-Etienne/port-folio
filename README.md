* Portefolio *

Ce projet est une création 100% personnelle.

Le site est construit à l'aide des technologies React.js et SASS. 

Il s'agit d'une reproduction d'un bureau en 3D qui (le footer fait office de bureau) et un écran fixé au mur virtuel distribue les différentes pages du site.

Chaque page du site est construite de manière un peu différente pour donner l'illusion que l'utilisateur se rend sur plusieurs sites (design) différents à travers le menu.

Des animations sont mises en place à différents endroits afin d'améliorer l'expérience utilisateur.

ARCHITECTURE : 

   - Un fichier "index.html" --> fichier html racine ou va venir ce greffer l'application React.js.

   - Un dossier "src" qui contient :
     
     - Un dossier "assets" --> les différentes images du site.
       
     - Un dossier "components" --> qui va contenir les différents composants du site.
       
     - Un dossier "contexts" --> avec les différents contexts du site ( la langue "anglais / français" et le thème "dark / light").
       
     - Un dossier "data" --> qui contient les fichiers JSON avec des données distribuer sur le site.
       
     - Un Dossier "page" --> avec les différentes pages du site.
       
     - Un dossier  "routes" --> avec un fichier pour définir les différentes routes nécessaires pour la navigation dans le site.
       
     - Un dossier "styles" qui contient :
       
         - Un dossier "base" --> les règles communes à tout le site.
         - Un dossier "components" --> qui contient les fichiers de style liés à certain composants du site avec leurs média queries.
         - un dossier "pages" --> pour les fichiers de style propre à une page.
         - Un dossier "utils" --> avec les fichiers qui contiennent les variables, maps, mixins et keyframes.
         - Un dossier "vendors" --> qui contient du code pour la normalisation des règles sur les navigateurs.
      
Chaque composant React est lié à un fichier de style pour simplifier la maintenabilité du code.
Le site n'est pas encore disponible mais le seras très prochainement.
