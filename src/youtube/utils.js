const AsyncLoop = async (arr, fn) => {
    const ids = [];
    let id;
    for (let index = 0; index < arr.length; index++) {
        id = await fn(arr[index]);
        ids.push(id);
    }
    return ids;
}

module.exports = { AsyncLoop }