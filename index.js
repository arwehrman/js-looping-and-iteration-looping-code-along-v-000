function printBadges(employee_array){
    for (let index = 0; index < employee_array.length; index++) {
        employee = employee_array[index]
        console.log(`Welcome ${employee}! You are employee #${index + 1}.`)
    }
    return employee_array
}
