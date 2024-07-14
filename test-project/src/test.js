import { sayHello } from '@hiconic-os/hello-world-lib';
import { sayHello as sayHello2 } from '@hiconic-os/hello-world-lib2';


const hello = sayHello();
const hello2 = sayHello2();

console.log(hello); // Outputs: Hello, World!
console.log(hello2); // Outputs: Hello, World!