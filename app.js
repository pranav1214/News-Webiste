function func(){
fetch('https://agile-meadow-78327.herokuapp.com/newsapi.org/v2/top-headlines?country=us&category=business&apiKey=11dab8b3bd49444a8b36e096fadd8035')
    .then(response => {
        if(!response.ok){
            throw Error('Error')
        }
            return response.json();
    })
    .then(data =>{
        console.log(data.data.articles);
        var finalData = data.data.articles.map(news => {
            return `
            <tr class="text-center">
            <td><img src="${news.urlToImage}" width="100" height="100"></td>
            <td>${news.title}</td>
            <td>${news.description}</td>
            <td>${news.author}</td>
            <td><a href="${news.url}">Click here</a></td>
            </tr>        `;
        })

        document.querySelector("#table1").insertAdjacentHTML("afterbegin",finalData) 
    })
    .catch(error => {
        console.log(error);
    })


}

func();