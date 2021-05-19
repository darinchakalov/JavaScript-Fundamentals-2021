function cone(radius,height) {
    let volume = (Math.PI * (Math.pow(radius,2)) * height) / 3
    let l = Math.sqrt(Math.pow(height,2) + Math.pow(radius, 2))
    let area = Math.PI * radius * l + Math.PI *(radius * radius)
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3,5)