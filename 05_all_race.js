// 같은 시각에 시작한 비동기 작업 A, B, C가 있다고 치자.
// 이 3개의 비동기 작업들이 완료된 후 실행되어야 하는 작업 T가 있다고 하면
// T를 언제 시작할 것인가에 따라 Promise를 사용하는 메소드가 달라진다.

// A, B, C 중 가장 늦게 완료된 작업 직후에 T작업(콜백) 시작 ==> Promise.all([A, B, C]).then( T );			// A,B,C 작업결과는 배열로 T에 전달
// A, B, C 중 가장 먼저 완료된 작업 직후에 T작업(콜백) 시작 ==> Promise.race([A, B, C]).then( T );		// 가장 먼저 완료된 작업결과만 T에 전달


function timer(time) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(time);
		}, time);
	});
}

console.time('Promise.all');
Promise.all([timer(1000), timer(2000), timer(3000)])
	.then(function(result){
		console.log('result:', result);										// 결과는 배열로 [ 1000, 2000, 3000 ]
		console.timeEnd('Promise.all');										// Promise.all: 3.017s
	});



	console.time('Promise.race');
	Promise.race([timer(1000), timer(2000), timer(3000)])
		.then(function(result){
			console.log('result:', result);										// 결과는 1개: 1000
			console.timeEnd('Promise.race');									// Promise.race: 1.007s
		});