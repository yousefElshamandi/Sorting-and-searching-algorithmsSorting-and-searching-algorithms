function insertionSort(arr) {
  const n = arr.length;

  // Traverse through all array elements starting from index 1
  for (let i = 1; i < n; i++) {
      // Pick the current element arr[i]
      let currentElement = arr[i];

      // Move elements of arr[0..i-1] that are greater than the current element
      // to one position ahead of their current position
      let j = i - 1;
      while (j >= 0 && arr[j] > currentElement) {
          arr[j + 1] = arr[j];
          j--;
      }

      // Insert the current element into its correct position
      arr[j + 1] = currentElement;
  }
}

// Example usage:
let myArray = [12, 11, 13, 5, 6];
insertionSort(myArray);

console.log("Sorted array:", myArray);
