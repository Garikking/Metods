const brothers = [
    {race: "Hobbit", height: 110, age: 45, name: "Frodo Baggins"},
    {race: "Human", height: 185, age: 46, name: "Aragorn"},
    {race: "Elf", height: 189, age: 110, name: "Legolas"},
    {race: "Dwarf", height: 140, age: 150, name: "Gimly"},
    {race: "Human", height: 195, age: 200, name: "Gandalf"}
];
// Пример 1: map - возвращает новый массив, 
// созданный путем применения заданной функции к каждому элементу исходного массива, Этот метод не изменяет исходный массив 
const names = brothers.map ((element) => element.height);
console.log(names);
const ages = brothers.map((element) => element.age);
console.log(ages)
// Пример 2:
const racesNames = brothers.map((brother) => brother.race + " " + brother.name);
console.log(racesNames)
// Пример 3:
// Высокий-это выше или равно 170
// Маленький - это ниже 170
// Массив из слов [маленький, высокий, высокий, маленький, высокий]
const size = brothers.map((brother) => {
    if  (brother.height  >= 170) {
        return "Высокий";
    }
    return "Маленький";
});
console.log(size);
const sizesVer2 = brothers.map((brother) => brother.height >= 170 ? "Высокий" : "Маленький")
console.log(sizesVer2)
// Пример 4: Метод For each изменяет исходный массив
brothers.forEach((brother) => brother.age += 1);
console.log(brothers);
// Пример 5: 
brothers.forEach((brother) =>brother.name = brother.name.toLowerCase() );
console.log(brothers);
// Пример 6: Метод reduce

let sum = 0; 
  for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
  }
  console.log(sum);


const sum2 = ages.reduce((acc, current) => acc + current, 0);
console.log(sum2)
// [ 45, 46, 110, 150, 200 ]
  // iteration -- acc -- current 
  // 1         -- 0   -- 45
  // 2         -- 45  -- 46
  // 3         -- 91  -- 110
  // 4         -- 201 -- 150
  // 5         -- 351 -- 200
  // сумммируем и возвращаем значение аккумулятора 551

  // функция, которая будет применяться к элементам массива. Она принимает четыре аргумента:

 // Аккумулятор (accumulator) - значение, которое накапливает результат применения функции.
 // Текущий элемент массива (currentValue).
 // Текущий индекс (currentIndex) элемента в массиве.
 // Сам массив (array), к которому применяется метод reduce.
 // Функция callback должна возвращать новое значение аккумулятора после обработки текущего элемента.

 // initialValue (необязательный): Начальное значение аккумулятора. Если это значение указано,
 //  то оно будет использовано в качестве начального значения аккумулятора при первом вызове функции callback.
 // Если initialValue не указан, то первый элемент массива станет начальным значением аккумулятора.

 const totalHeight = brothers.reduce((acc, brother) => acc + brother.height, 0);
  console.log(totalHeight); 

 const totalHeight2 = brothers
 .map((brother) => brother.height) // получили массив ростов 
 .reduce((acc, height) => acc + height, 0);
console.log(totalHeight2);

//Объединяем все имена через пробел
const namesSTR = brothers
.map((brother) => brother.name) 
.reduce((acc, name) =>acc + name + " ",'' );
console.log(namesSTR.trim());

// 1. map 
  // принимает один обязательный аргумент - функцию обратного вызова (callback function),
  //  которая будет вызываться для каждого элемента исходного массива.
  // Эта функция будет принимать три аргумента:

  // Текущий элемент массива.
  // Индекс текущего элемента.
  // Сам массив, по которому происходит итерация.
  // - не изменяет старый массив === не мутирующий метод
  // - возвращает новый массив
  
  // 2. forEach пример array.forEach(function(currentValue, index, array) {});
  // array - массив, который нужно перебрать.
  // currentValue - текущий элемент массива на текущей итерации.
  // index (опционально) - индекс текущего элемента в массиве.
  // array (опционально) - сам массив, который перебирается.
  // метод позволяет перебирать элементы массива без необходимости использования циклов

  // - когда нужно сделать операцию для каждого элемента 
  // - например можем мутировать элементы массива
  // - может быть мутирующим 
  // - возвращает void 
  // - не создает новый массив и не возвращает значения. Он просто выполняет функцию для каждого элемента массива.
  
  // 3. reduce 
  // - сведение к какому-то знчению 
  // - возвращает какое-то значение 

  // Пример 7: Метод split
  let str = "Gandalf, Sauron, Saruman, Elrond, Tom Bombadil";
  const namesArr = str.split(", ");
  console.log(namesArr);

  // Пример 8: Метод join- объединение
  const newString = namesArr.join("#");
console.log(newString)