type TFormarCurrencyParameter = {
    price: number,
    currency: string
}
export function formatCurrency({ price, currency }: TFormarCurrencyParameter) {
    const formatter = Intl.NumberFormat('es-AR', {
        style: "currency",
        currency: currency,
    }) 
    return formatter.format(price)
}