/*

You're looking through different hex codes, and having trouble telling the difference between #000001 and #100000

We need a way to tell which is red, and which is blue!

That's where you create hex color !!!

It should read an RGB input, and return whichever value (red, blue, or green) is of greatest concentration!

But, if multiple colors are of equal concentration, you should return their mix!

red + blue = magenta

green + red = yellow

blue + green = cyan

red + blue + green = white
One last thing, if the string given is empty, or has all 0's, return black!

Examples:

codes = "087 255 054" -> "green"
codes = "181 181 170" -> "yellow"
codes = "000 000 000" -> "black"
codes = "001 001 001" -> "white"

https://www.codewars.com/kata/57e17750621bca9e6f00006f/train/javascript

*/

function hexColor(codes) {
  if (!codes || codes.trim() === '') return 'black';

  // Convertir el string a un array de números
  const [r, g, b] = codes.split(' ').map(Number);

  // Si todos son 0, es negro
  if (r === 0 && g === 0 && b === 0) return 'black';

  // Crear un array con los valores y sus respectivos colores
  const colors = [
    { name: 'red', value: r },
    { name: 'green', value: g },
    { name: 'blue', value: b }
  ];

  // Obtener el valor máximo entre r, g y b
  const max = Math.max(r, g, b);

  // Filtrar los colores que tienen el valor máximo
  const maxColors = colors.filter(c => c.value === max);

  // Si hay uno solo con valor máximo, retornamos su nombre
  if (maxColors.length === 1) return maxColors[0].name;

  // Si hay 2 o más, vemos qué mezcla corresponde
  const names = maxColors.map(c => c.name).sort().join('+');

  const mixes = {
    'blue+green': 'cyan',
    'green+red': 'yellow',
    'blue+red': 'magenta',
    'blue+green+red': 'white'
  };

  return mixes[names];
}
