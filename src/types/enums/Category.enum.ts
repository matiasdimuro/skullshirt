export enum Category {
    REMERAS = "Remeras",
    PANTALONES = "Pantalones",
    BERMUDAS = "Bermudas",
    MUSCULOSAS = "Musculosas",
    CAMISAS = "Camisas"
}

export function getEnumByString(label: string): Category {
    if (label === "Remeras") return Category.REMERAS
    if (label === "Pantalones") return Category.PANTALONES
    if (label === "Bermudas") return Category.BERMUDAS
    if (label === "Musculosas") return Category.MUSCULOSAS
    return Category.CAMISAS
}