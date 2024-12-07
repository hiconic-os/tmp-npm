import { T, hc } from "@dev.hiconic/tf.js_hc-js-api";
//import { T, hc } from "./hc-js-api.js";
const m = new T.Map(hc.reflection.STRING, hc.reflection.INTEGER);


m.set("a", 1);
m.set("b", 2);
console.log(m.get("a"));
const a = new T.Array(hc.reflection.INTEGER);
a.push(1);
console.log(a.at(0));
const s = new T.Set(hc.reflection.INTEGER);
s.add(1);
s.add(2);
console.log([...m]);

console.log("['a', 2]")