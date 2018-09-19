class Sorter {
  constructor() { //конструктор
    this._arr=[];
    this._len=0;
  }

  add(element) { // добавление элемент
     this._arr.push(element);
     this._len++;
  }

  at(index) { //найти эл-т по индексу
      if (index<this._len && index>=0) {return this._arr[index];}
      else {return "Еhere is no element with such index";}
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
    	for (var i = 0; i < m-1; i++){ 
        for (var j = 0; j < m-1-i; j++){
          if (indices[j+1] < indices[j]){
            var t = indices[j+1]; 
            indices[j+1] = indices[j]; 
            indices[j] = t; 
          }
        }
      }  
       //indices.sort();
      let boof = [];
      var n = this._len;
      for (var i = 0; i < n; i++){
        for (var k = 0; k < m; k++){
          if (i===indices[k]) {boof.push(this._arr[i]);}
        }
      }
      m = boof.length;
      for (var i = 0; i < m-1; i++){ 
        for (var j = 0; j < m-1-i; j++){
          if (boof[j+1] < boof[j]){
            var t = boof[j+1]; 
            boof[j+1] = boof[j]; 
            boof[j] = t; 
          }
        }
      }  
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

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;