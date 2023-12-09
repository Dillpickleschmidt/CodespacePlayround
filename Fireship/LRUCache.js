export class LRU {
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map() // maintains order of key, value pairs. Has more methods as well like .has(), .keys(), .delete(), .clear(), etc.
        // Also has .size property
        // this.cache = new Object() // does not maintain order of key, value pairs. Has less methods as well
    }

    getItem(key) {
        const item = this.cache.get(key)

        if (item) { // if item exists
            this.cache.delete(key) // delete item
            this.cache.set(key, item) // add item to end of cache
        }

        return item
    }

    putItem(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size >= this.capacity) {
            this.cache.delete(this.oldestItem)
        }
        this.cache.set(key, value)
    }

    get oldestItem() { // get is not nececssary, but let's you call as property instead of method
        // (this.OldestItem instead of this.OldestItem())
        this.cache.delete(this.cache.keys().next().value) // delete first item in cache
    }

}

// cache = new LRU(10)

// cache.putItem('a', 1)
// cache.putItem('b', 1)
// cache.putItem('c', 1)
// cache.putItem('d', 1)
// cache.putItem('e', 1)
// cache.putItem('f', 1)
// cache.putItem('g', 1)
// cache.putItem('h', 1)
// cache.putItem('i', 1)
// cache.putItem('j', 1)
// cache.putItem('k', 1)

// console.log(cache.getItem('b'))
// console.log(cache.getItem('a'))