import { persisted } from 'svelte-persisted-store'

type HatcherInfo = {
    counter: number,
    hatched: boolean,
}

const default_hatcher: HatcherInfo = {
    counter: 0,
    hatched: false,
}

export const unlocked_eggs = persisted<string[]>("unlocked_eggs", ["hatcher1"])

export const hatcher1 = persisted<HatcherInfo>("hatcher1", structuredClone(default_hatcher))

export const hatcher2 = persisted<HatcherInfo>("hatcher2", structuredClone(default_hatcher))

export const hatcher3 = persisted<HatcherInfo>("hatcher3", structuredClone(default_hatcher))