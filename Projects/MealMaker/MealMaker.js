const menu = {
  _courses: {
    appetizers: [] ,
    mains: [] ,
    desserts: []
  },
  get appetizers(){

  },
  set appetizers(appetizerIn){

  },
   get mains(){

  },
  set mains(mainsIn){

  },
 get desserts(){

  },
  set desserts(dessertsIn){

  },
  get courses(){
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  addDishToCourse (courseName,dishName,dishPrice){
    const dish = {
      name: dishName,
        price: dishPrice,
    };
   this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
   const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal(){
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizers.price + mains.price + desserts.price;    return(`${appetizers.name},${mains.name},${desserts.name},Total Price: ${totalPrice}.`)
  }
};
menu.addDishToCourse('appetizers','Salad',3);
menu.addDishToCourse('appetizers','Soup',4);
menu.addDishToCourse('appetizers','Bread',2);
menu.addDishToCourse('mains','Beefsteak',8);
menu.addDishToCourse('mains','Noodles',6);
menu.addDishToCourse('mains','Rice',6);
menu.addDishToCourse('desserts','Ice cream',2);
menu.addDishToCourse('desserts','Cake',2);
menu.addDishToCourse('desserts','Popcorn',2);
let meal = menu.generateRandomMeal();
console.log(meal);
