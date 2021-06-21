// if there is only one arg, then the array will be an empty array (with dimensions of the arg)
// if the dimensions is an int and not an array, then it will create a 2D array with size of int
function createMultiArray(fillWith, dimensions){
  let fill = fillWith;
  let dim = dimensions;
  let array;
  
  
  // consoles an error if their are no arguments
  if (fillWith == undefined && dimensions == undefined){
    console.error("createMultiArray() needs at least one argument");
    return
  }
  
  // if there is only one argument, the dimension is set to that argument
  if (dimensions == undefined){
    fill = undefined;
    dim = fillWith;
  }
  
  // makes the array based on whether or not the dimensions is an aray or not
  if (Array.isArray(dim)){
    if (dim.length == 0){
      return [];
    } else if (dim.length == 1){
      return new Array(dim[0]);
    }
    // implied else
    array = createDim(fill, dim, 0, []);
  } else {
    array = new Array(dim);
    for (let row = 0; row < dim; row++){
      array[row] = new Array(dim);
      for (let col = 0; col < dim; col++){
        if (fill != undefined){
          array[row][col] = fill;
        }
      }
    }
  }
  
  return array;
    
    
  function createDim(fill, dimensions, currentDimension, arr){
    let array = arr;
    let currentDim;

    if (currentDimension != 0){
      currentDim = new Array(dimensions[dimensions.length - 1 - currentDimension]);
    }

    array.push(currentDim);
    
    if (currentDimension + 1 == dimensions.length){
      array[0] = fill;
      for (let i = 1; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
          array[i][j] = array[i - 1];
        }
      }
      return array[array.length - 1]
    } else {
      return createDim(fill, dimensions, currentDimension + 1, array);
    }
  }
}
