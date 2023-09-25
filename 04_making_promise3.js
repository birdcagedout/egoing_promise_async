// 실제로는 Promise를 생성해서 변수로 갖고 있는 경우는 없고,
// 특정 함수에서 Promise를 리턴하게 되는 경우가 일반적임.


function job1() {
	return new Promise(
		function(resolve, reject) {
			setTimeout(function() {
				resolve('job1 ok!!');
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


// nested 방식
// job1().then(function(data1) {
// 	console.log('data1:', data1);
// 	job2().then(function(data2) {
// 		console.log('data2:', data2)
// 	});
// });


// chaining 방식(많이 사용하는 형태. job2()의 위치 기억할 것)
job1()
	.then(function(data1) {
		console.log('data1:', data1);
		return job2();
	})
	.then(function(data2) {
		console.log('data2:', data2)
});
