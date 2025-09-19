const { delay } = require("./delay")
const { print } = require("./print")
const { data, delayTime } = require("./txt")
const len = data?.length ?? 0

async function run() {
    let index = 0
    while (index < len) {
        index++
        print(data, index)
        await delay(delayTime)
    }
}

run()