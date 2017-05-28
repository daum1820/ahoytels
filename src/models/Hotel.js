import moment from 'moment';

export default class Hotel {
    
    constructor(props) {
        this._id = props.id || null;
        this._name = props.name || '';
        this._country = props.country ||'';
        this._city = props.city ||'';
        this._price = props.price ||0;
        this._images = props.images ||[];
        this._dateStart = props.date_start || new Date();
        this._dateEnd = props.date_end || new Date();
        this._stars = props.stars ||0;
        this._rating = props.rating ||0;
        this._description = props.description ||'';
        this._reviews = null;
        this._hasReviews = false;
    }

    get id(){
      return this._id;
    }

    get name (){
      return this._name;
    }

    get country (){
      return this._country;
    }

    get city (){
      return this._city;
    }

    get price (){
      return this._price;
    }

    get images (){
      return [].concat(this._images);
    }

    get dateStart(){
      return moment(this._dateStart).format('D.M.YYYY');
    }

    get dateEnd(){
      return moment(this._dateEnd).format('D.M.YYYY');
    }

    get stars (){
      return this._stars;
    }

    get rating (){
      return this._rating;
    }

    get description (){
      return this._description;
    }

    get reviews (){
      return this._reviews;
    }

    set reviews (reviews){
      this._reviews = reviews;
    }

    get hasReviews (){
      return this._hasReviews;
    }

    set hasReviews (hasReviews){
      this._hasReviews = hasReviews;
    }

    render(){
      console.log( `Rendering Hotel ${this.id}`)
    }

    clearReviews(){
      this._reviews = null;
    }

}