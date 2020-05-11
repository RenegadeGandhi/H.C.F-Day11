//The function solves Highest Common Factor by The Euclidean Algorithm

const hcf = ( firstNumber, secondNumber ) => {

    /* A base condition, return firstNumber if (secondNumber === 0) is set.*/
    if (secondNumber === 0) {
        return firstNumber;
    } else {

    // The remainder of parameters passed into hcf() is assigned to newNumber.
        let newNumber = firstNumber % secondNumber;

    /* The function hcf() is called with secondNumber and newNumber
    passed as parameters firstNumber and secondNumber respectively.
    The function undergoes this recursion till the base condition is met.
    */
        return hcf(secondNumber, newNumber);
    }
}

hcf(900, 600);