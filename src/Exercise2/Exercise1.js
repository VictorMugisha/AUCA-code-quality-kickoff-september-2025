function calculateAverage (numbers = []) {
    if(!Array.isArray(numbers) || numbers.length === 0){
        return 0
    }

    let sum = 0;
    let count = numbers.length;

    for (let i = 0; i < count; i++) {
        sum += numbers[i];
    }
    const average = sum / count;
    return average;
}