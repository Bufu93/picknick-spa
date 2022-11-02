export const calcTotalPrice = (items) =>
    items.reduce((acc, prod) => (acc += prod.price), 0);
