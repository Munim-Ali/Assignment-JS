make_album = (artist, title, track) => {
    dic = {
        "Artist Name ": artist,
        "Album Title": title,
        "No Of Tracks": track,
    }
    return dic
}

console.log(make_album("Arjit Singh", "Slowed & Reverb", "5"));
console.log(make_album("Atif Aslam", "Mix-Songs", "10"));
console.log(make_album("Youngstuners", "Hip-Hop", "13"));