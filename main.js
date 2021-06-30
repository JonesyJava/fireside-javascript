// write a function that will output 100 through 0

function revCount(){
    for(let i = 100; i > 0; i--){
      console.log(i)
    }
  
    for(let i = 0; i <= 100; i++){
      console.log(100 - i)
    }
  
  }
  
  
  
  
  //write a function that will take in 2 params, one is a start num, the other is the limit num. Console log every number between the 2. Assume the 2nd number will always be larger than the first
  
  
  function varLoop(start, condition){
    //write a forloops using these params
    for (let i = start; i < condition; i++) {
      console.log(i)
    }
  }
    varLoop(1,25)
    varLoop(25, 50)
    varLoop(30, 70)
  
  
    let peeps = [{
      name: 'D$',
      role: 'Instruct'
    },
    {
      name: 'Harrison',
      role: 'Instruct'
    },
    {
      name: 'Brittany',
      role: 'Admin'
    },
    {
      name: 'Mark',
      role: 'Instruct'
    },
    {
      name: 'Jimmy',
      role: 'Tester'
    }]
    
  // write a function that will take in an array of objects, console log custom statements for each role:
  // Instruct role should say 'Welcome (role) (name).'
  // Admin role should say 'Welcome (role) (name), Have a great day.'
  // Any other role should say 'Not a codeworks employee.'
  
  function Greet(data){
    for(let i = 0; i < data.length; i++){
      let person = data[i]
      if(person.role ==  "Instruct"){
        console.log(`Hello ${person.role} ${person.name}.`)
      } else if ( person.role == 'Admin'){
        console.log('Hello' + person.role + person.name +  'Have a Great day.')
        console.log(`Hello ${person.role} ${person.name}, Have a Great day.`)
      } else {
        console.log(person.name +` is not a codeworks employee`);
      }
    }
    
    data.forEach(p => {
      if(p.role ==  "Instruct"){
        console.log(`Hello ${p.role} ${p.name}`)
      } else if ( p.role == 'Admin'){
        console.log(`Hello ${p.role} ${p.name}, Have a great day`)
      } else {
        console.log(p.name +' is not a codeworks employee');
      }
    })
  
    data.forEach(p => { 
      p.role ==  "Instruct" ? console.log(`Hello ${p.role} ${p.name}`) : 
      p.role == 'Admin' ? console.log(`Hello ${p.role} ${p.name}, Have a nice day`) : console.log(p.name + 'is not a codeworks employee');})
  }
  
  
  Greet(peeps)
  
  
  
  // write a function that will take in a num and console log false if num is odd or true if num is even from 0 - num
  
  function evenOrOdd(num){
  
    for(let i = 0; i < num; i++){
      if( i % 2 == 1){
        console.log(false)
      }else {
        console.log(true)
      }
      
      //no need to do if statement if youre just doing true/false 
      console.log(i%2 == 0)
    }
  }
  
  evenOrOdd(6)
  
  
  //given a basket of items with name, type, price and quantity, write a function that will return the total cost of the basket. 
  //One thing to note is that different types are taxed differently. 
  //Vegetables and fruit have a tax of 7% while meat has a tax of 9%. Everything else is taxed at 8%.
  //how could we use a switch to solve this.
  
  let basket = [
    {
      name: "Apple",
      type: 'Fruit',
      price: 3,
      quantity: 7
    },
    {
      name: "Carrot",
      type: 'Vegetable',
      price: 1,
      quantity: 4
    },
    {
      name: "Banana",
      type: 'Fruit',
      price: 2.50,
      quantity: 5
    },
    {
      name: "Lettuce",
      type: 'Vegetable',
      price: 6,
      quantity: 1
    },
    {
      name: "Steak",
      type: 'Meat',
      price: 27,
      quantity: 3
    },
    {
      name: "D$ Special",
      type: 'Other',
      price: 40,
      quantity: 9
    }
    ]
  
    function cartTotal(items){
      let total = 0
  
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        switch(item.type){
          case 'Vegetable':
          case 'Fruit':
            total += ((item.price * item.quantity) * 1.07)
            break;
          case 'Meat':
            total += ((item.price * item.quantity) + ((item.price * item.quantity) * .09)  )
            break;
          default:
            total += ((item.price * item.quantity) + ((item.price * item.quantity) * .08)  )
            break;
        }
        
      }
  
      // items.forEach(item=>{
      //   switch(item.type){
      //     case 'Vegetable':
      //     case 'Fruit':
      //       total += ((item.price * item.quantity) + ((item.price * item.quantity) * .07)  )
      //       break;
      //     case 'Meat':
      //       total += ((item.price * item.quantity) + ((item.price * item.quantity) * .09)  )
      //       break;
      //     default:
      //       total += ((item.price * item.quantity) + ((item.price * item.quantity) * .08)  )
      //       break;
      //   }
      //   })
        console.log(total)
    }
    
    cartTotal(basket)
  