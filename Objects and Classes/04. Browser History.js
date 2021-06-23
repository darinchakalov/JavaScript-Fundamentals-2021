function solve(obj, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Clear History and Cache") {
            obj["Open Tabs"] = [];
            obj["Recently Closed"] = [];
            obj["Browser Logs"] = [];
        } else {
            let command = arr[i].split(" ");
            let whatDo = command.shift();
            let tab = command.toString();
            if (whatDo === "Close") {
                obj["Open Tabs"].forEach((element) => {
                    if (tab === element) {
                        let index = obj["Open Tabs"].indexOf(element);
                        obj["Open Tabs"].splice(index, 1);
                        obj["Recently Closed"].push(element);
                        obj["Browser Logs"].push(arr[i]);
                    }
                });
            } else if (whatDo === "Open") {
                obj["Open Tabs"].push(tab);
                obj["Browser Logs"].push(arr[i]);
            }
        }
    }
    console.log(`${obj["Browser Name"]}`);
    console.log(`Open Tabs: ${obj["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${obj["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${obj["Browser Logs"].join(", ")}`);
}
solve(
    {
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": [
            "Open YouTube",
            "Open Yahoo",
            "Open Google Translate",
            "Close Yahoo",
            "Open Gmail",
            "Close Gmail",
            "Open Facebook",
        ],
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
console.log('');
solve(
    {
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"],
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
