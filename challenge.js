/*console.log('hello world');

let arr = ['ismail','hassan','isah','haruna'];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log('-------------')

for(let i = arr.length-1; i>= 0; i--) {
    console.log(arr[i]);
}*/

let johnFamily = {
    newBills: [],
    tip: function(bill) {
        let percentage;
       for(let i = 0; i < bill.length; i++) {
        if(bill[i] < 50) {
            percentage = 0.2;
        } else if (bill[i] >= 50 && bill[i] < 200) {
            percentage = 0.15;
        } else {
            percentage = 0.1;
        }
        this.newBills.push(percentage)
       } 
    }
}

let result = johnFamily.tip([124,48,268,180]);
console.log(result)

