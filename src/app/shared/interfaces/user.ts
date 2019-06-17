export interface User {
  id: number
  name: string
  username: string
  email: string
  token?: string
  role: string
  password: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  treesIds? : number[]
}