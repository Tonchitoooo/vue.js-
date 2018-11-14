export default {
  bind(el, bindings, vnode) {
    //el.style.color = '#546f54'
    el.style.color = bindings.value
  }
}
