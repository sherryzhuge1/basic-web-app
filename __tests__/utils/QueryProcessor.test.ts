import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });
    test("should return andrew ID", () => {
        const query = "andrew";
        const response: string = QueryProcessor(query);
        expect(response).toBe(("szhuge"));
    });
    test("should return name", () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe(("sherry"));
    });
    test('should operate numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
        expect(QueryProcessor("What is 10 minus 1?")).toEqual("9");
        expect(QueryProcessor("What is 10 multiplied by 2?")).toEqual("20");
        expect(QueryProcessor("What is 100 divided by 2?")).toEqual("50");
    });
});