import { persisted } from 'svelte-persisted-store'

export const sidebar_on = persisted<boolean>("sidebar_on", false)

export const unlocked_tabs = persisted<string[]>("unlocked_tabs", [])

export const well_unlocked = persisted<boolean>("well_unlocked", false)

export const standard_password = "5TandARdPA55w0rd"