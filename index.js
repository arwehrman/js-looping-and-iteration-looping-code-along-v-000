function printBadges(employee_array){
  for (let i = 0; i < employee_array.length; i++) {
      employee = employee_array[i]
      console.log(`Welcome ${employee}! You are employee #${i + 1}.`)
  }
  return employee_array
}
