// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {return cats.push(name)}

let name = "Ralph"

function destructivelyPrependCat(name2){return cats.unshift(name2)}

let name2 = "Gary"

function destructivelyRemoveLastCat() {return cats.pop()}

function destructivelyRemoveFirstCat() {return cats.shift()}

function appendCat() {return [...cats, "Broom"]}

function prependCat() {return ["Arnold", ...cats]}

function removeLastCat() {return cats.slice(0, -1)}

function removeFirstCat() {return cats.slice(1)}