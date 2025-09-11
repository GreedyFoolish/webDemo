export interface publisherface {
    addObserver(observer: observerInterface): void
    removeObserver(observer: observerInterface): void
    notifyObserver(data: string): void
}

export interface observerInterface {
    updated(data: string): void
}