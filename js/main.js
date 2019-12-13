	const playList = [{
		author: "Led Leppelin",
		song: "Stairway to heaven",
		duration: "2:03"
  },
  {
		author: "Queen",
		song: "Bohemian rhapsody",
		duration: "2:30"
  },
  {
		author: "Lynyrd Skynyrd",
		song: "Free bird",
		duration: "1:56"
  },
  {
		author: "Deep Purple",
		song: "Smoke on the water",
		duration: "3:03"
  },
  {
		author: "Jimi Hendrix",
		song: "All along the watchtower",
		duration: "2:53"
  },
  {
		author: "AC/DC",
		song: "Back in black",
		duration: "2:43"
  },
  {
		author: "Queen",
		song: "We will rock you",
		duration: "2:13"            
  },
  {
		author: "Metallica",
		song: "Enter sandman",
		duration: "3:03"            
  }
];

//Get li tmpl from html
let liTmplt = document.querySelector('[data-tmpl]').innerHTML;
// console.log(liTmplt);

let listEl = document.querySelector('[data-list]');

for (let index = 0; index < playList.length; index++) {
		
	let playHTML = liTmplt
						
						.replace(/{{author}}/ig, playList[index].author)
						.replace(/{{song}}/ig, playList[index].song)
						.replace(/{{duration}}/ig, playList[index].duration);
	
	listEl.innerHTML += playHTML;
	
}


