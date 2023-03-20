const baseUrl = process.env.API_URL;

export const getCourse = async () => {
  try {
    const url = `${baseUrl}/course?populate=*`;

    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('🚀 ~ file: curso.server.ts:5 ~ getCurso ~ error:', error);
  }
};
