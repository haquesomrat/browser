console.log('111111111');
console.log('222222222');
// setTimeout(() => console.log('aaaa'), 10000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
console.log('333333333');
console.log('444444444');
for (let i = 0; i < 10000; i++) {
    console.log(i);
}