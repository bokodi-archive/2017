let cache = new Map();

export function logOnce(log, key = 1) {
    if (!cache.has(key)) {
        console.log(log);
        cache.set(key, true);
    }
}
