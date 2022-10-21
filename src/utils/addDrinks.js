export const addDrinks = ({ drink, drinkCart, setDrinkCart, count }) => {

    const hasItem = drinkCart.filter((item) => item.drink.id === drink.id)[0]

    if (hasItem) {
        setDrinkCart([...drinkCart.filter(item => item.drink.id !== hasItem.drink.id), {
            ...hasItem,
            count: hasItem.count + count
        }])
    }
    else {
        setDrinkCart([...drinkCart, { drink, count }])
    }
}