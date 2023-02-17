console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title1, artist1, yearPublished1) { //adds album info to collection
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
console.log(addToCollection('The Rip Tide', 'Beirut', 2011));
console.log(addToCollection('Every Kingdom', 'Ben Howard', 2011));
console.log(collection);

function showCollection(array) {    //logs all albums to console
    console.log('# in collection',array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].title, 'by', array[i].artist, 'published in', array[i].yearPublished);
    }
}

showCollection(collection);

function findByArtist(artist) { //find album by artist
    let LP = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].artist === artist) {  //check if artist matches the artist in any album
            LP.push(collection[i]);
        }    
    }
    if (LP.length > 0) {
        console.log(LP);
        return LP;
    }
    else return console.log('no match');
}

findByArtist('Radiohead');  //match
findByArtist('Beyonce');    //no match
findByArtist('Weezer');     //multiple matches

function search(object) {   //return albums with all matching criteria
    let match = [];
    if (object === undefined || object === '') {     //empty or undefined object
        console.log(collection);
        return collection
    }
    for (let i = 0; i < collection.length; i++) {
        if ((collection[i].artist === object.artist) && (collection[i].yearPublished === object.year))  //match both artist & year
            match.push(collection[i]);
        }
    if (match.length > 0) {
        console.log(match);
        return match;
    }
    else return console.log('no match for', object);
    }

search({artist: 'Radiohead', year: 1997})   //1 match
search();                                   //return collection
search({artist: 'Weezer', year: 2000})      //no match