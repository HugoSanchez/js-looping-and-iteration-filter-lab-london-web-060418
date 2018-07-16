// Code your solution in this file
function findMatching(drivers_array, string) {
  return drivers_array.filter(function (driver) {return driver.toLowerCase() === string.toLowerCase(); });
};

function fuzzyMatch(drivers_array, letters) {
  result =  drivers_array.filter(function (driver){
    return driver.toLowerCase().startsWith(letters.toLowerCase())
  });
  return result
};


function matchName(object, name) {
  result = object.filter( function (element){
    return element.name.toLowerCase() === name.toLowerCase();
  })
  return result
};
