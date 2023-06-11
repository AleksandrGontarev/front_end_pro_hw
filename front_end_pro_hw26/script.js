// const p2 = new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/posts/5').
//     then(response => {
//         if(response.ok) {resolve(response.json())}
//         else reject('AAAAA')
//     }).
//     catch(e => reject('GGGG'));
// })

// p2.then(f1, f2);

// function f1(data) {
//     console.log(data);
//     console.log('No problem', p2);
// }

// function f2(data){
//     console.log('Alert', p2);
// }

// fetch('https://jsonplaceholder.typicode.com/posts/5')
//     .then(response => response.json())
//         .then(data => console.log(data));

const a = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts/5').
    then(data => resolve(data.json()));
});

a.then(data => console.log(data));



// async function func1() {
//     const data = await fetch('https://jsonplaceholder.typicode.com/posts/5');
//     return data.json();
// }

// let a = await func1();
// console.log(a);
