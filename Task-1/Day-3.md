**7.	What is Promise? How do you create a promise? Explain with an example.**

A Promise is a class that creates an object which helps us keep track of the details of an asynchronous event.
It takes one function with 2 arguments.

<li>Resolved
<li>Rejected.

There are 3 states of a promise:
<li>Pending:
<br>&nbsp&nbsp&nbsp&nbsp Event has not taken place yet.
<br>&nbsp&nbsp&nbsp&nbsp OR
<br>&nbsp&nbsp&nbsp&nbsp Data hasn't been requested yet.

<li>Resolved:
<br>&nbsp&nbsp&nbsp&nbsp Event was sucessfully executed.
<br>&nbsp&nbsp&nbsp&nbsp OR
<br>
&nbsp&nbsp&nbsp&nbsp Data was fetched successfully.We can now define functions that are to be executed in this case using 'then' clause.

<li>Rejected:
<br>&nbsp&nbsp&nbsp&nbsp Event encountered errors.
<br>&nbsp&nbsp&nbsp&nbsp OR
<br>&nbsp&nbsp&nbsp&nbsp Data was not fetched. We can define function to handle this error using 'catch' clause

Skeleton of a promise:

let a= new Promise((resolve,reject)=><br>{  
  **resolve(data);** //if data fetch is success. data:processed data that is pointed to by the promise.<br>
  **reject(data);** //if data not fetched. In this case data is an error object.<br>
})
<br>**a.then**((data)=><br>
{<br>console.log(data);<br>})
**.catch**((data)=><br>
{<br>console.log(data);<br>})

Examples:<br>
Promises are returned by asynchronous method,during fetching APIs, etc.

let p = new Promise((resolve, reject)=><br>
 { <br>
  const x = 10;<br> 
  const y = 10;<br>
  if(x === y) { <br>
    resolve();<br> 
  } <br>else { <br>
     reject();<br> 
  } <br>
}); 
  
p.then( ()=><br> { 
        console.log('Success'); 
    })<br>. 
    catch( ()=><br> { 
        console.log('Some error has occured'); 
    }); 
<br>OUTPUT<br>
Success
