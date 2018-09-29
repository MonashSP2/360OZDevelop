import {fromJS} from 'immutable';
import MAP_STYLE from './style.json';

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
        [0, 'red'],
        [51, 'red'],
        [52, '#FF8567'],
        [134, '#FF8567'],
        [135, '#4877DE'],
        [7000, '#4877DE']
        ]
    },
    'fill-opacity': 0.5
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
        [100000, 'red'],
        [200000, 'red']
        ]
    },
    'fill-opacity': 0.6
  }
});

export const defaultMapStyle = fromJS(MAP_STYLE);
