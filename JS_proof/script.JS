const NFTS = []

function mintNFT(username, snapScore, storiesPosted, friendsCount, bitmojiURL, streaksCount, isVerified) {
    const NFT = {
        username: username,
        snapScore: snapScore,
        storiesPosted: storiesPosted,
        friendsCount: friendsCount,
        bitmojiURL: bitmojiURL,
        streaksCount: streaksCount,
        isVerified: isVerified,
    }
    console.log("Minted: " + username)
    NFTS.push(NFT);
}

function listNFTS() {
    for(let i = 0; i < NFTS.length; i++){
        console.table(NFTS[i])
    }
}

function getTotalSupply() {
    console.log("Total NFT's: " + NFTS.length)
}

mintNFT("snap_pramod", 12345, 150, 300, "http://example.com/bitmoji_pramod.png", 20, true);
mintNFT("snap_ravi", 9876, 200, 250, "http://example.com/bitmoji_ravi.png", 15, false);
mintNFT("snap_sandeep", 54321, 100, 400, "http://example.com/bitmoji_sandeep.png", 30, true);
mintNFT("snap_aanshita", 23456, 120, 350, "http://example.com/bitmoji_aanshita.png", 25, false);
mintNFT("snap_katrina", 8765, 180, 500, "http://example.com/bitmoji_katrina.png", 10, true);
mintNFT("snap_deepika", 65432, 140, 450, "http://example.com/bitmoji_deepika.png", 5, false);

listNFTS();
getTotalSupply();
