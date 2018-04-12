function findWaldo(arr, found) {
  arr.forEach(function(element) {
    if (element === "Waldo") {
      var location = arr.indexOf(element);
      found(location);
    }
  }
);}


function actionWhenFound(found) {

  console.log("Found Waldo at " + found);
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
