export default class HotelReview {
    
    constructor(props) {
        this._hotelId = props.hotel_id || null;
        this._name = props.name || '';
        this._comment = props.comment || '';
        this._positive = props.positive || false;
    }

    get id(){
      return this._id;
    }

    get name (){
      return this._name;
    }

    get comment (){
      return this._comment;
    }

    get positive (){
      return this._positive;
    }
}