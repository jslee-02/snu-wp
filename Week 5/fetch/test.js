// 의도한 대로 작동하지 않음
// 비동기 처리로 인해 두 번째 fetch가 먼저 실행될 수 있음
let postData;

fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		postData = data;
	});

const postURL = "https://jsonplaceholder.typicode.com/todos";

fetch(postURL, {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(postData),
})
	.then((response) => response.json())
	.then((data) => console.log(data));