import "@hiconic-os/tribefire.js--tf-js"

import { sayHello } from '@hiconic-os/hello-world-lib';
import { sayHello as sayHello2 } from '@hiconic-os/hello-world-lib2';
import { GenericEntity } from "@hiconic-os/com.braintribe.gm--root-model"
import { AddManipulation } from "@hiconic-os/com.braintribe.gm--manipulation-model"

import AccessDescriptor = $tf.session.AccessDescriptor


const hello = sayHello();
const hello2 = sayHello2();

console.log(hello); // Outputs: Hello, World!
console.log(hello2); // Outputs: Hello, World!

console.log(GenericEntity.getTypeSignature());
console.log(AddManipulation.getTypeSignature());




