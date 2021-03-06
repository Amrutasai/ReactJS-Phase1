// 3&4.	Create an object representing your favorite GoT or any other character from a movie or TV series. (first name, last name, yearsOfExperience, noOfMovies., latestMovie, noOfAwards. The more you add the better)
// 	
//  .	Add a function, getFullName, which returns the full name of the character
// a.	Add a function, getBio, which returns a short bio of the character using the properties defined above.
// b.	Add other functions which return the rest properties defined in the object.
// c.	Print the first name of the character.
// d.	Extract noOfMovies, yearsOfExperience from the object.
// e.	Create another object with a different character and merge the two objects.
//

let a={
        fname:'Lyanna',
        lname:'Mormon',
        seasonsOfExperience:3,
        firstSeen:"The Broken Man",
        latestEpi:"The Last of the Starks",
        episodesOfExperience: 9, 
        titles:'Lady of Bear Island',
        marriage:"NA",
        status:'Deceased',
        age:13,
        DOB:'292 AC',
        death:'305 AC at Winterfell, Crushed by a wight giant during the Battle of Winterfell, whom she managed to destroy before succumbing to her wounds',
        origin:'Bear Island, the North',
        allegiance:{
            birth:'House Mormont',
            oath:'House Stark',
            death:'White Walkers'},
        predecessor:'Maege Mormont',
        religion:'Old Gods of the Forest',
        mother:'Maege Mormont',
        portrayedBy:'Bella Ramsey',
        noOfAwards:4,
        getFullName(){
            return `${this.fname} ${this.lname}`;
        },    
        getBio(){
            return `Lady ${this.getFullName()} [birth: ${this.DOB}] was the ${this.titles} and thus the head of ${this.allegiance.birth} of ${this.origin} ever since the death of her mother, ${this.mother}. She pledged ${this.allegiance.birth} forces to ${this.allegiance.oath} upon meeting Jon Snow, Sansa Stark, and Davos Seaworth, making her house one of the few loyalists to fight for the Starks against House Bolton at the Battle of the Bastards. She was killed in ${this.death} at the age of ${this.age}.`
        },
        getCharacterInfo(){
            return `We are introduced to ${this.getFullName()} in '${this.firstSeen}' as the ${this.titles}, successor of ${this.predecessor} who was also her mother. She is last seen in '${this.latestEpi}' fighting alongside ${this.allegiance.death}. She was buried as per her religion ${this.religion}.`
        },
        getActressInfo(){
            return `${this.portrayedBy} played the role of ${this.getFullName()} in the show Game of Thrones. We meet her character in '${this.firstSeen}' and bid her goodbye in '${this.latestEpi}'.She gained an experience of ${this.episodesOfExperience} over ${this.seasonsOfExperience} seasons. Her talent as an actress was recognised when she was nominated for ${this.noOfAwards} awards.`
         }
}
console.log('\nFIRST NAME: '+a.fname);
// Add a function, getFullName, which returns the full name of the character
console.log('\nFULL NAME: '+a.getFullName());
// Add a function, getBio, which returns a short bio of the character using the properties defined above.
console.log('\nBIO: \n'+a.getBio());
// Add other functions which return the rest properties defined in the object.
console.log('\nCHARACTER INFORMATION: \n'+a.getCharacterInfo());
console.log('\nACTRESS INFORMATION: \n'+a.getActressInfo());
// Extract noOfMovies, yearsOfExperience from the object.
let {seasonsOfExperience,episodesOfExperience}=a;
console.log('\nNO. OF YEARS: '+seasonsOfExperience+' \nNO. OF EPISODES: '+episodesOfExperience);
// Create another object with a different character 
let b={
        fname:'Sansa',
        lname:'Stark',
        seasonsOfExperience:8,
        firstSeen:"Winter Is Coming",
        latestEpi:"The Iron Throne",
        episodesOfExperience: 59, 
        titles:['Princess of Winterfell','Lady of Winterfell','Queen in the North','Lady Regent of the North'],
        status:'Alive',
        marriage:['Tyrion Lannister','Ramsay Bolton'],
        age:20,
        DOB:'285 AC',
        death:'NA',
        origin:'Winterfell',
        allegiance:{
            birth:'House Stark',
            oath:'House Targaryen',
            marriage:['House Bolton','House Lannister' ]
            },
        predecessor:'Jon Snow',
        religion:'Old Gods of the Forest',
        mother:'Catelyn Stark',
        portrayedBy:'Sophie Turner',
        noOfAwards:1,
        getFullName(){
            return `${this.fname} ${this.lname}`;
        },    
        getBio(){
            return `Lady ${this.getFullName()} [birth: ${this.DOB}] was the ${this.titles[0]} born to ${this.mother}. She was wedded to ${this.marriage[0]} and hence became ${this.titles[3]}. After knowing the truth she decides to return to ${this.origin} and becomes ${this.titles[1]} after her marriage to ${this.marriage[1]}. Later,${this.fname} declares the North an independent kingdom and is later crowned the ${this.titles[2]} and rules the north.`
        },
        getCharacterInfo(){
            return `We are introduced to ${this.getFullName()} in '${this.firstSeen}' as the ${this.titles[0]}, step-sister of ${this.predecessor} who was also her cousin. She is last seen in '${this.latestEpi}' being crowned as ${this.titles[2]} as per her religion ${this.religion}.`
        },
        getActressInfo(){
            return `${this.portrayedBy} played the role of ${this.getFullName()} in the show Game of Thrones. We meet her character in '${this.firstSeen}' and watch her become ${this.titles[2]} in '${this.latestEpi}'.She gained an experience of ${this.episodesOfExperience} over ${this.seasonsOfExperience} seasons. Her talent as an actress was recognised when she was nominated for ${this.noOfAwards} award.`
         }

}

 console.log('\nFIRST NAME: '+b.fname);
 console.log('\nFULL NAME: '+b.getFullName());
 console.log('\nBIO: \n'+b.getBio());
 console.log('\nCHARACTER INFORMATION: \n'+b.getCharacterInfo());
 console.log('\nACTRESS INFORMATION: \n'+b.getActressInfo());
 console.log('\nNO. OF YEARS: '+b.seasonsOfExperience+' \nNO. OF EPISODES: '+b.episodesOfExperience);
// merge the two objects.
 let c={...a,...b};
 console.log(c);