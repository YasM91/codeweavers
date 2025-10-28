export const mockApi = <T>(data: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), 1500));
