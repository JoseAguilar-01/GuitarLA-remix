const baseUrl = process.env.API_URL;

export const getGuitars = async () => {
  try {
    const url = `${baseUrl}/guitars?populate=*`;

    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('🚀 ~ file: guitars.server.ts:11 ~ getGuitars ~ error:', error);
  }
};

export const getGuitarByUrl = async (url: string) => {
  try {
    const apiUrl = `${baseUrl}/guitars?filters[url]=${url}&populate=*`;

    const response = await fetch(apiUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(
      '🚀 ~ file: guitars.server.ts:23 ~ getGuitarByUrl ~ error:',
      error
    );
  }
};
