import { exponentationTest1 } from '..calculator/exponentation'
import { exponentationTest2 } from '/exponentation-test2.js'
import { exponentationTest3 } from '/exponentation-test3.js'
import { exponentationTest4 } from '/exponentation-test4.js'
import { exponentationTest5 } from '/exponentation-test5.js'
export function exponentation(n1, n2) {
    if (isNaN(n1) || n1 === undefined || n1 === null || n1 === Infinity || isNaN(n2) || n2 === undefined || n2 === null || n2 === Infinity) {
        console.error("test failed, input correct number")
    }
    else {

    }
    return Math.pow(n1, n2);
}
export class exponentationTest {
    static test1() {
        exponentationTest1(2, 3)
    }
    static test2() {
        exponentationTest2(2, -5)
    }
    static test3() {
        exponentationTest3(-2, 3)
    }
    static test4() {
        exponentationTest4(0, 0)
    }
    static test5() {
        var otv = exponentationTest5(NaN, undefined)
    }
}