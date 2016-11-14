import React from 'react'
import ReactDOM from 'react-dom'
import Masonry from 'react-masonry-component'
import {Button, Glyphicon} from 'react-bootstrap'

var elements = [
  {
    name: 'NYC Taxis: A Day in the Life',
    description: 'An Award-winning data visualization that tracks a single NYC taxicab over a 24-hour period',
    image: 'https://camo.githubusercontent.com/63d5b7ceed7b6dd019d26a785fe94269ed25232c/687474703a2f2f636872697377686f6e672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031342f30382f46756c6c73637265656e5f385f335f31345f5f31325f31315f414d312e706e67',
    link: 'http://nyctaxi.herokuapp.com/',
    tags: [
      'transportation',
      'open data',
      'urban planning',
      'foil',
      'data visualization',
      'd3',
      'web mapping',
      'leaflet'
    ]
  },
  {
    name: 'NYC Budget Visualization',
    description: "A D3 bubble visualization of New York City's $70 Billion operating budget",
    image: 'http://chriswhong.com/wp-content/uploads/2013/06/Bubbles-332x171.png',
    link: 'http://www.chriswhong.com/projects/nycbudget/',
    tags: [
      'government',
      'd3',
      'data visualization'
    ]
  },
  {
    name: 'Urban Scratchoff',
    description: "Scratch off a historic map layer of NYC to reveal modern-day aerial imagery below",
    image: 'https://pbs.twimg.com/media/CW7TyWiWkAAaos2.png',
    link: 'http://www.urbanscratchoff.com',
    tags: [
      'history',
      'urban planning',
      'web mapping',
      'leaflet'
    ]
  },
  {
    name: 'Subway Deserts V2',
    description: "Scratch off a historic map layer of NYC to reveal modern-day aerial imagery below",
    image: 'https://cdn1.vox-cdn.com/uploads/chorus_asset/file/6781133/Screen%20Shot%202016-07-12%20at%205.04.01%20PM.png',
    link: 'https://cwhong.carto.com/viz/6dfca01c-47e5-11e6-9fd3-0ee66e2c9693/public_map',
    tags: [
      'transportation',
      'urban planning',
      'web mapping',
      'cartodb'
    ]
  },
  {
    name: 'NYC Taxis: A Day in the Life',
    description: 'An Award-winning data visualization that tracks a single NYC taxicab over a 24-hour period',
    image: 'https://camo.githubusercontent.com/63d5b7ceed7b6dd019d26a785fe94269ed25232c/687474703a2f2f636872697377686f6e672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031342f30382f46756c6c73637265656e5f385f335f31345f5f31325f31315f414d312e706e67',
    link: 'http://nyctaxi.herokuapp.com/',
    tags: [
      'transportation',
      'open data',
      'urban planning',
      'foil',
      'data visualization',
      'd3',
      'web mapping',
      'leaflet'
    ]
  },
  {
    name: 'NYC Budget Visualization',
    description: "A D3 bubble visualization of New York City's $70 Billion operating budget",
    image: 'http://chriswhong.com/wp-content/uploads/2013/06/Bubbles-332x171.png',
    link: 'http://www.chriswhong.com/projects/nycbudget/',
    tags: [
      'government',
      'd3',
      'data visualization'
    ]
  },
  {
    name: 'Urban Scratchoff',
    description: "Scratch off a historic map layer of NYC to reveal modern-day aerial imagery below",
    image: 'https://pbs.twimg.com/media/CW7TyWiWkAAaos2.png',
    link: 'http://www.urbanscratchoff.com',
    tags: [
      'history',
      'urban planning',
      'web mapping',
      'leaflet'
    ]
  },
  {
    name: 'Subway Deserts V2',
    description: "Scratch off a historic map layer of NYC to reveal modern-day aerial imagery below",
    image: 'https://cdn1.vox-cdn.com/uploads/chorus_asset/file/6781133/Screen%20Shot%202016-07-12%20at%205.04.01%20PM.png',
    link: 'https://cwhong.carto.com/viz/6dfca01c-47e5-11e6-9fd3-0ee66e2c9693/public_map',
    tags: [
      'transportation',
      'urban planning',
      'web mapping',
      'cartodb'
    ]
  }

  
  
]




var App = React.createClass({
  render() {

    var childElements = elements.map(function(element, i){
       return (
            <div className="grid-item" className="col-xs-3" key={i}>
              <div className="image-container">
                <img src={element.image}/>
              </div>
              <h2>{element.name}</h2>
              <p>{element.description}</p>
              <a href={element.link}><Button bsStyle="primary">Check it out <Glyphicon glyph="new-window" /></Button></a>
            </div>
        );
    });


    return(
      <div>
        <Masonry
          className={'grid'} // default ''
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
            {childElements}
        </Masonry>
      </div>
    )
  }
})

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)