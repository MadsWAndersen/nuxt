import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/welander/developer/ucl/nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}