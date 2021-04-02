const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((previousValue, func) => {
        return func(previousValue);
    }, comp);
}

export default compose;