function songPicker(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsArr = [];
    let n = arr.shift();
    let searchedType = arr.pop();

    for (let songStr of arr) {
        let [type, name, time] = songStr.split('_');
        let song = new Song(type, name, time);
        
        songsArr.push(song)
    }

    if (searchedType === 'all') {
        for (let song of songsArr) {
            console.log(song.name);
        }
    }
    else {
        for (let song of songsArr) {
            if (song.typeList === searchedType) {
                console.log(song.name);
            }
        }
    }
}

songPicker([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
songPicker([4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater']
);