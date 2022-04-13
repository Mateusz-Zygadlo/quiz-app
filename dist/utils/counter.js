export function counter() {
    let count = 0;
    function increment() {
        return count += 1;
    }
    function setCount(num) {
        return count = num;
    }
    function reset() {
        count = 0;
    }
    function getCount() {
        return count;
    }
    return {
        increment,
        reset,
        getCount,
        setCount
    };
}
