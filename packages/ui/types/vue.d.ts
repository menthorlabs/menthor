/* eslint-disable no-unused-vars */

export {};

declare global {
  const withCtx: typeof import("vue")["withCtx"];
  const withDirectives: typeof import("vue")["withDirectives"];
  const withKeys: typeof import("vue")["withKeys"];
  const withMemo: typeof import("vue")["withMemo"];
  const withModifiers: typeof import("vue")["withModifiers"];
  const withScopeId: typeof import("vue")["withScopeId"];
  const onActivated: typeof import("vue")["onActivated"];
  const onBeforeMount: typeof import("vue")["onBeforeMount"];
  const onBeforeUnmount: typeof import("vue")["onBeforeUnmount"];
  const onBeforeUpdate: typeof import("vue")["onBeforeUpdate"];
  const onDeactivated: typeof import("vue")["onDeactivated"];
  const onErrorCaptured: typeof import("vue")["onErrorCaptured"];
  const onMounted: typeof import("vue")["onMounted"];
  const onRenderTracked: typeof import("vue")["onRenderTracked"];
  const onRenderTriggered: typeof import("vue")["onRenderTriggered"];
  const onServerPrefetch: typeof import("vue")["onServerPrefetch"];
  const onUnmounted: typeof import("vue")["onUnmounted"];
  const onUpdated: typeof import("vue")["onUpdated"];
  const computed: typeof import("vue")["computed"];
  const customRef: typeof import("vue")["customRef"];
  const isProxy: typeof import("vue")["isProxy"];
  const isReactive: typeof import("vue")["isReactive"];
  const isReadonly: typeof import("vue")["isReadonly"];
  const isRef: typeof import("vue")["isRef"];
  const markRaw: typeof import("vue")["markRaw"];
  const proxyRefs: typeof import("vue")["proxyRefs"];
  const reactive: typeof import("vue")["reactive"];
  const readonly: typeof import("vue")["readonly"];
  const ref: typeof import("vue")["ref"];
  const shallowReactive: typeof import("vue")["shallowReactive"];
  const shallowReadonly: typeof import("vue")["shallowReadonly"];
  const shallowRef: typeof import("vue")["shallowRef"];
  const toRaw: typeof import("vue")["toRaw"];
  const toRef: typeof import("vue")["toRef"];
  const toRefs: typeof import("vue")["toRefs"];
  const triggerRef: typeof import("vue")["triggerRef"];
  const unref: typeof import("vue")["unref"];
  const watch: typeof import("vue")["watch"];
  const watchEffect: typeof import("vue")["watchEffect"];
  const watchPostEffect: typeof import("vue")["watchPostEffect"];
  const watchSyncEffect: typeof import("vue")["watchSyncEffect"];
  const isShallow: typeof import("vue")["isShallow"];
  const effect: typeof import("vue")["effect"];
  const effectScope: typeof import("vue")["effectScope"];
  const getCurrentScope: typeof import("vue")["getCurrentScope"];
  const onScopeDispose: typeof import("vue")["onScopeDispose"];
  const defineComponent: typeof import("vue")["defineComponent"];
  const defineAsyncComponent: typeof import("vue")["defineAsyncComponent"];
  const resolveComponent: typeof import("vue")["resolveComponent"];
  const getCurrentInstance: typeof import("vue")["getCurrentInstance"];
  const h: typeof import("vue")["h"];
  const inject: typeof import("vue")["inject"];
  const hasInjectionContext: typeof import("vue")["hasInjectionContext"];
  const nextTick: typeof import("vue")["nextTick"];
  const provide: typeof import("vue")["provide"];
  // const defineModel: typeof import('vue')['defineModel']
  // const defineOptions: typeof import('vue')['defineOptions']
  // const defineSlots: typeof import('vue')['defineSlots']
  const toValue: typeof import("vue")["toValue"];
  const useModel: typeof import("vue")["useModel"];
  const useAttrs: typeof import("vue")["useAttrs"];
  const useCssModule: typeof import("vue")["useCssModule"];
  const useCssVars: typeof import("vue")["useCssVars"];
  const useSlots: typeof import("vue")["useSlots"];
  const useTransitionState: typeof import("vue")["useTransitionState"];
}

// @ts-ignore
declare global {
  // @ts-ignore
  export type {
    Component,
    ComponentPublicInstance,
    ComputedRef,
    ExtractPropTypes,
    ExtractPublicPropTypes,
    InjectionKey,
    PropType,
    Ref,
    MaybeRef,
    MaybeRefOrGetter,
    VNode,
  } from "../../../node_modules/vue";
}
