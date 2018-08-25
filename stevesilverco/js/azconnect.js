
var items;
let productObj=axios.post('http://svapi.azurewebsites.net/api/GetImageData', {
    //firstName: 'Fred',
    //lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response.data);
    items=JSON.parse(response.data);
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
//let items=productObj;
console.log(items);  // it works but delayed  , use vuex state management may help
