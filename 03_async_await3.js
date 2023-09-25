// promise chaining으로 코드가 보다 간결해지긴 했지만 
// 여전히 콜백이 사용되어 읽기 불편하다. ==> 더 개선해보자


function timer(time) {
	return new Promise(
		function(resolve) {						// resolve(성공) 경우만 처리한다
			setTimeout(function() {
				resolve(time);						// 성공시 처리 결과로 time을 리턴한다
			}, time);
		}
	);
}

// 이전 promise chaining으로 작성된 코드
// console.log(`Start...`);
// timer(1000)
// 	.then(function(time) {					// 성공시 결과값이 time으로 전달된다
// 		console.log(`성공1: ${time}`);
// 		return timer(500);
// 	})
// 	.then(function(time) {					// 성공시 결과값이 time으로 전달된다
// 		console.log(`성공2: ${time}`);
// 		return timer(200);
// 	})
// 	.then(function(time) {					// 성공시 결과값이 time으로 전달된다
// 		console.log(`성공3: ${time}`);
// 		console.log(`End.`);
// 	});



// 새로운 버전(준비중): chaining을 잘라서 직렬로 써주고 + 비동기 함수 앞에 await (아직 완성 아님)
// console.log(`Start...`);
// await timer(1000);

// console.log(`성공1: ${time}`);
// await timer(500);

// console.log(`성공2: ${time}`);
// await timer(200);

// console.log(`성공3: ${time}`);
// console.log(`End.`);



// 완성: (chaining을 잘라서 직렬로 써주고 + 비동기 함수 앞에 await) + 콜백의 파라미터로 전달되는 값을 await의 리턴값으로 받고 + async 함수 작성 + 실행
async function run() {
	console.log(`Start...`);
	var t1 = await timer(1000);

	console.log(`성공1: ${t1}`);
	var t2 = await timer(500);

	console.log(`성공2: ${t2}`);
	var t3 = await timer(200);

	console.log(`성공3: ${t3}`);
	console.log(`End.`);
}

console.log('--------------------------------');
// console.log(run());		// run()의 실행결과는 Promise { <pending> } ==> await run() 할 수 있다!!
run();
console.log('================================');


// 실행결과
// --------------------------------
// Start...
// ================================
// 성공1: 1000
// 성공2: 500
// 성공3: 200
// End.



// 문제점: 어떻게 하면 시작선과 끝선으로 start, end를 감쌀 수 있을까?
// 해결책: 시작선, 끝선을 포함하여 다시 한번 async 함수로 감싸준다 (위의 실행코드 3줄을 주석처리 하고 아래 실행)
async function run2() {
	console.log('--------------------------------');
	await run();
console.log('================================');
}
run2();


// 실행결과
// --------------------------------
// Start...
// 성공1: 1000
// 성공2: 500
// 성공3: 200
// End.
// ================================


// async 함수가 내부에서 return하는 값은 
// var result = await 그함수; 로 받을 수 있다.