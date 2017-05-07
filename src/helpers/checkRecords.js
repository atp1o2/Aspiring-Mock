// INPUT: array of objects, key, value to check
// OUTPUT: {key, value}

// function checkRecords (list, key, value) {
//   console.log('check records hit')
//   let object;
//   list.some((element) => {
//     if (element[key] === value) {
//       return object = element
//     }
//   })
//   return object;
// }

function checkRecords (list, key, val, resource) {
  console.log('attributes hit')

  var record = checkRecords(list, key, val)
  var resource_key, resource_val, record;

  list.some((element) => {
    if (element[key] === val) {
      return record = element;
    }
    return record;
  })


  if (record) {
    resource_key = resource + "_id"
    resource_val = record.id
  }
  else {
    resource_key = resource + "_attributes";
    resource_val = {"name": val};
  }
  return { new_key: resource_key, new_val: resource_val }
}

export default checkRecords;
