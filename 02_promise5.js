// 일반적으로는 다음과 같이 chainging 축약형으로 많이 쓴다.
// fetch의 리턴값은 promise 타입이므로 바로 .then() 메소드를 붙여 쓰고,
// .then() 메소드의 리턴값도 promise이므로 바로 .catch() 메소드를 붙여 쓴다.
// 이때 마지막까지 ;는 붙이지 않는다.


fetched = fetch('https://jsonplaceholder.typicode.com/posts')
	.then(function(response) {
		console.log(`response: `, response);
	})
	.catch(function(reason) {
		console.log(`reason: `, reason);
	});

