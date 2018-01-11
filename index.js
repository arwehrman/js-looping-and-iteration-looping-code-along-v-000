function printBadges(array){
  for (let i = 0; i < array.length; i++) {
      employee = array[i]
      console.log(`Welcome ${employee}! You are employee #${i + 1}.`)
  }
  return array
}
