// main.mjs 모듈에서 math 모듈 가져오기
import * as math from "./math.mjs";
// export default로 내보낸 모듈 가져오기
// import math from "./math.mjs";

console.log(math.add(1, 2)); // 3
console.log(math.subtract(5, 3)); // 2
console.log(math.multiply(4, 5)); // 20
console.log(math.divide(10, 4)); // 2.5