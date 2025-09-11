export interface iteratorInterface<T> {
    getNext(): T | undefined
    hasMore(): boolean
}

export interface collectionInterface<T> {
    createIterator(): iteratorInterface<T>
}