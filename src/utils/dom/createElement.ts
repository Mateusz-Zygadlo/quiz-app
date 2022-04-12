interface CreateElementProps {
  type: string;
  options?: {
    [key: string]: string;
  }
}

export function createElement({ type, options } : CreateElementProps): HTMLElement {
  const element = document.createElement(type)

  if(!options) {
    return element
  }
  Object.entries(options).forEach(([key, value]) => {
    if(key === 'dataset') {
      return Object.entries(value).forEach(([objKey, objValue]) => {
        element.dataset[objKey] = objValue
      })
    }

    if(key === 'class') {
      return element.classList.add(value)
    }
    if(key === 'content') {
      return element.innerText = value
    }

    return element.setAttribute(key, value)
  })

  return element
}