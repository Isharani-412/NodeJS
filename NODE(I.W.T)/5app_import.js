console.log("this is a main file app_module.js")
const average= require("./5module_export")
console.log(average.avg([3,6]))
console.log(average.name)
console.log(average.address)
