// var input1 = [1,1,2,2,4,4,4,4,5]
// var input1 = [2,2,2,2,4,4,4,4,5]
var input1 = [1,2,2,4,4,4,4,5]
var output2 = []
var internal_counter = 1
var external_counter = []
var dict = {}

for (i = 0; i < input1.length; i++) {
    internal_counter = 0;
        for( j = 0; j < input1.length; j++){
            if(input1[i]==input1[j]){
                internal_counter = internal_counter + 1;
            }
        }
        dict[input1[i]] = internal_counter
  }


console.log(dict)

var keys = Object.keys(dict);
var values = Object.values(dict);
var i, len = keys.length; 
 
for (i = 0 ; i < len; i++){
  for ( j = 0;j < len; j++){
  if(values[j]> values[j+1]){
    let tmp = keys[j];
    keys[j] = keys[j+1];
    keys[j+1] = tmp;
    let tmp2 = values[j];
    values[j] = values[j+1];
    values[j+1] = tmp2;  
  }
  }   
}
console.log(keys);
console.log(values);

console.log(dict);
output2.push(parseInt(keys[len-1]),parseInt(keys[0]))
console.log(output2)
