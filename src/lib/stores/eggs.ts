import { persisted } from 'svelte-persisted-store'

type HatcherInfo = {
    counter: number,
    hatched: boolean,
    love: number,
}

const default_hatcher: HatcherInfo = {
    counter: 0,
    hatched: false,
    love: 0,
}

export function LoveLevel(love: number) {
    let level = Math.floor(love**(1/2))
    return level
}

export const unlocked_eggs = persisted<string[]>("unlocked_eggs", ["hatcher1"])

export const hatcher1 = persisted<HatcherInfo>("hatcher1", structuredClone(default_hatcher))
export const hatcher2 = persisted<HatcherInfo>("hatcher2", structuredClone(default_hatcher))
export const hatcher3 = persisted<HatcherInfo>("hatcher3", structuredClone(default_hatcher))
export const hatcher4 = persisted<HatcherInfo>("hatcher4", structuredClone(default_hatcher))
export const hatcher5 = persisted<HatcherInfo>("hatcher5", structuredClone(default_hatcher))
export const hatcher6 = persisted<HatcherInfo>("hatcher6", structuredClone(default_hatcher))
export const hatcher7 = persisted<HatcherInfo>("hatcher7", structuredClone(default_hatcher))
export const hatcher8 = persisted<HatcherInfo>("hatcher8", structuredClone(default_hatcher))
export const hatcher9 = persisted<HatcherInfo>("hatcher9", structuredClone(default_hatcher))
export const hatcher10 = persisted<HatcherInfo>("hatcher10", structuredClone(default_hatcher))
export const hatcher11 = persisted<HatcherInfo>("hatcher11", structuredClone(default_hatcher))
export const hatcher12 = persisted<HatcherInfo>("hatcher12", structuredClone(default_hatcher))
export const hatcher13 = persisted<HatcherInfo>("hatcher13", structuredClone(default_hatcher))
export const hatcher14 = persisted<HatcherInfo>("hatcher14", structuredClone(default_hatcher))
export const hatcher15 = persisted<HatcherInfo>("hatcher15", structuredClone(default_hatcher))
export const hatcher16 = persisted<HatcherInfo>("hatcher16", structuredClone(default_hatcher))
export const hatcher17 = persisted<HatcherInfo>("hatcher17", structuredClone(default_hatcher))
export const hatcher18 = persisted<HatcherInfo>("hatcher18", structuredClone(default_hatcher))
export const hatcher19 = persisted<HatcherInfo>("hatcher19", structuredClone(default_hatcher))