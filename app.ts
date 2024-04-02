// //Q:2;
// let Name = "Mudasir";
// console.log(`Hello ${Name}: Would You like to Learn some TypeScript.`);

////Q:3;
// let Name = "Mudasir Kakepoto";
// let lowerCase = Name.toLowerCase();
// let UpperCase = Name.toUpperCase();
// console.log(lowerCase);
// console.log(UpperCase);
// console.log(Name.charAt(0).toLowerCase() + Name.slice(1).toUpperCase());

////Q:4;
// let author = "Albert Einstien";
// console.log(`${author} once said: 'A person who never made a mistake never tried anything New.`);

////Q:5;
// let famous_person = "Chanakya";
// let message= `${famous_person} once said: All power is within you`;
// console.log(message);

////Q:6;
// let Name = "\t\n   Mudasir Kakepoto  \t\n";
// console.log(Name);
// console.log(Name.trim());

////Q:7;
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(16/2);
// console.log(4*2);

////Q:8;
// console.log(5 + 3);
// console.log(9-1);
// console.log(4*2);
// console.log(16/2);

////Q:9;
//This program print my favorite Number;
// let favorite_number = 73;
// let message = `My favourite number is ${favorite_number}`;
// console.log(message);
 
////Q:10;
////Mudasir,5-3-24;
// //This program print greeting message;
// let Name = "Mudasir Kakepoto";
// console.log(`Hello ${Name} would you like to learn some typeScript.`);

////Q:11;
// let names = ["Mudasir","muzamil","mubashir","mustaweem"];
// names.forEach((name)=>{
//     console.log(name);
// });

////Q:12;
// let names = ["Mudasir","muzamil","mubashir","mustaweem"];
// names.forEach((name)=>{
//     console.log(`Welcome ${name} at our wedding party.`);
// })

////Q:13;
// let vehicles = ["Honda","Range rover","Land Cruiser"];
// vehicles.forEach((vehicle)=>{
//     console.log(`I would like to own ${vehicle}.`);
// })

////Q:14;
// let guest_list = ["Mubashir","Afshan","Muzamil"];
// guest_list.forEach((guest)=>{
//     console.log(`Helllo ${guest}: I am inviting you at my dinner party.`);
// });

////Q:15;
// let guest_list = ["Mubashir","Afshan","Muzamil"];
// let notAttendant = "Mubashir";
// console.log(`Sorry ${notAttendant}: YOu will not be able to attend Party.`);
// guest_list.splice(0,1,"karan");
// guest_list.forEach((guest)=>{
//     console.log(`Hello ${guest}:You are still invited at party`);
// });

////Q:16;
// let guest_list = ["Karan","afshan","Muzamil"];
// console.log(`Great NEWS! I found a Bigger Table.`);
// guest_list.unshift("Kiran");
// guest_list.splice(guest_list.length/2,0,"Hina Naseer");
// guest_list.push("Sawera");
// guest_list.forEach((guest)=>{
//     console.log(`Hello ${guest}: You are invited at my party.`);
// });

////Q:17;
// let guest_list = ["Kiran","karan","Hina Naseer","Afshan","Sawera"];
// console.log(`Unfortunately! I can invite only two people on the dinner party.`);
// while(guest_list.length > 2){
//      let removedGuest = guest_list.shift();
//      console.log(`Sorry ${removedGuest} you are not invited.`);
// }
// guest_list.forEach((guest)=>{
//     console.log(`Dear ${guest}: You are invited at party`);
// })
// guest_list.splice(0);
// console.log(guest_list);

// //Q:18;
// let places =  ["Singapore","Australia","Britain","Korea","Saudi Arabia"];
// console.log("Original order:",places);
// console.log("Alphabetical Order:",[...places].sort());
// console.log("Original order:",places);
// console.log("Reverse Order:",[...places].sort().reverse());
// console.log("Original Order:",places);
// places.reverse();
// console.log("Reversal Order:",places);
// places.reverse();
// console.log("Original Order:",places);
// places.sort();
// console.log("Alphabetical Order:",places);
// places.reverse();
// console.log("Reverse Alphabetical Order:",places);

////Q:19;
// let guests = ["Mudasir","Muzamil","afshan","karan","kiran"];
// console.log(`I am inviting ${guests.length} people at the party.`);

////Q:20;
// let cars = ["Honda Civic","Range Rover","Land Cruiser","Audi","BMW"];
// console.log("Cars I would like to drive",cars);

////Q:21;
// let life: {name:string,year:number,caste:string} = {
//     name:"Mudasir",
//     year:2006,
//     caste:"Kakepoto"
// }
// console.log(`My name is ${life.name} and I was born in ${life.year} and my sir name is ${life.caste}` );

////Q:22;
// let arr = [1,2,3,4,5];
// console.log(arr[5]);
// console.log(arr[4]);

/////Q:23;
// let car = "BMW";
// console.log("Is car == 'BMW' ? I predict True.");
// console.log(car == "BMW");
// let mountain = "Mount Everest";
// console.log("Is mountain == 'Mount everest' ? I predict True.",mountain == "Mount Everest");
// let houseNo = 123;
// console.log(houseNo == 123,"i predict true");
// let Name ="Mudasir";
// console.log(Name === "mudasir","I predict false");
// let caste = "kakepoto";
// console.log(caste == "kakepoto","I predict true");
// let names = ["Mudasir","Muzamil","Afshan","Ayesha","Mubashir","BMW","Mount Everest",123,"Mudasir","Kakepoto"]
// for(let i = 0;i<10;i++){
//     console.log(names[i] == names[i],"I predict true");
// }

////Q:24;
// console.log("Testing Equality with string:");
// console.log("kakepoto"=="kakepoto");//true
// console.log("mudasir"==="Mudasir".toUpperCase());//false

// console.log("Testing with ToLowerCase:");
// console.log("Kakeppoto".toLowerCase()=="Kakepoto");//false

// console.log("Numerical value");
// console.log(5>2);//true
// console.log(5<2);//false

// console.log("Testing with || and &&");
// let a =5;
// let b = 7;
// console.log(a>b || a == 5);//true
// console.log(a<b && b == 7);//true

////Q:25;
// let alien_color = "green";
// if(alien_color === "green"){
//     console.log("You just earned 5 points!");
// }

////Q:26;
// let alien_color = "red";
// if(alien_color === "green"){
//     console.log("You just earned 15 points!");
// }else{
//     console.log("You just earned 5 points.");
// }

// let alien_color = "green";
// if(alien_color === "green"){
//     console.log("You just earned 5 points");
// }else{
//     console.log("You jst earned 15 points");
// }

////Q:27;
// let alien_color = "green";
// if(alien_color === "green"){
//     console.log("You just earned 5 points!");
// }else if(alien_color === "yellow"){
//     console.log("You just earned 10 points!");
// }else{
//     console.log("You just earned 15 points");
// }
 
// let alien_color = "yellow";
// if(alien_color === "yellow"){
//     console.log("you just earned 10 points!");
// }else if(alien_color === "green"){
//     console.log("you just earned 5 points!");
// }else{
//     console.log("you just earned 15 points");
// }

// let alien_color = "red";
// if(alien_color === "red"){
//     console.log("You just earned 15 points");
// }else if(alien_color === "green"){
//     console.log("You just earned 5 points");
// }else{
//     console.log("you just earned 10 points");
// }

////Q:28;
// let age = 15;
// if(age<1){
//     console.log("The person is New born");
// }else if(age>=1 && age <= 10){
//     console.log("The person is boy");
// }else if(age>=11 || age <=19){
//     console.log("The person is Teenager");
// }else if(age<=20 || age>=60){
//     console.log("The person is adult");
// }else{
// console.log("The person is old.");
// }

////Q:29;
// let fruits = ["Mango","banana","apple","orange","PineApple"];
// if(fruits.includes("Mango")){
//     console.log("You really like Mango.");
// }
// if(fruits.includes("banana")){
//     console.log("You really like banana");
// }
// if(fruits.includes("orange")){
//     console.log("You really like orange.");
// }
// if(fruits.includes("apple")){
//     console.log("You really like apple.");
// }
// if(fruits.includes("PineApple")){
//     console.log("You really like PineAppe");
// }

////Q:30;
// let UserNames = ["Admin","Afshan","Muzamil","Mustaqeem","Mubeen","Mubashir"];
// UserNames.forEach((user)=>{
//     if(user == "Admin"){
//         console.log(`Hello admin! Would you like to see status Report`);
//     }else{
//         console.log(`Hello ${user}:Welcome at my Group.`);
//     }
// });

////Q:31;
// let userName = [];
// if(userName.length == 0){
//     console.log("We need User's");
// }else{
//     console.log("hello");
// };

////Q:32;
// let curr_user = ["Mudasir", "ahmed", "Adam"];
// let new_user = ["muzamil", "mustaweem","Ahmed"];

// new_user.forEach((user) => {
//     if (curr_user.some(curr_user => curr_user.toLowerCase() === user.toLowerCase())) {
//         console.log(`${user} will need to enter a new user name`);
//     } else {
//         console.log(`${user} is available`);
//     }
// });

////Q:33;
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
// numbers.forEach((number)=>{
//     if(number == 1){
//         console.log(`${number}st`);
//     }else if(number == 2){
//         console.log(`${number}nd`);
//     }else if(number == 3){
//      console.log(`${number}rd`);
//     }else{
//     console.log(`${number}th`);
// }})

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// numbers.forEach((number)=>{
//    let suffix = "th";
//    if(number ==1 ){
    // suffix = "st"
//    }else if(number == 2){
    // suffix = "nd";
//    }else if(number == 3){
    // suffix = "rd";
//    }
//   console.log(`${number} ${suffix}`);
// });

////Q:34;
// let pizzas = ["PineApple","Botechi","Pepperoni","Margherita","hawaiian"];
// for(let i=0;i<pizzas.length;i++){
//     console.log(`I love ${pizzas[i]}`);23
// }

////Q:35;
// let Animals = ["Elephant","Cat","Tiger","Lion"];
// for(let i =0;i<Animals.length;i++){
    // console.log(`${Animals[i]} walk with it's 4 arm's:`);
// }
// &&
// let Animals = ["Rabbit","Dog","Cat"];
// Animals.forEach((animal){
//     console.log(`A ${animal} would make great Pet.`);
// });
// console.log(`Any of these Animals would make great Pet.`);

////Q:36;
// function Tshirt(size:string ="medium",message:string = "I would Like to Love JabvaScript"){
//     console.log(`I have ${size} size T-shirt which has message ${message}`);
// }
// Tshirt();

////Q:37;
// function large_Shirts(size:string,message:string){
//     console.log(`I have ${size} size T-shir which has message ${message}`);
// }
// large_Shirts("medium","I love JavaScript.");
// large_Shirts("Small","I love TypeScript.");
// large_Shirts("large","I love Python.");

////Q:38;
// function describe_location(city:string,country:string = "Pakistan"){
//     console.log(`I love ${city} which is a city of ${country}.`);
// }
// describe_location("Islamabad");
// describe_location("Lahore");
// describe_location("WashingTon","America");

////Q:39;
// function city_country(city:string,country:string){
//     return `'${city},${country}'`
// }
// console.log(city_country("karachi","Pakistan"));
// console.log(city_country("Delhi","India"));
// console.log(city_country("Washington","America"));

////Q:40;
// function make_album(title:string,name:string,tracks:number){
//     let album = {title,name,tracks};
//     return album;
// }
// console.log(make_album("Harry Potter","J>k Rowling",255));
// console.log(make_album("Digest","Malik safdar hayat",25));
// console.log(make_album("oppenheimer","Cillin Murphy",1));

////Q:41;
// let magicians = ["Mudasir","muzamil","Mubeen","Mubahsir","Mustaqeem"];
// function show_magician(magicians:string[]){
//     magicians.forEach((magician)=>{
// console.log(magician);
//     })
// }
// show_magician(magicians);

////Q:42;
// let magicians = ["Mudasir","muzamil","Mubeen","Mubahsir","Mustaqeem"];
// magicians.push("The Great Magician");
// function show_magician(magicians:string[]){
//     magicians.forEach((magician)=>{
//         if(magician === "The Great Magician"){
//             console.log(`${magician} is Great magician in magic Industry.`);
//         }else{
//             console.log(`${magician} is magician`);
//         }
//     })
// }
// show_magician(magicians);

////Q:43;
// let magicians =["Alice","Bob","David","Chris"];
// function make_great(magicians:string[]){
//     let great_magicians:string[] = [];
//     magicians.forEach((magician)=>{
//         great_magicians.push(`The Great ${magician}.`)
//     });
//     return great_magicians;
// }
// let great_magician = make_great(magicians.slice())
// console.log("Original magician:");
// console.log(magicians);
// console.log("Great Magicians:");
// console.log(great_magician);



// ////Q:44;
// let Name = "Mag";
// function make_sandwich(...item:string[]){
//     console.log(`Making a sandwich with: ${item.join( Name)}`);
// }
// make_sandwich("Pepperoni "," Papaya");
// make_sandwich("Parathe "," Sawagirita"," yogoni"," Himoeneze");
// make_sandwich("pepperonni "," Sawanete"," yogoni"," Himoeneze");

// ////Q:45;
// function make_car(manufacturer:string,model:any,...options:[string,any][]){
//              let car = {manufacturer,model};
//              options.forEach((option)=>{
//                  car[option[0]] = option[1];
//              })
//              return car;
// }
// console.log(make_car("Toyota","Season 2",["Suzan","Italin"]));
// console.log(make_car("Toyota","Season 3",["Range","Rover"]));