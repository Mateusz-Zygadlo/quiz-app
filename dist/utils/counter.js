export function counter() {
    let count = 0;
    function increment() {
        return count += 1;
    }
    function decrement() {
        return count -= 1;
    }
    function reset() {
        count = 0;
    }
    function getCount() {
        return count;
    }
    return {
        increment,
        decrement,
        reset,
        getCount
    };
}
