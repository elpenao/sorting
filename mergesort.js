function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	var half = Math.ceil(arr.length / 2);
	var left = arr.slice(0,half);
	var right = arr.slice(half);
	
	left = mergeSort(left);
	right = mergeSort(right);
	return merge(left, right);
}

function merge(left, right){
	var merged = [];
	function addEl(left, right) {
        if (left[0] <= right[0]) {
			merged.push(left[0]);
			var lshift = left.slice(1);
			if (lshift.length > 0) {
                addEl(lshift,right,0,0);
            } else {
                merged = merged.concat(right);
            }
		} else {
			merged.push(right[0]);
            var rshift = right.slice(1);
            if (rshift.length > 0) {
                addEl(left,rshift,0,0);
            } else {
               merged = merged.concat(left);
            }
		}
    }
    addEl(left,right);
	return merged;
}

// function mergeSort(arr) {
// 	var arrArray = [];
// 	function splitArr(arr){
// 		var half = Math.ceil(arr.length / 2);
// 		if(arr.length === 1){
// 			arrArray.push(arr);
// 		} else {
// 			splitArr(arr.slice(0,half));
// 			splitArr(arr.slice(half));
// 		}
// 	}
// 	if (arr.length > 0) splitArr(arr);
	
// 	// arr.forEach(function(element){
// 	// 	arrArray.push([element]);
// 	// });
// 	console.log(arrArray);
// 	function sortArr(arrArray){
// 		if (arrArray.length <= 2) return arrArray[0].concat(arrArray[1]);
// 		var length = arrArray.length;
// 		var groups = Math.floor(length / 2);

// 	}

// }