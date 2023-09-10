function findPairs(arr: number[], targetSum: number): void {
    const set = new Set<number>();

    for (const num of arr) {
        const complement = targetSum - num;
        if (set.has(complement)) {
            console.log(`Pair: ${num}, ${complement}`);
        }
        set.add(num);
    }
}

const arr: number[] = [1, 2, 3, 4, 5, 6];
const targetSum: number = 7;

findPairs(arr, targetSum);
