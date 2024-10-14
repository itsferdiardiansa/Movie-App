import { cloneVNode } from 'vue'

export function cloneElement(element: any, restElements: any) {
  const itemProps =
    arguments.length && arguments[1] !== undefined ? arguments[1] : {}
  const itemListeners = arguments[2] || {}

  let node = cloneVNode(element, itemListeners)

  const _nodeProps$props = itemProps.props

  node.props = Object.assign({}, node.props, itemProps)

  return node
}
