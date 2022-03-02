// level {1}

/*## Level 1

Re-write the below code to better code quality standards.

```
async function GET_daTA() {
  let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let DATA = await r.json();
  return DATA;
}
``` */


import axios from "axios";

function GET_daTA(){
    axios.get("https://jsonplaceholder.typicode.com/todos/1"),(response)=>{
        let DATA=response;
        return DATA;

    },(error)=>{
        console.log("error")
    }
}