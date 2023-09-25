console.log(1);
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
console.log(2);

// 결과값: 터미널에서 node 02_promise.js로 실행해도 OK
// 1
// 2
// [
//   {
//     userId: 1,
//     id: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\n' +
//       'suscipit recusandae consequuntur expedita et cum\n' +
//       'reprehenderit molestiae ut ut quas totam\n' +
//       'nostrum rerum est autem sunt rem eveniet architecto'
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: 'qui est esse',
//     body: 'est rerum tempore vitae\n' +
//       'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
//       'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
//       'qui aperiam non debitis possimus qui neque nisi nulla'
//   },
//   ...
// ]