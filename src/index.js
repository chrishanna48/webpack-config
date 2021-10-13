const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonStone: 4
}

const test = {
    ...elvenShieldRecipe,
    leather: 3,
    refinedMoonStone: 3
}

console.log(test);