import { hc, T, session} from "@dev.hiconic/tf.js_hc-js-api";

import { sayHelloNpmjs } from '@dev.hiconic/hello-world-npmjs-lib'
import { sayHelloNpmjs as sayHelloNpmjs2 } from '@dev.hiconic/hello-world-npmjs-lib2'

import { GenericEntity } from "@dev.hiconic/gm_root-model"
import { AddManipulation, Manipulation } from "@dev.hiconic/gm_manipulation-model"

import { set, integer } from "@dev.hiconic/hc-js-base";

import { Person } from "@dev.hiconic/gm_test-model"

export function foo() {

}

const m = new T.Map(hc.reflection.STRING, hc.reflection.INTEGER);

function mapIt(): T.Map<string, number> {
    m.set("a", 1);
    return m;
}

const mm = new T.Map();
mm.set("a", 1n);

const arr: number[] = [1, 2, 3];
const elem  = arr.slice(...arr);
console.log("Elem");
console.log(elem);

const xx: integer = 5;

const helloNpmjs = sayHelloNpmjs();
const helloNpmjs2 = sayHelloNpmjs2();

console.log();
console.log(helloNpmjs); // Outputs: Hello, World (NPMJS)!
console.log(helloNpmjs2); // Outputs: Hello, World (NPMJS) (published by GitHub Action)!

console.log();
console.log(GenericEntity.getTypeSignature());
console.log(AddManipulation.getTypeSignature());

/*
const comparison = T.com.braintribe.model.query.conditions.Conjunction.create();
console.log();
console.log(comparison.EntityType().getTypeSignature());
*/

const mans: Manipulation[] = []

class ManListener implements hc.manipulation.ManipulationListener {
    onMan(m: Manipulation) {
        mans.push(m);
    }
}

const s = new session.BasicManagedGmSession();
s.listeners().add(new ManListener());

const am = s.create(AddManipulation);
am.itemsToAdd.set("a", 1);

const broken = mans[1] as AddManipulation;

console.log();
console.log(broken.itemsToAdd);

console.log("FINISHED");


const p = Person.create();
p.firstName = "John";
p.lastName = "Doe";
p.age = 42;

