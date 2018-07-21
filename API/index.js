const Joi = require('joi');
const express = require('express');
const app = express();

const request = require('request');
const cheerio = require('cheerio');



app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT");
  next();
});

var gameDB = [

];


app.get('/scrape', (req, res) => {

})

app.get('/', (req, res, next) => {
	res.send('Hello World!!');
});

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
	}


var isPaused = false;
// function themeSong(item){
	


	
var active = false;
	
var anotherVar = '';


function badBoy(item, name){
	active = true;
	
	
	name['themeSong'] = item;
	

	link =`http://www.thecoverproject.net/images/covers/${name.console}_${name.title.replace(/\s/g, '')}_thumb.jpg`;
	name["link"] = link;

	active = false;
	
	}





var pleaseWork2 = {};

app.get('/api/games', (req, res, next) => {

res.send({data: gameDB});




});

app.post('/api/games', (req, res) => {

	const result = validateCourse(req.body);
	const { error } = validateCourse(req.body);

	if(error) return res.status(400).send(result.error.details[0].message);

	const gameInfo = {
		id: gameDB.length + 1,
		title: req.body.title,
		console: req.body.console
	};

	if(!gameDB.find(c => c.title === gameInfo.title && c.console === gameInfo.console)){
		gameDB.push(gameInfo);
		res.send(gameInfo);
	}


	var musicArray = [];
	var musicArray2 = [];
	let link = "";
	let linkArray = [];
	
	
	for(i = 0; i < gameDB.length; i++){

	pleaseWork2 = gameDB[i];
}
	// start(0);
	var url = `https://www.youtube.com/results?search_query=${req.body.title}+theme+song`;
	
	
	request(url, (error, response, html) => {
		if(!error){
			
			isPaused = true;
			
		
			
			var $ = cheerio.load(html);
	
			
			
			$('a').each(function(index) {
			if($(this).attr('href').search('watch') == true) {
				
					var hrefLink = $(this).attr('href');
					var musicLink = `http://youtube.com${hrefLink}`;
					var musicLink2 = musicLink.replace("watch?v=", "embed/");
					musicArray.push(musicLink2);

					
			
				
			
		}
			})
		
		
		const pleaseWork = musicArray[0].toString();
		
		sendFunc(pleaseWork);
		

		
		}
	})


	function sendFunc(link){
	badBoy(link, pleaseWork2);
	
}


	var url2 = `https://www.youtube.com/results?search_query=${req.body.title}+walkthrough`;
	request(url2, (error, response, html) => {
		if(!error){
			
			isPaused = true;
			
		
			
			var $ = cheerio.load(html);
	
			
			
			$('a').each(function(index) {
			if($(this).attr('href').search('watch') == true) {
				
					var hrefLink = $(this).attr('href');
					var musicLink = `http://youtube.com${hrefLink}`;
					var musicLink2 = musicLink.replace("watch?v=", "embed/");
					musicArray2.push(musicLink2);

					
			
				
			
		}
			})
		
		
		const pleaseWork = musicArray2[0].toString();
		
		sendFunc2(pleaseWork);
		
		

		
		}
	})
	function sendFunc2(link){
		pleaseWork2['walkthroughLink'] = link;
		
	


	}
	
});


app.put('/api/games/update/:id', (req, res, next) => {
	var musicArray = [];
	var musicArray2 = [];
	const game = gameDB.find(c => c.id === parseInt(req.params.id.replace(':', "")));
	
	if (!game) return res.status(404).send('The game with the given name was not found');
	else{

	var url = `https://www.youtube.com/results?search_query=${req.body.title}+theme+song`;
	
	request(url, (error, response, html) => {
		if(!error){
			
			isPaused = true;
			
		
			
			var $ = cheerio.load(html);
	
			
			
			$('a').each(function(index) {
			if($(this).attr('href').search('watch') == true) {
				
					var hrefLink = $(this).attr('href');
					var musicLink = `http://youtube.com${hrefLink}`;
					var musicLink2 = musicLink.replace("watch?v=", "embed/");
					musicArray.push(musicLink2);

					
			
				
			
		}
			})
		
		
		const pleaseWork = musicArray[0].toString();
		
		sendFunc(pleaseWork);
		
		

		
		}
	})
	function sendFunc(link){
		game.title = req.body.title;
		game.console = req.body.console;
		game.themeSong = link;
		game.link =`http://www.thecoverproject.net/images/covers/${game.console}_${game.title.replace(/\s/g, '')}_thumb.jpg`;
	}
		
		
	

	var url2 = `https://www.youtube.com/results?search_query=${req.body.title}+walkthrough`;
	request(url2, (error, response, html) => {
		if(!error){
			
			isPaused = true;
			
		
			
			var $ = cheerio.load(html);
	
			
			
			$('a').each(function(index) {
			if($(this).attr('href').search('watch') == true) {
				
					var hrefLink = $(this).attr('href');
					var musicLink = `http://youtube.com${hrefLink}`;
					var musicLink2 = musicLink.replace("watch?v=", "embed/");
					musicArray2.push(musicLink2);

					
			
				
			
		}
			})
		
		
		const pleaseWork = musicArray2[0].toString();
		
		sendFunc2(pleaseWork);
		
		

		
		}
	})
	function sendFunc2(link){
		game.walkthroughLink = link;
	}
		
		
	}
		
});

function validateCourse(course) {
	const schema = {
		title: Joi.string().min(3).required(),
		console: Joi.string().min(2).required()
	};

	return Joi.validate(course, schema);
}


app.delete('/api/courses/:id', (req, res) => {
	const course = gameDB.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found');

	const index = gameDB.indexOf(course);
	gameDB.splice(index, 1);

	res.send(course);
});

app.delete('/api/games/wipe', (req, res) => {

	gameDB = [];
	res.send(gameDB);
})




app.get('/api/courses/:id', (req, res) => {
	const course = gameDB.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found');
	res.send(course);

})
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`))