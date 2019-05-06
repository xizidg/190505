import ajax from './ajax'

export const reqAddress= (geohash) => ajax(`/position/${geohash}`)
export const reqFoodTypes= () => ajax('/index_category')
export const reqShops= (latitude,longitude) => ajax('/shops',{latitude,longitude})
