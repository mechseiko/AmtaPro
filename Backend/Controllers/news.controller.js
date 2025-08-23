export async function generateNews(req, res, next) {
  try {
    let category = "sports";
    let lang = "en";

    let thisWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

    let url = `https://gnews.io/api/v4/top-headlines?from=${thisWeek}&lang=${lang}&category=${category}&apikey=${process.env.GNEWS_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    return res.status(200).json({
      successs: true,
      message: "news retrieved successfully",
      data,
    });
  } catch (err) {
    next(err);
  }
}

`Query Parameters
Parameter Name	Default Value	Description
category	general	This parameter allows you to change the category for the request. The available categories are : general, world, nation, business, technology, entertainment, sports, science and health.
lang	Any	This parameter allows you to specify the language of the news articles returned by the API. You have to set as value the 2 letters code of the language you want to filter.
See the list of supported languages.
country	Any	This parameter allows you to specify the country where the news articles returned by the API were published, the contents of the articles are not necessarily related to the specified country. You have to set as value the 2 letters code of the country you want to filter.
See the list of supported countries.
max	10	This parameter allows you to specify the number of news articles returned by the API. The minimum value of this parameter is 1 and the maximum value is 100. The value you can set depends on your subscription.
See the pricing for more information.
nullable	None	This parameter allows you to specify the attributes that you allow to return null values. The attributes that can be set are description, content and image. It is possible to combine several attributes by separating them with a comma.
For example: description,content
from	None	This parameter allows you to filter the articles that have a publication date greater than or equal to the specified value. The date must comply with ISO 8601 format.
For example: 2025-07-18T21:32:58.500Z
to	None	This parameter allows you to filter the articles that have a publication date smaller than or equal to the specified value. The date must comply with ISO 8601 format.
For example: 2025-07-18T21:32:58.500Z
q	None	This parameter allows you to specify your search keywords to find the news articles you are looking for. The keywords will be used to return the most relevant articles. It is possible to use logical operators with keywords, see the section on query syntax.
page	1	This parameter allows you to control the pagination of the results returned by the API. The paging behavior is closely related to the value of the max parameter. The first page is page 1, then you have to increment by 1 to go to the next page. Let's say that the value of the max parameter is 10, then the first page will contain the first 10 articles returned by the API (articles 1 to 10), page 2 will return the next 10 articles (articles 11 to 20), etc.
For performance reasons, it is not possible to paginate more than 1000 articles.
expand	None	This parameter will only work if you have a paid subscription activated on your account.
This parameter allows you to return in addition to other data, the full content of the articles. To get the full content of the articles, the parameter must be set to content, as follows expand=content
`;
