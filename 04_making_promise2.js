// 앞선 예제는 구조를 파악하기 위한 예제였고,
// 비동기 함수를 사용해야 promise를 사용하는 의미가 있다.


var job1 = new Promise(
	function(resolve, reject) {
		setTimeout(function() {
			resolve('resolved ok!!');
		}, 2000);
	}
);

job1.then(function(data) {
	console.log('data:', data);
});