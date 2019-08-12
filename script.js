// //API

// var APIkey = '498cb3731a91441784951e1fd976bdc6';
// var key = '?apiKey='+APIkey;

// function loadHeadlinesByCategory(category){
// 	var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&category='+category;
// 	fetch(articlesURL)
// 		.then( res=>res.json())
// 		.then((data)=>{
// 			var articles = data.articles;
// 			console.log(articles);
// 		})
// }

// function loadHeadlinesByTerm(term){
// 	var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&q='+term;
// 	fetch(articlesURL)
// 		.then( res=>res.json())
// 		.then((data)=>{
// 			var articles = data.articles;
// 			console.log(articles);
// 		})
// }

// //test

// loadHeadlinesByCategory('technology');
// loadHeadlinesByTerm('hack');