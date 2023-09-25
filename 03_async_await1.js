// 1.
// 비동기 함수 사용시 promise를 사용하여 콜백들을 chaining하면 ==> 콜백 지옥보다 깔끔한 코드를 작성할 수 있다.
// 아래 예에서 timer는 비동기 함수이고 promise를 리턴한다고 가정하자.

// 1-1. 콜백 지옥
timer(1000, function() {
	console.log('작업1');
	timer(500, function() {
		console.log('작업2');
		timer(200, function() {
			console.log('작업3');
		});
	});
});

// 1-2. promise chaining
timer(1000)
	.then(function() {
		console.log('작업1');
		return timer(500);
	})
	.then(function() {
		console.log('작업2');
		return timer(200);
	})
	.then(function() {
		console.log('작업3');
	});





// 2.
// promise chaining도 훌륭하지만, 결국 .then, function, return 등이 너무 중복되고 반복되고 있다.
// 따라서 이 부분을 생략/축약적으로 표현한다면 이것보다 더 직관적인 코드가 가능할 것 같다. (실제 동작하는 코드 아님)
timer(1000)

console.log('작업1');
timer(500);

console.log('작업2');
timer(200);

console.log('작업3');



// 3.
// 그런데 위와 같이 표현하자니 마치 동기함수들을 순차적으로 실행하는 것같은 코드의 문법적 단순함은 있지만
// 동작 메커니즘이 다른 비동기 함수 실행과 구별하기 위한 장치가 필요하다. ==> async await (실제 동작하는 코드 아님)

await timer(1000)			// timer(1000)이 끝난 후에 작업1을 시작해야 함 ==> 기다려야 한다

console.log('작업1');
await timer(500);			// timer(500)이 끝난 후에 작업2을 시작해야 함 ==> 기다려야 한다

console.log('작업2');
await timer(200);			// timer(200)이 끝난 후에 작업3을 시작해야 함 ==> 기다려야 한다

console.log('작업3');




// 4.
// (비동기 함수들이 마치 순차적으로 진행되는 듯한) 코드의 깔끔함을 위해서는 여러가지 제약조건이 붙는다.  
// 비동기 함수 앞에는 await를 붙여야 하고(비동기가 마쳐야만 다음 코드 진행이 가능하므로)
// await가 붙은 함수들은 다른 더 큰 async 함수 안에서만 사용 가능

async function run() {
	await timer(1000)			// timer(1000)이 끝난 후에 작업1을 시작해야 함 ==> 기다려야 한다

	console.log('작업1');
	await timer(500);			// timer(500)이 끝난 후에 작업2을 시작해야 함 ==> 기다려야 한다

	console.log('작업2');
	await timer(200);			// timer(200)이 끝난 후에 작업3을 시작해야 함 ==> 기다려야 한다

	console.log('작업3');
}


// 1번의 콜백 지옥, 체이닝 코드와 4번의 async, await 함수는 완전히 동일한 코드이다!!
