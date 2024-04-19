
## Installation


Clone this repository  (Eventually you can download the library with npm install chart-wcs)

```bash
  git clone git@github.com:WildCodeSchool-CDA-LYON-02-2024/wcs-chart-lib.git

```
    
# Wild Chart School

The WildChartSchool component allows to display a graph by passing different props (dataset,
config, theme).

Implementation exemple code 
```js import './App.css';

import Canvas from './components/Canvas';

function App() {
  return (
    <>
      <Canvas config={config} dataset={dataset} theme={theme} />
    </>
  );
}

export default App;
```

- config is written as follows:
```js  
 const config = {
    type: 'pie',
    toLine: true,
    grid: true,
    radius: 5,
    fillColor: 'red',
    strokeColor: 'red',
    height: 500,
    width: 500,
  } 
  ```
The config object is currently necessary for the operation of the component, even if it is empty.
If nothing is specified in the object, it defaults to a “point” type,
See the storybook for all possible settings.

- dataset is written as follows : 
```js
  const dataset = [
    {
      tag: 'test',
      data: {
        labels: [
          'Janvier',
          'Fevrier',
          'Mars',
          'Avril',
          'Mai',
          'Juin',
          'Juillet',
          'Aout',
          'Septemnre',
          'Octobre',
          'Novembre',
          'Decembre',
        ],
        values: [10, 20, 30, 40, 50, 60, 51, 11, 51, 23, 47, 56],
      },
    },
  ];
```
- It is a painting, with an object:
    - tag: the title of the graph
    - data: another object with:
        - labels: represents the labels associated with values (for example, “January” will be displayed below the value “10”
        - values: represents the values to display in the chart (this is an INT type value table)

The theme object is not necessary for the proper functioning of the component because it takes a default theme.
The theme object will be used to customize the graphic colors, font size, fonts, stroke thickness, etc…
See all possibilities on storybook
N B: For now the theme is not functional, and the color or size parameters are in the config object

The component uses the canvas API to draw the graph, is responsive and resizes automatically relative to the size of the browser window


## Screenshots

![Chart Line](https://ibb.co/BchyXhn)
![Chart Point](https://ibb.co/6WPTnGz)
![Chart Point-Line](https://ibb.co/yyJVwqz)
![Chart Pie](https://ibb.co/gR7mrxm)



