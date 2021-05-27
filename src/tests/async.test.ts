import { fetchStuff, fetchWithError } from '../asyncStuff';

test('the data is success', () => {
  return fetchStuff().then(data => {
    expect(data).toBe('Success');
  });
});

test('the data is success with await', async () => {
  const data = await fetchStuff();
  expect(data).toBe('Success');
});

test('the data is success with await', async () => {
  await expect(fetchStuff()).resolves.toBe('Success');
});

test('the fetch fails with an error', async () => {
  expect.hasAssertions(); // Ensure that at least one assertions will be called, so it will fail if the promise is not rejected
  try {
    await fetchWithError();
  } catch (e) {
    expect(e.message).toMatch(/Sorry/);
  }
});

test('the fetch fails with an error', async () => {
  await expect(fetchWithError().catch(e => e.message)).resolves.toMatch(
    /Sorry/
  );
});
