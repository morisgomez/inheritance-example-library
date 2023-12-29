//////SUPERCLASS FOR MEDIA://////
class Media {
  constructor(title) {
    this._title = title; //_underscore means properties should not directly changed.
    this._isCheckedOut = false; //initial value of false from class creation.
    this._ratings = []; //empty array.
  } //closes Media parent class constructor.

  get title() { //accesses _title property of potential instance.
    return this._title;
  }

  get isCheckedOut() { //accesses _isCheckedOut property of potential instance.
    return this._isCheckedOut;
  }

  get ratings() { //accesses _ratings property of potential instance. only has a getter method, so it is not publicly writable. 
    return this._ratings;
  }

  set isCheckedOut(value) { //sets the _isCheckedOut property to whatever the parameter is passed. 
  //this makes the property publicly writable bc it can be changed outside class. 
    this._isCheckedOut = value; 
  }

  toggleCheckOutStatus() { //should be called to flip status when item is checked out or returned.
    if (this.isCheckedOut === true) //accessing property via getter.
    {
      this.isCheckedOut = false; //changes return value to opposite.
    }
    else if (this.isCheckedOut === false)
    {
      this.isCheckedOut = true; //changes return value to opposite.
    }
  } //closes method.

  getAverageRating() { //not a getter despite starting with "get"
    let sum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0); //no need to understand reduce w/ arrow function for now. 
    //just know it adds the array items.
    const arrayLength = this.ratings.length;
    return sum / arrayLength;
  } //closes method.

  addRating(newRating) {
    this.ratings.push(newRating); //accessing property of ratings via getter.
  } //closes method.
} //closes Media parent class.
//note: all methods in parent class will be automatically passed down to child classes when extended.





//////SUBCLASS FOR BOOK://////
class Book extends Media {
  constructor(title, author, pages) { //author and pages properties are not extended from superclass.
    super(title); //calls super class to set title property in object created from this subclass.
    this._author = author; //not part of super class.
    this._pages = pages; //not part of super class.
  } //closes constructor.

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
} //closes subclass Book.





//////SUBCLASS FOR MOVIE://////
class Movie extends Media {
  constructor(title, director, runTime) { //director and runTime properties are not extended from superclass.
    super(title); //calls super class to set title property in object created from this subclass.
    this._director = director; //not part of super class.
    this._runTime = runTime; //not part of super class.
  } //closes constructor.

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
} //closes subclass Movie.





//////////////////////////////////////
//////1) CREATE A BOOK INSTANCE://////
//////////////////////////////////////

const historyOfEverything = new Book("A Short History of Nearly Everything", "Bill Bryson", 544);
console.log(historyOfEverything);

//2) Call.toggleCheckOutStatus() on the historyOfEverything instance:
historyOfEverything.toggleCheckOutStatus(); //call to flip status of ischeckedout.
console.log(historyOfEverything.isCheckedOut); //is true bc of above object call.

//3) Call.addRating() three times on historyOfEverything with inputs of 4, 5, and 5:
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

//4) Call.getAverageRating() on historyOfEverything. Log the result to the console:
//should be (4 + 5 + 5)/3 = 4.666
historyOfEverything.getAverageRating(); //should be 4.66.
console.log(historyOfEverything.getAverageRating()); //prints value of 4.66.





//////////////////////////////////////
//////1) CREATE A MOVIE INSTANCE://///
//////////////////////////////////////
const speed = new Movie("Speed", "Jan de Bont", 116);

//2) flip the checkout status of object:
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut); //note: getters + setters can be called w/o parethesis; other methods need parethesis.

//3) add 3 ratings to the movie instance.
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

//4) get average rating of movie instance ratings.
speed.getAverageRating();
console.log(speed.getAverageRating()); //prints 2.3333.

//5) testing setter method in superclass on movie instance. 
console.log(speed.isCheckedOut); //status = true.
speed.isCheckedOut = false; //sets _isCheckedOut to false.
console.log(speed.isCheckedOut); //calling the setter above sets status to false.
//it did not flip the status like the toggleCheckOutStatus method; 2 different calls.
