const url=require("url")


let x=new URL("https://www.google.com:8080/projects")

console.log(`Host: ${x.hostname}`);
console.log(`Protocol: ${x.protocol}`);
console.log(`Port: ${x.port}`);
console.log(`pathname: ${x.pathname}`);

console.log(`Query Paramneters:${x.searchParams}`);
console.log(`Fragment: ${x.hash}`);


x.searchParams.set("id","2")
console.log(x.href);





