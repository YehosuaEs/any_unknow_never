const world = 'Hello world';

function hello(who: string = world): string {
  const hello = 'Hola como estas estoy compilando con y sin start';
  return `${hello} ${who}! `;
}

console.log(hello(world));
