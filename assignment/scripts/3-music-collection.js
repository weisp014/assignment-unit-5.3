console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title1, artist1, yearPublished1) {
    let album = {
        title: title1,
        artist: artist1,
        yearPublished: yearPublished1
    }
    collection.push(album); //add new album to end of collection array
    return album;
}

console.log(addToCollection('OK Computer', 'Radiohead', 1997));
console.log(addToCollection('How To Be A Human Being', 'Glass Animals', 2016));
console.log(addToCollection('Weezer (Blue Album)', 'Weezer', 2004));
console.log(addToCollection('Pinkerton', 'Weezer', 1996));
console.log(addToCollection('The Rip Tide', 'Bierut', 2011));
console.log(addToCollection('Every Kingdom', 'Ben Howard', 2011));

console.log(collection);