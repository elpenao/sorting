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
}


