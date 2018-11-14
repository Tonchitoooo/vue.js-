export default {
  bind(el, bindings, vnode) {
    //el.style.color = '#546f54'

    const arg = bindings.arg
    el.style[arg] = bindings.value
  }
}
