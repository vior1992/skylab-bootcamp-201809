function concat(arr, arr2){
    arr3=[];
for(x=0;x<arr.length;x++){
    arr3[x] = arr[x];
}
for(i=0;i<arr.length;i++){
    arr3[arr3.length] = arr2[i]
}
return arr3;
}