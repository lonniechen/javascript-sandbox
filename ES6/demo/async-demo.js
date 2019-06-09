const getUser = cb => {
    console.log(cb)
    setTimeout(() => {
      cb({ name: 'Max' })
    }, 2000)
  }
  
  getUser(user => {
    console.log(user.name) // Prints 'Max' after 2 seconds
  })