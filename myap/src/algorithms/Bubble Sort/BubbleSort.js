const BLUE = 0,
    YELLOW = 1,
    PURPLE = 2,
    RED = 3,
    PINK = 5,
    GREEN = 4;

const BubbleSort = (array, arraySteps, colorSteps) => {
    let colorKey = [...colorSteps[0]];
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            // Show j as current in yellow
            arraySteps.push(array.slice());
            colorKey[j] = YELLOW;
            colorSteps.push(colorKey.slice());

            // Show j in purple
            arraySteps.push(array.slice());
            
            colorSteps.push(colorKey.slice());
            colorKey[j] = BLUE; // Revert color

            // Compare adjacent elements and swap if necessary
            if (array[j] > array[j + 1]) {
                // Before swap
                arraySteps.push(array.slice());
                
                colorSteps.push(colorKey.slice());

                // Perform swap
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                // After swap
                arraySteps.push(array.slice());
                colorKey[j] = GREEN;
                colorKey[j + 1] = GREEN; // Mark swapped elements as green
                colorSteps.push(colorKey.slice());
            }
        }
    }
    arraySteps.push(array.slice()); // Final sorted array
    colorSteps.push(colorKey.slice().fill(GREEN)); // Mark the entire array as green
};

export default BubbleSort;
