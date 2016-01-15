function bubbleSort(arr, marker){
	if (!marker) var marker = arr.length;
	var first;
	var swaps = 0;
	for (var i = 0; i < marker; i++) {
		if (arr[i] > arr[i+1]) {
			first = arr[i+1];
			arr[i + 1] = arr[i];
			arr[i] = first;
			swaps++;
		}
	}
	marker--;
	if (swaps > 0) return bubbleSort(arr, marker);
	return arr;
	// var sorted = false;
 //  for (var end = arr.length; end > 0 && !sorted; end--) { // passes
 //    sorted = true; // assume until proven incorrect
 //    for (var j = 0; j < end; j++) { // bubbling
 //      if (!inOrder(arr, j)) {
 //        swap(arr, j);
 //        sorted = false;
 //      }
 //    }
 //  }
 //  return arr;
}

function inOrder (array, index) { // pure function
  if (index === array.length - 1) return true;
  return array[index] < array[index + 1];
}

function swap (array, index) { // side effects
  var oldLeftValue = array[index];
  array[index] = array[index + 1];
  array[index + 1] = oldLeftValue;
}


