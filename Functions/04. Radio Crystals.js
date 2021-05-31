function radioCrystals(arr) {
    let neededSize = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let chunk = arr[i];
        if (chunk >= neededSize) {
            workOnCrystal(chunk)
        } else if (chunk === neededSize - 1) {
            console.log(`X-ray x1`);
            chunk+=1;
            console.log(`Finished crystal ${chunk} microns`);
        }
    }

    function workOnCrystal(chunk) {
        console.log(`Processing chunk ${chunk} microns`);
        let cutTimes = 0;
        let lapTimes = 0;
        let grindTimes = 0;
        let etchTimes = 0;

        while (chunk > neededSize) {
            if (chunk / 4 >= neededSize) {
                chunk /= 4;
                cutTimes++
                if (cutTimes > 0 && (chunk / 4) < neededSize - 1) {
                    console.log(`Cut x${cutTimes}`);
                    transportingAndWashing(chunk)
                }

            } else if (chunk - (chunk / 5) >= neededSize) {
                chunk = chunk - (chunk / 5);
                lapTimes++;
                if (lapTimes > 0 && chunk - (chunk / 5) < neededSize - 1) {
                    console.log(`Lap x${lapTimes}`);
                    console.log(`Transporting and washing`);
                    if (!Number.isInteger(chunk)) {
                        chunk = Math.floor(chunk);
                    }
                }

            } else if (chunk - 20 >= neededSize) {
                chunk -= 20;
                grindTimes++;
                if (grindTimes > 0 && (chunk - 20) < neededSize - 1) {
                    console.log(`Grind x${grindTimes}`);
                    transportingAndWashing(chunk)
                }
                
            } else if (chunk - 2 >= neededSize || chunk - 2 === neededSize - 1) {
                chunk -= 2;
                etchTimes++;
                if (etchTimes > 0 && (chunk - 2) < neededSize - 1) {
                    console.log(`Etch x${etchTimes}`);
                    transportingAndWashing(chunk)
                }
            }else if (chunk + 1 === neededSize) {
                chunk++
                console.log(`X-ray x1`);
            }

        }
        console.log(`Finished crystal ${chunk} microns`);
    }
    function transportingAndWashing(chunk) {
        console.log(`Transporting and washing`);
        if (!Number.isInteger(chunk)) {
            chunk = Math.floor(chunk);
        }
        return chunk;
    }
}
//radioCrystals([1375, 50000, 2000])
radioCrystals([1000, 8100])