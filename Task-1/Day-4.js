let a=[0,1,2,3,4,5,6,7,8,9];
console.log('Array a:');
console.log(a);
console.log('a) 5th element of Array a:');
console.log(a[4]);
console.log('b) Insert elements 10 to 20 in Array a:');
a=a.concat(10,11,12,13,14,15,16,17,18,19,20);
console.log(a);
console.log('c) Remove last element of Array a:');
a.pop();
console.log(a);
console.log('d) Remove first element of Array a:');
a.shift();
console.log(a);
console.log('e) Add an element(999) at the beginning of Array a:');
a=[...[999],...a];
console.log(a);
console.log('f.	Find the index of number 17 in the array.');
a.map((index)=>
{
        a[index]===17?console.log(index):{};
});
console.log('g.	Remove the item at index 11 from the array:');
a.splice(11,1);
console.log(a);
console.log('h.	Remove 5 items starting from index 4:');
a.splice(4,5);
console.log(a);
console.log('i.	Create a new array, b, having a multiplication of number and its index from array a:');
let b=a.map((value,index)=>
{
        return value*index;
});
console.log(b);
console.log('j.	Extract numbers at index 7, 8, 9,10 from array a:');
console.log(a.slice(7,11));
console.log('k.	Create an array, c, from array b, of numbers which are greater than 30:');
let c=b.filter((value)=>
{
    return value>30;
});
console.log(c);
console.log('l.	Merge all the 3 arrays, a, b, c:');
let d=[...a,...b,...c];
console.log(d);
