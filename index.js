function printBadges(employees){
  for (let i = 0; i < employees.length; i++) {
      employee = employees[i]
      console.log(`Welcome ${employee}! You are employee #${i + 1}.`)
  }
  return employees
}

function tailsNeverFails() {
  return Math.random() >= .5;
}
  while (tailsNeverFails()) {
    console.log('You got 0 tails in a row!')
  }
