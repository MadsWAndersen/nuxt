import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "test"
declare module "/Users/welander/developer/ucl/nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}