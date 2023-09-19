var arr = [0, 1, 2, 3, 4, 5]
var even;
var odd;
for (i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {

        even += arr[i]
    } else {

        odd += arr[i]
    }
}
console.log(even)