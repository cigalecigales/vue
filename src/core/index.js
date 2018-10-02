import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

initGlobalAPI(Vue)

// Vueのprototypeにプロパティを追加
Object.defineProperty(Vue.prototype, '$isServer', {
  // プロパティのゲッターとなる関数
  // プロパティにアクセスするとこの関数が引数なしでコール
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  // プロパティに関連づけられた値
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
