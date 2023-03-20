const baseUrl = process.env.API_URL;

export const getPosts = async () => {
  try {
    const url = `${baseUrl}/posts?populate=*`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('🚀 ~ file: posts.server.ts:11 ~ getPosts ~ error:', error);
  }
};

export const getPostByUrl = async (url: string) => {
  try {
    const apiUrl = `${baseUrl}/posts?filters[url]=${url}&populate=*`;

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
