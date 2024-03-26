// ^ ANY
let variableTypeAny: any;

variableTypeAny = 10;
// console.log(variableTypeAny);
variableTypeAny = 'Hola';
// console.log(variableTypeAny);
variableTypeAny = true;
// console.log(variableTypeAny);
variableTypeAny = [1, 2, 3];
// console.log(variableTypeAny);
variableTypeAny = { nombre: 'Juan' };

function imprimir(valor: any): any {
  console.log(valor);
  return valor;
}

imprimir(variableTypeAny);

// ^ UNKNOW
let isUnknowValue: unknown;

isUnknowValue = 10.25;
function printUnknowValueNumber(valor: unknown): void {
  const value: number = valor as number;
  console.log(value);

  if (typeof valor === 'number') {
    console.log(valor + 3);
  }
}
printUnknowValueNumber(isUnknowValue);
console.log('--------------------------');

isUnknowValue = 'variable tipo string   ';
function printUnknowValueString(valor: unknown): void {
  const value: string = valor as string;
  console.log(value);

  if (typeof valor === 'string') {
    valor.trim();
    console.log('esto es una ' + valor);
  }
}
printUnknowValueString(isUnknowValue);
console.log('--------------------------');

isUnknowValue = true;
function printUnknowValueBoolean(valor: unknown): void {
  const value: boolean = valor as boolean;
  console.log(value);
  if (typeof valor === 'boolean') {
    if (valor === true) {
      console.log('hola');
    } else {
      console.log('adios');
    }
  }
}
printUnknowValueBoolean(isUnknowValue);
console.log('--------------------------');

isUnknowValue = [1, 2, 3];
function printUnknowValueArray(valor: unknown): void {
  if (Array.isArray(valor)) {
    valor.forEach((value: any, index: number, arr: any[]) => {
      console.log(`Índice ${index}: valor ${value}`);
      console.log('Array antes del push:', arr);
      arr.push((value += 10));
      console.log('Array después del push:', arr);
    });
  }
}
printUnknowValueArray(isUnknowValue);

isUnknowValue = { key1: 1, key2: 2, key3: 3 };
function printUnknowValueDictionary(valor: unknown): void {
  if (typeof valor === 'object' && !Array.isArray(valor) && valor) {
    console.log(valor);
    // const obj: Record<string, unknown> = valor;
    // console.log(obj['key1']);
  }
}

printUnknowValueDictionary(isUnknowValue);
// variableTypeUnknown = { nombre: 'Juan' };

// const value: unknown = 'Hello World';
// const someString: string = value as string;
// const otherString = someString.toUpperCase();
// console.log(otherString);
