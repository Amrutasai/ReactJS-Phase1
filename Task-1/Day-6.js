// 5.	Create a new class defining a character using the same info that you used to create the above object. The class should be generic to define any character details.

class Character{
    constructor(fname,lname,seasonsOfExperience,firstSeen,latestEpi,episodesOfExperience,titles,status,marriage,age,dob,death,origin,allegiance,predecessor,religion,mother,portrayedBy,Awards)
    {
        this.fname=fname;
        this.lname=lname;
        this.seasonsOfExperience=seasonsOfExperience;
        this.firstSeen=firstSeen;
        this.latestEpi=latestEpi;
        this.episodesOfExperience= episodesOfExperience;
        this.titles=titles;
        this.status=status;
        this.marriage=marriage;
        this.age=age;
        this.DOB=dob;
        this.death=death;
        this.origin=origin;
        this.allegiance=allegiance;
        this.predecessor=predecessor;
        this.religion=religion;
        this.mother=mother;
        this.portrayedBy=portrayedBy;
        this.noOfAwards=Awards;
    };
    getFullName()
    {
        return `${this.fname} ${this.lname}`;
    };
    getActressInfo()
    {
        return `${this.portrayedBy} played the role of ${this.getFullName()} in the show Game of Thrones. We meet her character in '${this.firstSeen}' and watch her become ${this.titles[2]} in '${this.latestEpi}'.She gained an experience of ${this.episodesOfExperience} over ${this.seasonsOfExperience} seasons. Her talent as an actress was recognised when she was nominated for ${this.noOfAwards} award.`
    }

}
let sansa=new Character( 
'Sansa',
'Stark',
8,
"Winter Is Coming",
"The Iron Throne",
 59, 
['Princess of Winterfell','Lady of Winterfell','Queen in the North','Lady Regent of the North'],
'Alive',
['Tyrion Lannister','Ramsay Bolton'],
20,
'285 AC',
'NA',
'Winterfell',
{
    birth:'House Stark',
    oath:'House Targaryen',
    marriage:['House Bolton','House Lannister' ]
    },
'Jon Snow',
'Old Gods of the Forest',
'Catelyn Stark',
'Sophie Turner',
1,);
console.log(sansa.getFullName()+'\n');


// 6.	Create an Animal class defining basic properties and functions of animals. Create a new class which extends Animal class with specific properties of that animal. You can consider any animal of your choice. (Eg. Cat, Dog, Lion, Mouse, etc.)

class Animal
{
    constructor(legs,food)
    {
        this.legs=legs;
        this.food=food;
    };
    getlegs()
    {
        return this.legs;
    };
    getfood()
    {
        return this.food;
    };
    getBio()
    {
        return `LEGS: ${this.legs} \nFOOD: ${this.food}`;
    }
}
class Dog extends Animal
{
    constructor(legs,food,breed)
    {
        super(legs,food);
        this.breed=breed;
        this.type='Dog'
        this.voice='BowBow'
    }
    getbreed()
    {
        return this.breed;
    }
    getBio()
    {
        return`TYPE: ${this.type} \nBREED: ${this.breed} \nVOICE:${this.voice} \n${super.getBio()}`
    }
}
d=new Dog(4,'ABC','DEF');
console.log(d.getBio()+'\n');

// 7.	Print React is the best after 5 seconds.
setTimeout(()=>{
    console.log("React is the best");
},5000);
// 8.	Print React is the best after 3 seconds continuously.
let inter1=setInterval(()=>
        {
             console.log("React is the best!!");
        },3000);
setTimeout(()=>{clearInterval(inter1)},10000);

// 9.	Print React is the best 10 times and stop (using setInterval and loops, both)
let inter=setInterval(()=>{
    console.log('React is the best!!!');
},1000);
setTimeout(()=>{clearInterval(inter)},11000);
