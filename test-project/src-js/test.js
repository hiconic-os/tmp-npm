import { hc, T, session } from "@dev.hiconic/tf.js_hc-js-api";
import { sayHelloNpmjs } from '@dev.hiconic/hello-world-npmjs-lib';
import { sayHelloNpmjs as sayHelloNpmjs2 } from '@dev.hiconic/hello-world-npmjs-lib2';
import { GenericEntity } from "@dev.hiconic/gm_root-model";
import { AddManipulation } from "@dev.hiconic/gm_manipulation-model";
export function foo() {
}
const m = new T.Map(hc.reflection.STRING, hc.reflection.INTEGER);
function mapIt() {
    m.set("a", 1);
    return m;
}
const mm = new T.Map();
mm.set("a", 1n);
const arr = [1, 2, 3];
const elem = arr.slice(...arr);
console.log("Elem");
console.log(elem);
const xx = 5;
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
const mans = [];
class ManListener {
    onMan(m) {
        mans.push(m);
    }
}
const s = new session.BasicManagedGmSession();
s.listeners().add(new ManListener());
const am = s.create(AddManipulation);
am.itemsToAdd.set("a", 1);
const broken = mans[1];
console.log();
console.log(broken.itemsToAdd);
console.log("FINISHED");
