function solve(input) {
    const patterns = [
        /^addMovie (?<name>.+)$/,
        /^(?<name>.+) directedBy (?<director>.+)$/,
        /^(?<name>.+) onDate (?<date>.+)$/
    ]

    let moviesArr = [];

    for (const movieInfo of input) {

        if (patterns[0].test(movieInfo)) {
            const match = movieInfo.match(patterns[0]);
            const name = match.groups["name"]
            let movieObj = {
                name: name
            }

            moviesArr.push(movieObj);
        }
        else if (patterns[1].test(movieInfo)) {
            const match = movieInfo.match(patterns[1]);
            const name = match.groups["name"];
            const director = match.groups["director"];

            for (let movie of moviesArr) {
                if (name === movie["name"]) {
                    movie["director"] = director;
                }
            }
        }
        else if (patterns[2].test(movieInfo)) {
            const match = movieInfo.match(patterns[2]);
            const name = match.groups["name"];
            const date = match.groups["date"];

            for (let movie of moviesArr) {
                if (name === movie["name"]) {
                    movie["date"] = date;
                }
            }
        }
    }

    for (let movie of moviesArr) {
        if (("director" in movie) && ("date" in movie)) {
            console.log(JSON.stringify(movie));
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);