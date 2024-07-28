import { persisted } from 'svelte-persisted-store'

export const gold_earned = persisted<number>("gold_earned", 0)
export const gold_spent = persisted<number>("gold_spent", 0)

export const unlocked_shop = persisted<string[]>("unlocked_shop", [])

export const purchased_items = persisted<string[]>("purchased_items", [])

export const used_items = persisted<string[]>("used_items", [])
