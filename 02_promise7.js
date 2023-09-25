
// 1.
// response의 결과값이 string인 경우가 많은데, 직접 parsing하여 사용하기는 힘들다. 
// response에는 이것을 가공하여 javascript에서 사용가능한 타입으로 변환해주는 메소드가 있다. ==> response.json()


// fetch('https://jsonplaceholder.typicode.com/posts')
// 	.then(function(response) {
// 		console.log(`response: `, response.json());
// 	})
// 	.catch(function(reason) {
// 		console.log(`reason: `, reason);
// 	});


// 결과값
// response:  Promise {<pending>}






// 2. 
// 그런데 response.json()의 결과값도 promise 타입이다!!
// 따라서 response.json()에 .then, .catch 메소드를 사용할 수 있다.


// fetch('https://jsonplaceholder.typicode.com/posts')
// 	.then(function(response) {
// 		response.json()
// 			.then(function(data) {
// 				console.log(`data: `, data);
// 			});
// 	})
// 	.catch(function(reason) {
// 		console.log(`reason: `, reason);
// 	});


// 결과값
// data:  [
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



// 3. 
// 그런데 일반적으로는 위와 같은 방식(nested promise)으로 사용하지 않고 
// response.json()을 then 안에서 리턴하고 + .catch 뒤에 다시 .then을 달아쓰는 방식(promise chaining)으로 사용한다.


fetch('https://jsonplaceholder.typicode.com/posts')
	.then(function(response) {
		// response.json()
		// 	.then(function(data) {
		// 		console.log(`data: `, data);
		// 	});
		return response.json();
	})
	.catch(function(reason) {
		console.log(`reason: `, reason);
	})
	.then(function(data) {
		console.log(`data: `, data);
	});

// 결과는 동일
