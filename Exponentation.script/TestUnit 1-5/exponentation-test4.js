if (isNaN(n1) || n1 === undefined || n1 === null || n1 === Infinity || isNaN(n2) || n2 === undefined || n2 === null || n2 === Infinity) {
    console.error("test failed, input correct number")
}
else {

}
let otv = exponentation(0, 0)
if (otv === 1) {
    console.log("Successful test" + otv)
}
else {
    console.error("Test failed" + otv)
}
return Math.pow(n1, n2);