// Challenge 1: Create an Array "myFavSuperheroes" and add all your favourite superhero names as an array element (Please note, you should add atleast 5 names).
var myFavoriteSuperheroes = [
  'Superman',
  'Ironman',
  'Batman',
  'Spiderman',
  'Wonderwoman',
];
console.log(myFavoriteSuperheroes);

// Challenge 2: Print (in console) the first superheroes name in your array "myFavSuperheroes".
console.log(myFavoriteSuperheroes[0]);

// Challenge 3: Print (in console) the length of the array "myFavSuperheroes".
console.log(myFavoriteSuperheroes.length);

// Challenge 4: Change the second last element in the Array "myFavSuperheroes" to your name and print the second last element in the array "myFavSuperheroes".
console.log(myFavoriteSuperheroes.splice(3, 1, 'Poshika'));
console.log(myFavoriteSuperheroes);
console.log(myFavoriteSuperheroes[3]);

// Challenge 5: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the start without using the splice method.
myFavoriteSuperheroes.unshift('Akshaya');
console.log(myFavoriteSuperheroes);

// Challenge 6: Add your friend's name (friend 2) to the array "myFavSuperheroes" at the end without using the splice method.
myFavoriteSuperheroes.push('Mukesh');
console.log(myFavoriteSuperheroes);

// Challenge 7: Remove your friend's name (friend1) in the array "myFavSuperheroes" without using the splice method.
myFavoriteSuperheroes.shift();
console.log(myFavoriteSuperheroes);

// Challenge 8: Remove your friend's name (friend2) in the array "myFavSuperheroes" without using the splice method.
myFavoriteSuperheroes.pop();
console.log(myFavoriteSuperheroes);

// Challenge 9: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the 3rd position without removing any element using the splice method.
myFavoriteSuperheroes.splice(2, 0, 'Akshayaa');
console.log(myFavoriteSuperheroes);

// Challenge 10:  Remove the 4th and 5th element in the array "myFavSuperheroes",  and add your friend's name (friend 2) at the 4th position using the splice method.
myFavoriteSuperheroes.splice(3, 2, 'Mukesh');
console.log(myFavoriteSuperheroes);

// Challenge 11:  Create a nested array "superheroUniverse" and add 2 ararys to it, where first array should contain the name of the Marvel superheroes and second ararys should contain the name of the DC superhereoes.
var myFavoriteSuperheroes = [
  ['hulk', 'CaptainAmerica'],
  ['MartianManhunter', 'BlackCanary'],
];
console.log(myFavoriteSuperheroes);
// Challenge 12: Print one of the Marvel superhero name from the array "superheroUniverse".
console.log(myFavoriteSuperheroes[0][1]);

// Challenge 13: Print one of the DC superhero name from the array "superheroUniverse".
console.log(myFavoriteSuperheroes[1][0]);
