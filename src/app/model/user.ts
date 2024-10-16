export  interface User{
    firstname: String,
    lastname: String,
    email: String,
    domicilio: String,
    celular: String,
    documento: String,
    rol: String,
    area: String,
}
export interface PaginaUser{
    page: number
    data: User[]
    total: number
    perPage: number
    totalPage: number
}
