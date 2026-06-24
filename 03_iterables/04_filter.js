// const coding = ["js","ruby","java","python","cpp"]
// const value = coding.forEach((item)=>{
//   return item
// })
// console.log(value) // NOTE: FOREACH() DO NOT RETURN ANY VALUE
//THAT IS WHY FOREACH() IS NOT USED WHEN WE HAVE TO RETURN SOME VALUE
//WE USE FILTER() , MAP(), AND REDUCE()


//----FILTER METHOD ----//


// const nums = [1,2,3,4,5,6,7,8,9,10]

// const newans = nums.filter((item)=> item > 4) // IMPLECIT RETURN 
// console.log(newans)

// const newans = nums.filter((item)=> {
//   return item > 9        //EXPLICIT RETURN
// }) 
// console.log(newans)


const books = [
  {
    title: 'Book One', genre: 'Fiction',
    publish: 1981, edition: 2004
  },
  {
    title: 'Book Two', genre: 'Non-Fiction',
    publish: 1992, edition: 2008
  },
  {
    title: 'Book Three', genre: 'History',
    publish: 1999, edition: 2007
  },
  {
    title: 'Book Four', genre: 'Non-Fiction',
    publish: 1989, edition: 2010
  },
  {
    title: 'Book Five', genre: 'Science',
    publish: 2009, edition: 2014
  },
  {
    title: 'Book Six', genre: 'Fiction',
    publish: 1987, edition: 2010
  },
  {
    title: 'Book Seven', genre: 'History',
    publish: 1986, edition: 1996
  },
  {
    title: 'Book Eight', genre: 'Science',
    publish: 2011, edition: 2016
  },
  {
    title: 'Book Nine', genre: 'Biography',
    publish: 2003, edition: 2012
  },
  {
    title: 'Book Ten', genre: 'Fantasy',
    publish: 2015, edition: 2020
  }
];

let userbooks = books.filter((book) => {

   return book.genre === "History";
});

userbooks = books.filter((book)=> book.publish > 2000 && book.genre ==="History")

console.log(userbooks)

