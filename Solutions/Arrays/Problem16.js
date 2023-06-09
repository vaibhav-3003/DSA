// // Product of Array Except Self

let productArr = (arr)=>{
    let product = 1;
    arr.forEach(element => {
        product = product*element;
    });
    return product;
}

let arr = [0, 0];

let ans = [];

for(let i=0; i<arr.length; i++){
    let temp = arr.filter((_, index) => index !== i);
    let product = productArr(temp);
    ans.push(product);
}

console.log(ans);


