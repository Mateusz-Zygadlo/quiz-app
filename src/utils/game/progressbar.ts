interface ProgressbarProps {
  delay: number;
  progressbar: HTMLElement;
}

type ProgressbarType = {
  clear: () => void;
}

export function progressbar({ delay, progressbar }: ProgressbarProps): ProgressbarType {
  let time = delay
  let timer =   setInterval(() => {
    let value: number = Number(progressbar.getAttribute('value'))
    value += 0.102
    progressbar.setAttribute('value', `${value}`)
  }, time)

  function clear() {
    return clearInterval(timer)
  }

  return {
    clear
  }
}