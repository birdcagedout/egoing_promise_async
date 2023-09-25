var fetched = fetch('https://jsonplaceholder.typicode.com/posts');
console.log(fetched);

// 결과: 1. promise 객체를 리턴하는 함수는 비동기로 동작하는 함수이다.
// Promise { <pending> }




// 2. promise 객체는 2가지 메소드가 있다.
//		성공시, 실패시 각각 상황에 따라 특정 메소드에 연결된 콜백함수를 표준화된 방법으로 실행시킬 수 있다.


// 2-1. fetch 결과가 성공했을 때 then() 파라미터 안에 있는 콜백이 호출된다.
//			fetch 결과값을 콜백의 파라미터(result)로 받을 수 있다.
fetched.then(function(result) {													// 일반적으로 response로 쓴다
	console.log(`result: `, result);
});


// 2-2. fetch 결과가 실패했을 때 catch() 파라미터 안에 있는 콜백이 실행된다.
//			fetch 결과가 실패한 이유를 콜백의 파라미터(reason)로 알려준다.
fetched.catch(function(reason) {
	console.log(`reason: `, reason);
});



///////////////////////////////////////////////
// 2-1. 성공시 결과값: Response 객체
// result:  Response {
//   [Symbol(realm)]: null,
//   [Symbol(state)]: {
//     aborted: false,
//     rangeRequested: false,
//     timingAllowPassed: true,
//     requestIncludesCredentials: true,
//     type: 'default',
//     status: 200,
//     timingInfo: {
//       startTime: 49.36285800021142,
//       redirectStartTime: 0,
//       redirectEndTime: 0,
//       postRedirectStartTime: 49.36285800021142,
//       finalServiceWorkerStartTime: 0,
//       finalNetworkResponseStartTime: 0,
//       finalNetworkRequestStartTime: 0,
//       endTime: 0,
//       encodedBodySize: 393,
//       decodedBodySize: 0,
//       finalConnectionTimingInfo: null
//     },
//     cacheState: '',
//     statusText: 'OK',
//     headersList: HeadersList {
//       cookies: null,
//       [Symbol(headers map)]: [Map],
//       [Symbol(headers map sorted)]: null
//     },
//     urlList: [ [URL] ],
//     body: { stream: undefined }
//   },
//   [Symbol(headers)]: HeadersList {
//     cookies: null,
//     [Symbol(headers map)]: Map(24) {
//       'date' => [Object],
//       'content-type' => [Object],
//       'transfer-encoding' => [Object],
//       'connection' => [Object],
//       'x-powered-by' => [Object],
//       'x-ratelimit-limit' => [Object],
//       'x-ratelimit-remaining' => [Object],
//       'x-ratelimit-reset' => [Object],
//       'vary' => [Object],
//       'access-control-allow-credentials' => [Object],
//       'cache-control' => [Object],
//       'pragma' => [Object],
//       'expires' => [Object],
//       'x-content-type-options' => [Object],
//       'etag' => [Object],
//       'via' => [Object],
//       'cf-cache-status' => [Object],
//       'age' => [Object],
//       'report-to' => [Object],
//       'nel' => [Object],
//       'server' => [Object],
//       'cf-ray' => [Object],
//       'content-encoding' => [Object],
//       'alt-svc' => [Object]
//     },
//     [Symbol(headers map sorted)]: null
//   }
// }




////////////////////////////////////////////
// 2-2. 실패시 결과값(주소 일부러 틀림)
// reason:  TypeError: fetch failed
//     at Object.fetch (node:internal/deps/undici/undici:11576:11)
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
//   cause: Error: getaddrinfo ENOTFOUND 1jsonplaceholder.typicode.com
//       at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
//     errno: -3008,
//     code: 'ENOTFOUND',
//     syscall: 'getaddrinfo',
//     hostname: '1jsonplaceholder.typicode.com'
//   }
// }