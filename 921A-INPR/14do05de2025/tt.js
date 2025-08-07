const fs = require("fs")

let strJSON = fs.readFileSync("./14do05de2025/tt.json", "utf-8")

let objJSON = JSON.parse(strJSON)

objJSON.push({"nome": "Jorge", "idade": 15, "Estado": "Alagoas"})

let str = JSON.stringify(objJSON)

fs.writeFileSync("./14do05de2025/tt.json", str)