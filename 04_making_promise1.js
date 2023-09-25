// 개념적 에제
// new Promise(
// 	콜백함수(resolve, reject) {
// 		if(성공) {
// 			resolve(전달값);
// 		} else {
// 			reject(전달값);
// 		}
// 	}
// )


var job1 = new Promise(
	function(resolve, reject) {
		var num = Math.floor(Math.random() * 10);
		if (num % 2 === 0) {
			resolve('resolved ok!');
		} else {
			reject('rejected!!');
		}
		
	}
);

job1.then(function(data) {
	console.log(data);
}).catch(function(err) {
	console.log(err);
});