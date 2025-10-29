function cicleArea(radius) {
    let area;
    let inputType = typeof(radius);


    if (inputType === "number") {
        area = Math.PI * radius**2;
        console.log(area.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}

cicleArea('asd');
cicleArea(5);