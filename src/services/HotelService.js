import axios from 'axios';
import Hotel from '../models/Hotel';
import HotelReview from '../models/HotelReview';
import LoaderService from './LoaderService';

class HotelService {
    constructor(){
      this.loader = LoaderService();
      this._baseUrl = process.env.BASE_URL;
      console.log(`HotelService > baselUrl: ${this._baseUrl}`)
    }

    list(params = {}){
      params = {
        params,
        count: params.count || 5
      }

      this.loader.start();
      return axios.get(`${this._baseUrl}/api/hotels`, {params}).then(response => {
        console.log('HotelService > list', response.data);
        this.loader.stop();
        return Promise.resolve(response.data.map(hotel => new Hotel(hotel)));
      }).catch(error => {
        console.log("Error HotelService > list", error.response.data);
        this.loader.stop();
        return Promise.reject(error.response.data.error);
      });
    }

    fetchReviews(hotelId){
      const params = {
        hotel_id : hotelId
      }
      this.loader.start();
      return axios.get(`${this._baseUrl}/api/reviews`, {params}).then(response => {
        console.log('HotelService > fetchReviews', response.data);
        this.loader.stop();
        return Promise.resolve(response.data.map(hotel => new HotelReview(hotel)));
      }).catch(error => {
        console.log("Error HotelService > fetchReviews", error.response.data);
        this.loader.stop();
        return Promise.reject(error.response.data.error);
      });
    }
}

let service = new HotelService();
export default function() {
    return service;
}