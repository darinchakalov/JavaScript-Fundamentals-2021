function solve(input) {
    let stops = input.shift();
    let line = input.shift();
    while (line !== "Travel") {
        let [command, first, second] = line.split(":");
        switch (command) {
            case "Add Stop":
                if (Number(first) >= 0 && Number(first) <= stops.length) {
                    stops = insert(stops, Number(first), second);
                }
                console.log(stops);
                break;
            case "Remove Stop":
                if (
                    Number(first) >= 0 &&
                    Number(first) < stops.length &&
                    Number(second) >= 0 &&
                    Number(second) < stops.length 
                ) {
                    let remove = stops.slice(Number(first), Number(second) + 1);
                    stops = stops.replace(remove, "");
                }
                console.log(stops);
                break;
            case "Switch":
                let pattern = new RegExp(first, "g");
                stops = stops.replace(pattern, second);
                console.log(stops);
                break;
        }

        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
    function insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }
}
solve(["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"]);
