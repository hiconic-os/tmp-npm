import "@hiconic-os/tribefire.js--tf-js"
import '@hiconic-os/com.braintribe.gm--essential-meta-data-model';
//import '@hiconic-os/com.braintribe.gm--meta-model';

import { sayHello } from '@hiconic-os/hello-world-lib';
import { sayHello as sayHello2 } from '@hiconic-os/hello-world-lib2';

import { sayHelloNpmjs } from '@dev.hiconic/hello-world-npmjs-lib'

import { GenericEntity } from "@hiconic-os/com.braintribe.gm--root-model"
import { AddManipulation } from "@hiconic-os/com.braintribe.gm--manipulation-model"

const hello = sayHello();
const hello2 = sayHello2();

const helloNpmjs = sayHelloNpmjs();

console.log(hello); // Outputs: Hello, World!
console.log(hello2); // Outputs: Hello, World!

console.log(helloNpmjs);

console.log("GE signature: " + GenericEntity.getTypeSignature());
console.log("Add man signature: " + AddManipulation.getTypeSignature());
console.log("EnumType Symbol: " + $tf.Symbol.enumType.description);



