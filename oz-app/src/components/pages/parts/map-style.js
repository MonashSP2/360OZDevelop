import {fromJS} from 'immutable';
import MAP_STYLE from './style.json';

const mapStyle = 'mapbox://styles/pson0001/cjl9jf0iv3g542rmsrpmemlei'
// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = fromJS({
  id: 'data',
  source: 'chinese_population',
  type: 'fill',
  interactive: true,
  paint: {
    'fill-color': {
      property: 'Population',
      stops: [
        [0, '#fff'],
        [1000, '#6482D5'],
        [7000, '#4877DE']
        ]
    },
    'fill-opacity': 0.6
  }
});

export const dataLayerCrime = fromJS({
  id: 'data',
  source: 'chinese_population',
  type: 'fill',
  interactive: true,
  paint: {
    'fill-color': {
      property: 'OffenceCount',
      stops: [
        [0, '#fff'],
        [200000, 'red']
        ]
    },
    'fill-opacity': 0.6
  }
});

export const defaultMapStyle = fromJS(MAP_STYLE);
