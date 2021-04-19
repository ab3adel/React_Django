import axios from 'axios'

export const Test = () => {
    axios.get ('https://smartphonesrevealed.com/price-history-phones/')
         .then (res => console.log(res))
}