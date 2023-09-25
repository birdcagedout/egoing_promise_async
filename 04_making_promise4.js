// Promise가 내부적으로 실패한 경우: reject 사용
// reject로 Promise를 종료했는데, 받는 쪽에서 .catch()가 없는 경우 UnhandledPromiseRejection 에러 발생
// 따라서 Promise를 리턴받는 쪽에서는 반드시 .catch()를 구현해주어야 한다.


function job1() {
	return new Promise(
		function(resolve, reject) {
			setTimeout(function() {
				reject('job1 failed!!');
			}, 2000);
		}
	);
}


function job2() {
	return new Promise(
		function(resolve, reject) {
			setTimeout(function() {
				resolve('job2 ok!!');
			}, 2000);
		}
	);
}


// chaining 방식(많이 사용하는 형태)
job1()
	.then(function(data1) {
		console.log('data1:', data1);
		return job2();
	})
	// 새로 삽입한 부분
	.catch(function(reason1) {
		console.log('reason1:', reason1);
		return job2();											// 해결방법1
		// return Promise.reject(reason1);		// 해결방법2
	})
	.then(function(data2) {
		console.log('data2:', data2);
});


// .catch 부분을 삽입하고 나면 job2에 의한 data2가 undefined로 나옴
// reason1: job1 failed!!
// data2: undefined


// 해결방법1: return job2(); 부분을 .catch() 맨끝에 넣든지
// 해결방법2: .catch 부분 맨끝에 return Promise.reject(); 넣으면 이후 chaining은 실행되지 않음 ==> 그러나 UnhandledPromiseRejection 에러로 인해 실행중지되므로 추천 안 함
