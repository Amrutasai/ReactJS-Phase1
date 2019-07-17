let a=[0,1,2,3,4,5,6,7,8,9];<br>
console.log('Array a:');<br>
console.log(a);<br>
console.log('a) 5th element of Array a:');<br>
console.log(a[4]);<br>
console.log('b) Insert elements 10 to 20 in Array a:');<br>
a=a.concat(10,11,12,13,14,15,16,17,18,19,20);<br>
console.log(a);<br>
console.log('c) Remove last element of Array a:');<br>
a.pop();<br>
console.log(a);<br>
console.log('d) Remove first element of Array a:');<br>
a.shift();<br>
console.log(a);<br>
console.log('e) Add an element(999) at the beginning of Array a:');<br>
a=[...[999],...a];<br>
console.log(a);<br>

a.map((index)=><br>
{<br>
        a[index]===17?console.log(index):{};<br>
});<br>
a.splice(10,1);<br>
console.log(a);<br>
a.splice(3,5);<br>
console.log(a);<br>
let b=a.map((value,index)=><br>
{<br>
        return value*index;<br>
});<br>
console.log(b);<br>
console.log(a.slice(7,11));<br>
let c=b.filter((value)=><br>
{<br>
    return value>30;<br>
});<br>
console.log(c);<br>
let d=[...a,...b,...c];<br>
console.log(d);<br>

**OUTPUT**
