export async function getArticles() {
  try {
    let articles = await fetch('https://newsapi.org/v2/everything?q=&apiKey=1813e53332c848849ab67991e36db2a2');
    let result = await articles.json();
    articles = null;
    return result.totalResults;
  } catch (error) {
    console.log(error);
  }
}