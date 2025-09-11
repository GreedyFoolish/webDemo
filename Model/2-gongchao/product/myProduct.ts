export interface Chair {
    sitOn(): string
}
export interface Sofa {
    lieOn(): string
}
export interface Table {
    putOn(thing: string): string
}