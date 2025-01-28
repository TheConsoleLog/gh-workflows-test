import { expect, test } from "vitest";

test('Test if a + a = 2 * a', () => {
  const a = 20;
  expect(a + a).toBe(2 * a);
})