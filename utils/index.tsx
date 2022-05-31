// TODO: Given more time i'm sure I could work with a live database, react persist, or local client data storage
// TODO: I'm sure given more time i'd setup redux (state management) and an API
import Data from '../data/data';
import FirstNames from '../data/firstnames';
import LastNames from '../data/lastnames';

// https://github.com/dominictarr/random-name/blob/master/first-names.json
// https://opendata.hayward-ca.gov/documents/Hayward::active-building-permits-json-format/explore

export const getLocationsFromData = () => (
    Data.map(({y, x}) => ({lat: parseFloat(y), lng: parseFloat(x)}))
);

export const buildDataSource = () => (
    Data.map((item, id) => ({id, ...item, address: item.a, fullname: FirstNames[id] + " " + LastNames[id], firstname: FirstNames[id], lastname: LastNames[id], location: {lat: parseFloat(item.y), lng: parseFloat(item.x)}}))
);
