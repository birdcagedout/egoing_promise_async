// 아까 보았던 timer 코드를 실제로 구현해보자.
// 참고로 Promise를 생성할 때의 문법은 아래와 같다 (resolve만 들어있을 수도 있다)
// 
// new Promise((resolve, reject) => {
//   if(조건) {
//     resolve('성공!');
//   }
//   reject('실패');
// })



function timer(time) {
	return new Promise(
		function(resolve) {						// resolve(성공) 경우만 처리한다
			setTimeout(function() {
				resolve(time);						// 성공시 처리 결과로 time을 리턴한다
			}, time);
		}
	);
}


console.log(`Start...`);
timer(1000)
	.then(function(time) {					// 성공시 결과값이 time으로 전달된다
		console.log(`성공1: ${time}`);
		return timer(500);
	})
	.then(function(time) {					// 성공시 결과값이 time으로 전달된다
		console.log(`성공2: ${time}`);
		return timer(200);
	})
	.then(function(time) {					// 성공시 결과값이 time으로 전달된다
		console.log(`성공3: ${time}`);
	});
console.log(`End.`);


// 결과
// Start...
// End.
// 성공1: 1000
// 성공2: 500
// 성공3: 200



// 그럼 start - 실행결과 - end 순으로 표시되려면?
// end를 chaining의 맨 끝에 넣어준다.

console.log(`Start...`);
timer(1000)
	.then(function(time) {					// 성공시 결과값이 time으로 전달된다
		console.log(`성공1: ${time}`);
		return timer(500);
	})
	.then(function(time) {					// 성공시 결과값이 time으로 전달된다
		console.log(`성공2: ${time}`);
		return timer(200);
	})
	.then(function(time) {					// 성공시 결과값이 time으로 전달된다
		console.log(`성공3: ${time}`);
		console.log(`End.`);
	});
