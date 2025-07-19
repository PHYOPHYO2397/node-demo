//Declare Arguments"
const command = process.argv[2];
const value = process.argv[3];
//file system
const fs = require("fs");
//file path
const filePath = "./todos.json";
const loadToDos = () => {
  try {
    const bufferToDos = fs.readFileSync(filePath);
    const stringToDos = bufferToDos.toString();
    const JSONToDos = JSON.parse(stringToDos);
    return JSONToDos;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const saveToDos = (toDosArray) => {
  const toDosArrayJSON = JSON.stringify(toDosArray);
  fs.writeFileSync(filePath, toDosArrayJSON);
};

const addToDos = (value) => {
  //load current toDOs array
  const toDosArray = loadToDos();
  //add value to array
  toDosArray.push({ todo: value });
  //save array
  saveToDos(toDosArray);
  console.log("Added:" & value);
};

const readToDos = () => {
  const readToDo = loadToDos();
  readToDo.forEach((item, index) => {
    console.log(`${index + 1}:${item.todo}`);
  });
};

switch (command) {
  case "add":
    addToDos(value);
    break;

  case "read":
    readToDos();
    break;

  default:
    console.log("No proper Command");
}
