export const addNumbers = async (x: number, y: number) => {
  try {
    const url = new URL('http://localhost:8080/api/add');
    url.searchParams.append('x', String(x));
    url.searchParams.append('y', String(y));
    console.log({ url: url.toString() });
    const response = await fetch(url.toString());
    const result: { status: string, data: number } = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error adding numbers:', error);
  }
};

