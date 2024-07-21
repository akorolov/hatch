import { persisted } from 'svelte-persisted-store'

// First param `preferences` is the local storage key.
// Second param is the initial value.
export const preferences = persisted('preferences', {
  theme: 'light',
})


export function ClearStores() {
    localStorage.clear()
    console.log("local storage is cleared")
}



