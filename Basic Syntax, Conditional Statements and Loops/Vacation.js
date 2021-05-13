function solve(people, type, day) {
    let singlePrice = 0;
    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    singlePrice = 8.45
                    break;
                case 'Saturday':
                    singlePrice = 9.80
                    break;
                default:
                    singlePrice = 10.46
                    break;
            }
            break;
        case 'Business':
            switch (day) {
                case 'Friday':
                    singlePrice = 10.9
                    break;
                case 'Saturday':
                    singlePrice = 15.6
                    break;
                default:
                    singlePrice = 16
                    break;
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday':
                    singlePrice = 15
                    break;
                case 'Saturday':
                    singlePrice = 20
                    break;
                default:
                    singlePrice = 22.50
                    break;
            }
            break;
    }
    let price = (people * singlePrice)
    let discountedPrice =0
    if (type === 'Students' && people >= 30) {
        discountedPrice = price - (price * 0.15) 
    } 
    if (type === 'Business' && people >= 100) {
        discountedPrice = price - (singlePrice * 10) 

    } 
    if (type === 'Regular' && people >= 10 && people <= 20) {
        discountedPrice = price - (price * 0.05)
    } 
    if (discountedPrice >0) {
        console.log(`Total price: ${discountedPrice.toFixed(2)}`);
    } else {
        console.log(`Total price: ${price.toFixed(2)}`);
    }
}
solve(40, 'Regular', 'Saturday')