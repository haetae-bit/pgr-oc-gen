const rnd = Math.random();

export function getRandom(data: string[], amount = 1) {
  if (!data) { throw new Error("there's no data to pick from!"); }
  // shuffle list
  // https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
  let array = data.slice();
  for (let i = array.length; i--;) {
    const j = Math.floor(rnd * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  if (amount > array.length) {
    throw new Error("you're trying to find more stuff than what exists in the provided data");
  }
  return array.slice(0, amount);
}

export function randomFlip(): boolean {
  return rnd > 0.5 ? true : false;
}