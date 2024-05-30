/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _skinColour, _hairType, _shirtType) {
const NFT = {
name:_name,
skinColour:_skinColour,
hairType:_hairType,
shirtType:_shirtType
}
NFTs.push(NFT);
console.log("Minted:"+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i=0; i<NFTs.length; i+=1) {
console.log("\nID: \t\t" + (i+1));
console.log("Name: \t\t" + NFTs[i].name);
console.log("SkinColour:\t" + NFTs[i].skinColour);
console.log("Hair Type:\t" + NFTs[i].hairType);
console.log("Shirt Type:\t" + NFTs[i].shirtType);
}

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\n" + NFTs.length);

}

// call your functions below this line
mintNFT("Raju", "White", "currly", "Hoodie");
mintNFT("kiran", "White", "plain", "Hoodie");
mintNFT("Suraj", "Black", "normal", "Hoodie");
listNFTs();
getTotalSupply();
