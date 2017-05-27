import axios from 'axios';
import Hotel from '../models/Hotel';

class HotelService {
    constructor(){
      this._baseUrl = process.env.BASE_URL;
      console.log(`HotelService > baselUrl: ${this._baseUrl}`)
    }

    list(params = {}){
      params = {
        params,
        count: params.count || 5
      }
      return axios.get(`${this._baseUrl}/api/hotels`, {params}).then(response => {
        console.info('HotelService > list', response.data);
        return Promise.resolve(response.data.map(hotel => new Hotel(hotel)));
      }).catch(error => {
        console.log("HotelService > list", error.response.data);
        return Promise.reject(error.response.data.error);
      });
    }
}

let service = new HotelService();
export default function() {
    return service;
}