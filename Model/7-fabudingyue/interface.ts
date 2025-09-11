
export interface observerInterface {
    addObserver(topic: string): void
    removeObserver(topic: string): void
    updated(topic: string, data: string): void
}

export interface proxyInterface {
    addObserver(topic: string, observer: observerInterface): void
    removeObserver(topic: string, observer: observerInterface): void
    message(topic: string, msg: string)
}

export interface publishInterface {
    publish(topic: string, msg: string): void
}