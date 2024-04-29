const arr = [8,6,4,2,0];

function binarySearch(arr,target) {
    let start= 0;
    let end = arr.length - 1;
    while(start < end){
        let mid = start + (end - start) / 2;
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch(arr, 4));