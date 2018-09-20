class Sorter {
  constructor() { //конструктор
    this._arr=[];
    this._len=0;
    this._compareFunct = (left, right) => left - right;
  }

  add(element) { // добавление элемент
     this._arr.push(element);
     this._len++;
  }

  at(index) { //найти эл-т по индексу
      if (index<this._len && index>=0) {return this._arr[index];}
      else {return "There is no element with such index";}
  }

  get length() { // не проходит тест
    return this._len;
  }

  toArray() { 
 //   console.log(this._arr); // функция вывода на печать
      return this._arr;
  }

  sort(indices=[]) {
    if (indices.length===1 || indices.length===0) {
      return this._arr;
    }
    else {
      var m = indices.length;
      const FunctSort = (left, right) => left - right;
      /*for (var i = 0; i < m-1; i++){ //сортировка входящего массива
        for (var j = 0; j < m-1-i; j++){
          if (indices[j+1] < indices[j]){
            var t = indices[j+1]; 
            indices[j+1] = indices[j]; 
            indices[j] = t; 
          }
        }
      } */ 
      indices.sort(FunctSort); //сортировка входящего массива
      let boof = [];
      var n = this._len;
      for (var i = 0; i < n; i++){
        for (var k = 0; k < m; k++){
          if (i===indices[k]) {boof.push(this._arr[i]);}
        }
      }
      boof.sort(this._compareFunct); // сортировка буферного массива по функции  
      var j=0;
      m = indices.length;
		  for (var i = 0; i < n; i++){
        for (var k = 0; k < m; k++){
          if (i===indices[k]) {this._arr[i]=boof[j]; j++;}
        }
      }
    }
  return this._arr;
  }

  setComparator(compareFunction = (left, right) => left - right) {
    this._compareFunct = compareFunction;    
  } 
}

module.exports = Sorter;