function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchStuff() {
  await wait(1000);
  return 'Success';
}

export async function fetchWithError() {
  await wait(1000);
  throw new Error('Sorry, bad fetch');
}
