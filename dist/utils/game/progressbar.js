export function progressbar({ delay, progressbar }) {
    let time = delay;
    let timer = setInterval(() => {
        let value = Number(progressbar.getAttribute('value'));
        value += 0.102;
        progressbar.setAttribute('value', `${value}`);
    }, time);
    function clear() {
        return clearInterval(timer);
    }
    return {
        clear
    };
}
