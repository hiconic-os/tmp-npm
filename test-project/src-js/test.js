import "@hiconic-os/tribefire.js--tf-js";
import { sayHello } from '@hiconic-os/hello-world-lib';
import { sayHello as sayHello2 } from '@hiconic-os/hello-world-lib2';
import { sayHelloNpmjs } from '@dev.hiconic/hello-world-npmjs-lib';
import { sayHelloNpmjs as sayHelloNpmjs2 } from '@dev.hiconic/hello-world-npmjs-lib2';
import { GenericEntity } from "@hiconic-os/com.braintribe.gm--root-model";
import { AddManipulation } from "@hiconic-os/com.braintribe.gm--manipulation-model";
const hello = sayHello();
const hello2 = sayHello2();
console.log();
console.log(hello); // Outputs: Hello, World!
console.log(hello2); // Outputs: Hello, World (published by GitHub Action)!
const helloNpmjs = sayHelloNpmjs();
const helloNpmjs2 = sayHelloNpmjs2();
console.log();
console.log(helloNpmjs); // Outputs: Hello, World (NPMJS)!
console.log(helloNpmjs2); // Outputs: Hello, World (NPMJS) (published by GitHub Action)!
console.log();
console.log(GenericEntity.getTypeSignature());
console.log(AddManipulation.getTypeSignature());
