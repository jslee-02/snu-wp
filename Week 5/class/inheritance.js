class Animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`${this.name}이(가) 소리를 냅니다.`);
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
	}

	speak() {
		console.log(`${this.name}이(가) 멍멍 짖습니다.`);
	}

	fetch() {
		console.log(`${this.name}이(가) 공을 가져옵니다.`);
	}
}

class Cat extends Animal {
	constructor(name) {
		super(name);
	}

	speak() {
		console.log(`${this.name}이(가) 갸르릉거립니다.`);
	}

	box() {
		console.log(`${this.name}이(가) 상자 안에 들어갑니다.`);
	}
}
  
const dog = new Dog("쿠크");
const cat = new Cat("냥이");
console.log("Name: " + dog.name + ", " + cat.name);
dog.speak();
cat.speak();
dog.fetch();
cat.box();