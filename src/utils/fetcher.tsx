const fetcher = (...args: any[]) => fetch(args[0]).then(res => res.json())

export default fetcher;