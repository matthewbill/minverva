/**
 * @copyright Matthew Bill
*/

function getFiles() {
  return null;
}

function deserializeFiles(files) {
  // Data Access Filters used to pull out specific data.
  const items = [
    {
      id: 1,
      name: 'tshirt',
      type: 'clothes',
      price: 19.99,
      dateCreated: '2019-01-01',
    }, {
      id: 2,
      name: 'trainers',
      type: 'clothes',
      price: 29.99,
      dateCreated: '2019-01-02',
    }, {
      id: 3,
      name: 'chocolate',
      type: 'food',
      price: 1.50,
      dateCreated: '2019-01-02',
    }, {
      id: 4,
      name: 'rice',
      type: 'food',
      price: 0.99,
      dateCreated: '2019-01-03',
    },
  ];
  return items;
}

// May only want a portion of the file
function mapFilesToEntities(files) {
  const entities = files.map(item => item);
  return entities;
}

function cacheEntities(entities) {

}

function filter(entities) {
  return entities.filter(entity => entity.price > 2.00);
}

// derived columns which do not need to be filtered on, but can be sorted on.
function postFilterCaclulations(entities) {
  return entities;
}

function displayFilter(entities) {
  return entities;
}

// derived columns which do not need to be filtered on, but can be sorted on.
function postDisplayFilterCaclulations(entities) {
  return entities;
}

function sort(entities, sortBy, sortDir) {
  const sortedEntities = entities.slice();

  switch (sortBy) {
    case 'name':
      sortedEntities.sort();
      if (sortDir === 'desc') {
        sortedEntities.reverse();
      }
      break;
    case 'price':
    default:
      if (sortDir === 'asc') {
        sortedEntities.sort((a, b) => a.price - b.price);
      } else {
        sortedEntities.sort((a, b) => b.price - a.price);
      }
      break;
  }
  return sortedEntities;
}

function getPage(entities, index, pageSize) {
  if (index) {
    if (pageSize) {
      return entities.slice(index, pageSize);
    }
    return entities.slice(index);
  }
  return entities;
}

// Derived columns which are not needed for filtering or sorting
function postPageCalculations(entities) {
  return entities;
}

function cachePostPageEntities(entities) {

}

function getItems() {
  // S3 WRAPPER
  const files = getFiles();
  const items = deserializeFiles(files);

  // REPOSITORY
  let entities = mapFilesToEntities(items);
  cacheEntities(entities);
  entities = filter(entities);
  entities = postFilterCaclulations(entities);
  entities = displayFilter(entities);
  entities = postDisplayFilterCaclulations(entities);
  entities = sort(entities, 'price', 'desc');
  entities = getPage(entities, 1, null);
  entities = postPageCalculations(entities);
  cachePostPageEntities(entities);
  return entities;
}

function getItem(id) {
  const entities = getItems();
  const entity = entities.find(i => i.id === id);
  return entity;
}


const entities = getItems();
console.log(entities);

// .find() - find a single item in the array


// report


// collection

// totalCount
// count

// item


const nums = [5,4,3,2,1];
console.log(nums);


// GROUPED ITEMS
const files = getFiles();
const items = deserializeFiles(files);

console.log(grouped);