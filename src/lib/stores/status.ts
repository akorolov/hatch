import { persisted } from 'svelte-persisted-store'

export const sidebar_on = persisted<boolean>("sidebar_on", false)

export const unlocked_tabs = persisted<string[]>("unlocked_tabs", [])