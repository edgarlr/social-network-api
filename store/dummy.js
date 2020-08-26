const db = {
  'user': [
    {id: '1', name: 'Carlos'}
  ]
};

async function list(tabla) {
  return db[tabla] || []
}

async function get(tabla, id) {
  let collection = await list(tabla)
  return collection.filter(item => item.id === id)[0] || null
}

async function upsert(tabla, data) {
  if (!db[tabla]) {
    db[tabla] = [];
  }

  db[tabla].push(data)

  console.log(db);
  
}

async function remove(tabla, id) {
  return true;
}

async function query(tabla, q) {
  let collection = await list(tabla);
  let keys = Object.keys(q)
  let key = keys[0]
  return collection.filter((item) => item[key] === q[key])[0] || null;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
}