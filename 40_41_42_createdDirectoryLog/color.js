export default{
  bind(el, bindings, vnode) {
    console.log('bind')
    el.style.color ='#546f54'
  },
  inserted(el, bindings, vnode){
    console.log('inserted')
  },

  updated(el, binding, vnode, oldVnode){
    console.log('update')
  },

  componentUpdated(el, binding, vnode,) {
    console.log('componentUpdate')
  },

  unbind() {
    console.log('unbind')
  }
}
