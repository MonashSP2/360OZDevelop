import {range} from 'd3-array';
import {scaleQuantile} from 'd3-scale';

export function updatePopulation(featureCollection, accessor) {
  const {features} = featureCollection;
  const scale = scaleQuantile().domain(features.map(accessor)).range(range(9));
  features.forEach(f => {
    const value = accessor(f);
    f.properties.value = value;
    f.properties.percentile = scale(value);
  });
}