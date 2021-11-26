const person={
    names:'piotr',
    age:26,
    location:{
        city:'Poznań',
        temp:14
    }

}

const {names, age, location} = person
console.log(`${names} is ${age} and live in ${location.city}`)

const book={
    title:'ego',
    author:'J.K.Rowling',
    publisher:{
        // name:'pingwin'
    }
}

const{name:publisherName='self-published'}= book.publisher
console.log(publisherName)

const item=['coffee', '2,5', '2,75', '3']

const [cof, , prize]= item

console.log(`${cof} cost ${prize}`)