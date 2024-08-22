import { queryOptions } from "@tanstack/react-query"

export type FactCategory = "math" | "trivia"

export function numberQuery(number: number, category: FactCategory) {
    return queryOptions({
        queryKey: ["numberFact", number, category],
        async queryFn({ queryKey }) {
            const [, number] = queryKey;
            const res = await fetch(`http://numbersapi.com/${number}/${category}`);
            return await res.text()
        }
    });
}