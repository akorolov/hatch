import { persisted } from 'svelte-persisted-store'

export const gold_earned = persisted<number>("gold_earned", 0)
export const gold_spent = persisted<number>("gold_spent", 0)

