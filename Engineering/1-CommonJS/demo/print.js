async function print(data, index) {
    console.clear()
    console.log(data.substring(0, index))
}

module.exports = {
    print
}