function solve(arr) {
    let gameList = arr[0].split(' ')

    function gameRemove(gameList, gameName) {
        return gameList.filter(function (element) {
            return element != gameName;
        })
    }
    for (let i = 1; i < arr.length; i++) {
        let command = arr[i].split(' ')
        if (command === 'Play!') {
            break;
        }
        let action = command[0]
        let game = command[1]
        switch (action) {
            case 'Install':
                if (!gameList.includes(game)) {
                    gameList.push(game);
                }
                break;
            case 'Uninstall':
                gameList = gameRemove(gameList, game);
                break;
            case 'Update':
                if (gameList.includes(game)) {
                    gameList = gameRemove(gameList, game);
                    gameList.push(game);
                }
                break;
            case 'Expansion':
                let expansion = game.split('-');
                let gameName = expansion[0]
                let exp = expansion[1];
                if (gameList.includes(gameName)) {
                    let position = gameList.indexOf(gameName) + 1
                    gameList.splice(position, 0, `${gameName}:${exp}`)
                }
                break;
        }
    }
    console.log(gameList.join(' '));
}
solve(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])