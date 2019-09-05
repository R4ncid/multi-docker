import { JestEnvironment } from "@jest/environment";

const fakeRepo = {
    'query': JestEnvironment.fn()
}


it('should be ok', () => {
    expect(true).toBe(true)
})