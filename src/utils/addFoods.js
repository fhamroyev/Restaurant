export const addFoods = ({ food, cart, setCart, count }) => {

    const hasItem = cart.filter((item) => item.food.id === food.id)[0]

    if (hasItem) {
        setCart([...cart.filter(item => item.food.id !== hasItem.food.id), {
            ...hasItem,
            count: hasItem.count + count
        }])
    } else {
        setCart([...cart, { food, count }])
    }
}