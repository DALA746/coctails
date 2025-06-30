export const normalizeIngredientsAndMeasure = (drink) => {
  let ingredientsArray = [];
  let measureArray = [];
  let ingredientsAndMeasure = [];

  for (var key in drink) {
    if (Object.prototype.hasOwnProperty.call(drink, key)) {
      let value = drink[key];
      if (key.includes('strIngredient')) {
        if (value !== null) {
          ingredientsArray.push(value);
        }
      }

      if (key.includes('strMeasure')) {
        if (value !== null) {
          measureArray.push(value);
        }
      }
    }
  }

  for (let i = 0; i < ingredientsArray.length; i++) {
    if (measureArray[i] !== undefined) {
      ingredientsAndMeasure.push(
        measureArray[i] + '\xa0' + ingredientsArray[i]
      );
    }
    ingredientsAndMeasure.push(ingredientsArray[i]);
  }
  return ingredientsAndMeasure;
};
