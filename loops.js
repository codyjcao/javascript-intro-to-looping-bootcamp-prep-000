function forLoop(array){
  for (var i = 0; i < 25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else{
      array.push(`I am ${i} strange loops`)
    }
  }
  return array
}


function whileLoop(number){
  while (number > 0){
    console.log(number)
    number--
  }
  return "done"
}


function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.length -= 1
  } while (maybeTrue() && array.length > 0)
}

