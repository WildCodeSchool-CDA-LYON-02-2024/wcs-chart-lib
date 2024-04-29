# Wild Chart School

[![English Version](https://img.shields.io/badge/Version-English-blue)](#english-version)
[![Version Française](https://img.shields.io/badge/Version-Française-red)](#french-version)

[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Version](https://img.shields.io/badge/Version-0.0.1-brightgreen)](#)
[![Language](https://img.shields.io/badge/Language-JavaScript-green)](#)
[![Maintained with Node.js](https://img.shields.io/badge/Maintained%20with-Node.js-green)](https://nodejs.org/)
[![Maintained with npm](https://img.shields.io/badge/Maintained%20with-npm-orange)](https://www.npmjs.com/)
[![Tests](https://img.shields.io/badge/Tests-In%20Progress-yellow)](#)
[![Contributions welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Build Status](https://img.shields.io/badge/Build-In%20Progress-yellow)](#)
[![Documentation](https://img.shields.io/badge/Documentation-Yes-brightgreen)](#)


## English Version


## Welcome to your free open source library for data visualization.

Wild Chart School is a project maintained by the community, contributions are welcome!

Visualize your data in 4 different ways (4 chart types currently: bars, lines, points and pie charts).

The graph is responsive and resizes automatically with the window.

It can be used as soon as it is installed with test data or by replacing it with its own, while retaining the structure given below.


## Getting started with WildChartSchool

### Installation


Clone this repository  (you will be able to download the library with npm install chart-wcs)

```bash
  git clone git@github.com:WildCodeSchool-CDA-LYON-02-2024/wcs-chart-lib.git

```
    
### Usage

The WCS component allows to display a Chart by passing different props (dataset,
config, theme).

Implementation exemple code 
``` js
 <WCS config={config} dataset={dataset} />
```
 Example of the dataset object, the structure does not change depending on the chart type :

```
const dataset = [
    {
      tag: "Titre",
      data: {
        labels: [
          "Janvier",
          "Février",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Août",
          "Septembre",
          "Octobre",
          "Novembre",
          "Décembre",
        ],
        values: [88, 100, 30, 40, 50, 60, 51, 11, 51, 23, 47, 56],
      },
    },
  ];
```

This is an array, with an object:
- **tag** (type: string): The title of the chart
- **data**: Another object with:
- **labels** (type: value table of type “string”): Represents the labels associated with the values (for example, “January” will be displayed below the value “10”, thus label[i]=values[i]);
- **values**: Represents the values to display in the chart (this is a value table of type number int)


**The different chart types: bar, line, point, pie...** 


The chart type is defined in the config object and is mandatory for the component to function, even if it is empty.
The chart type is defined with type (type string): if no value is supplied, it will default to **“point”**.
Possible values: **“bar”**, “point”, “line”, “pie”.


The configuration examples config explain the properties specific to each type of graphic. If a property is present for one type of graphic and absent for another, it's simply not functional.
type, height and width properties are common to all graphics.

**Example for the line chart :** 
``` js
  const config = {
    type: 'line',
    height: 1000,
    width: 1000,
  };
```
- type (string type): if no value is provided, it will default to “point”.
- (type number int): if no value is provided, height will be equal to the size of the browser window (innerHeight) divided by two
- width (type number int), if no value provided, width will be equal to 100% of the browser window width (innerWidth)


![Line Screenshot](./DOCUMENTATION/src/img/chartLinev2.PNG)

**Example for the line chart :** 
``` js
  const config = {
    type: 'line',
    height: 1000,
    width: 1000,
  };
  ```


**Example for the point chart :**
  ``` js
  const config = {
    type: 'point',
    toLine: false,
    grid: true,
    radius: 5,
    fillColor: 'red',
    strokeColor: 'blue',
  };
```
- **toLine** (Boolean), defaulted to false, this option connects the points together.
- **grid** (Boolean), defaults to true, this option allows you to display or not the grid on the graph, this grid is drawn from the number of values provided in the values table in dataset.
- **radius** (type number, accepts one digit after the decimal point), this option defines the size of the point on the graph. By default, radius = 2.
- **fillColor** (type string): this option lets you change the color of the dot. Default fillColor = “black”.
- **strokeColor** (type string): this option changes the color of the point outline. Default strokeColor = “black

![Point Screenshot](./DOCUMENTATION/src/img/chartPointv2.PNG)

**Example for the bar chart :** 
 ``` js
 const config = {
    type: 'bar',
    radius: 30,
    fillColor: 'blue',
  };
```
- **radius** (type number, accepts one digit after the decimal point), this option defines the width of the bar on the graph. By default, radius = 10.
- **fillColor** (type string): this option lets you change the color of the bars. Default fillColor = “black”.

![BarChart Screenshot](./DOCUMENTATION/src/img/chartBarv2.PNG)

**Example of a pie chart :** 
 ``` js
 const config = {
    type: 'pie',
    radius: 100,
  };
  ```
- **radius** (type number, accepts one digit after the decimal point), this option defines the radius of the pie chart. By default, radius = height - spacing, spacing is not modifiable for the moment and is equal to 100px.

![PieChart Screenshot](./DOCUMENTATION/src/img/chartPiev2.PNG)



The **theme object** is not required for the component to function correctly, as it takes a default theme.
The theme object will be used to customize graphic colors, font size, fonts, line thickness, etc...
See all the possibilities on storybook
N B : For the moment, the theme is not functional, and the color and size parameters are in the config object.

**Example of legend display :**
```js
<WCS config={config} dataset={dataset} legend='onTop' />
```

**Legend takes 4 possible parameters (in string):**
- **"none"** : Legend is not displayed,
- **"top"**: The legend is displayed at the top (note that if the pie chart has a radius greater than 150, it may overflow onto the legend),
- **"bottom"**: The legend is displayed at the bottom (note that if the pie chart has a radius greater than 150, it may overlap the legend),
- **"left"**: The legend is displayed on the left (do not use in charts other than pie chart, otherwise the axis labels will overlap),
- **"right"**: Legend is displayed on the right.


For greater clarity, we'll show you examples with the pie chart.
For other charts, only the "onTop" parameter is relevant.

*Without legend ("none") :*

![LEGEND 3 Screenshot](./DOCUMENTATION/src/img/legend-none-point.png)

*Legend at left ("left") :*

![LEGEND 1 Screenshot](./DOCUMENTATION/src/img/legend-left-pie.png)

*Legend at right ("right") :*

![LEGEND 2 Screenshot](./DOCUMENTATION/src/img/legend-right-pie.png)

*Legend on top ("top"):*

![LEGEND 4 Screenshot](./DOCUMENTATION/src/img/legendPieOnTop.PNG)

*Legend on bottom ("bottom") :*

![LEGEND 5 Screenshot](./DOCUMENTATION/src/img/legendPieInline.PNG)

## French Version
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Version](https://img.shields.io/badge/Version-0.0.1-brightgreen)](#)
[![Language](https://img.shields.io/badge/Language-JavaScript-green)](#)
[![Maintained with Node.js](https://img.shields.io/badge/Maintained%20with-Node.js-green)](https://nodejs.org/)
[![Maintained with npm](https://img.shields.io/badge/Maintained%20with-npm-orange)](https://www.npmjs.com/)
[![Tests](https://img.shields.io/badge/Tests-In%20Progress-yellow)](#)
[![Contributions welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Build Status](https://img.shields.io/badge/Build-In%20Progress-yellow)](#)
[![Documentation](https://img.shields.io/badge/Documentation-Yes-brightgreen)](#)

## Bienvenue sur votre librairie open source gratuite pour la visualisation de données.

Wild Chart School est un projet maintenu par la communauté, les contributions sont les bienvenues !
Visualisez vos données de 4 manières différentes (4 types de graphiques actuellement : barres, lignes, points et camemberts).
Le graphique est responsive et se redimensionne automatiquement avec la fenêtre.
Elle est utilisable dès son installation avec des données de test ou en remplaçant celles-ci par les siennes, tout en conservant la structure donnée ci-dessous.

## Commencer avec WildChartSchool
Cloner le repo : 
```
https://github.com/WildCodeSchool-CDA-LYON-02-2024/wcs-chart-lib
```

( A terme vous pourrez télécharger la librairie avec npm install chart-wcs)

Le composant WCS  permet d’afficher un graphique en passant différentes props (dataset, config, thème)

**Exemple d'implémentation  :**
   ```
   <WCS config={config} dataset={dataset} />
```

**Exemple de l’objet dataset, la structure ne change pas en fonction du type de graphique :**

``` js
const dataset = [
    {
      tag: "Titre",
      data: {
        labels: [
          "Janvier",
          "Février",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Août",
          "Septembre",
          "Octobre",
          "Novembre",
          "Décembre",
        ],
        values: [88, 100, 30, 40, 50, 60, 51, 11, 51, 23, 47, 56],
      },
    },
  ];
```

Il s’agit d’un tableau, avec un objet :
 - **tag** (type : string) : Le titre du graphique 
data : Un autre objet avec : 
- **labels** (type : tableau de valeur de type “string”) : Représente les labels associés aux valeurs dans values (par exemple, “Janvier” sera affiché en dessous de la valeur “10”, ainsi label[i]=values[i]);
- **values** : Représente les valeurs à afficher dans le graphique (il s’agit d’un tableau de valeur de type number int)

Les différents types de graphiques : **bar, ligne, point, à secteur (camembert)...** 

Le type de graphique se définit dans l’objet **config** et il est obligatoire pour le fonctionnement du composant, même s' il est vide.
Le type de graphique est a définir avec **type** (type string) : si pas de valeur fournis, il prendra “point” par défaut.
Valeurs possibles : **“bar”, “point”, “line”, “pie”**

Dans les exemples de config ci dessous, sont expliquées les propriétés propres à chaque type de graphique, si une propriété est présente pour un type de graphique et absente pour un autre, elle n’est tout simplement pas fonctionnelle.
**Les propriétés type, height, width, sont communes à tous les graphiques**.

**Exemple pour le graphique en ligne :**
``` js
  const config = {
    type: 'line',
    height: 1000,
    width: 1000,
  };
```

- **type** (type string) : si pas de valeur fournis, il prendra “point” par défaut
- **height** (de type number int), si pas de valeur fournis, height sera égal à la taille de la fenêtre du navigateur (innerHeight) divisé par deux 
- **width* (type number int), si pas de valeur fournis, width sera égal à 100% de la largeur de la fenêtre du navigateur (innerWidth)
Les valeurs de width et height sont des **pixels**, 1000 = 1000px.

![Line Screenshot](./DOCUMENTATION/src/img/chartLinev2.PNG)

**Exemple pour le graphique en point:**
``` js
  const config = {
    type: 'point',
    toLine: false,
    grid: true,
    radius: 5,
    fillColor: 'red',
    strokeColor: 'blue',
  };
```

- **toLine** (booléen), par défaut à false, cette option permet de relier les points entre eux.
- **grid** (booléen), par défaut à true, cette option permet d’afficher ou non le quadrillage sur le graphique, ce quadrillage est dessiné à partir du nombre de valeurs fournis dans le tableau values dans dataset.
- **radius** (type number, accepte un chiffre après la virgule), cette option permet de définir la taille du point sur le graphique. Par défaut, radius = 2.
- **fillColor** (type string):cette option permet de changer la couleur du point. Par défaut, fillColor = “black”
- **strokeColor** (type string), cette option permet de changer la couleur du contour du point. Par défaut, strokeColor = “black

![Point Screenshot](./DOCUMENTATION/src/img/chartPointv2.PNG)

**Exemple pour le graphique en bar  :** 
  ``` js
  const config = {
    type: 'bar',
    radius: 30,
    fillColor: 'blue',
  };
```

- **radius** (type number, accepte un chiffre après la virgule), cette option permet de définir la largeur de la barre sur le graphique. Par défaut, radius = 10. 
- **fillColor** (type string):cette option permet de changer la couleur des barres. Par défaut, fillColor = “black”

![BarChart Screenshot](./DOCUMENTATION/src/img/chartBarv2.PNG)


**Exemple pour le graphique en camembert :**
``` js
  const config = {
    type: 'pie',
    radius: 100,
  };
```

- **radius** (type number, accepte un chiffre après la virgule), cette option permet de définir le rayon du camembert sur le graphique. Par défaut, radius = height - spacing, spacing n’est pas modifiable pour l’instant et est égal à 100.

![PieChart Screenshot](./DOCUMENTATION/src/img/chartPiev2.PNG)

L’objet **theme** n’est pas nécessaire au bon fonctionnement du composant car il prend un thème par défaut.
L’objet thème sera utilisé pour personnaliser les couleurs du graphique, la taille de la police, les fonts, l'épaisseur des traits, etc…
Voir toutes les possibilités sur storybook
N B : Pour l’instant le thème n’est pas fonctionnel, et les paramètres de couleur ou de taille sont dans l’objet config

Le composant utilise l’API canvas pour dessiner le graphique, est responsive et se resize automatiquement par rapport à la taille de la fenêtre du navigateur.

**Exemple pour l'affichage de la légende :**
``` js
<WCS config={config} dataset={dataset} legend='onTop' />
```

**Legend** prend 4 paramètres possible (en string):
- **“none”** : La légende ne s’affiche pas,
- **“top”** : La légende s’affiche en haut (attention si pie chart a un radius supérieur à 150, cela peut déborder sur la légende),
- **“bottom”** : La légende s’affiche en bas (attention si pie chart a un radius supérieur à 150, cela peut déborder sur la légende),
- **“left”** : La légende s’affiche à gauche (ne pas utiliser dans les autres graphiques que pie chart sinon les labels de l’axe se chevauchent),
- **“right”** : La légende s’affiche à droite


Pour plus de clarté, nous vous montrerons des exemples avec le camembert.
Pour les autres graphiques, seul le paramètre **“onTop”** sera pertinent

*Sans légrende ("none") :*

![LEGEND 3 Screenshot](./DOCUMENTATION/src/img/legend-none-point.png)

*Légende à gauche ("left"):*

![LEGEND 1 Screenshot](./DOCUMENTATION/src/img/legend-left-pie.png)

*Légende à droite ("right"):*

![LEGEND 2 Screenshot](./DOCUMENTATION/src/img/legend-right-pie.png)

*Légende en haut ("top"):*

![LEGEND 4 Screenshot](./DOCUMENTATION/src/img/legendPieOnTop.PNG)

*Légend en bas ("bottom") :*

![LEGEND 5 Screenshot](./DOCUMENTATION/src/img/legendPieInline.PNG)
