function solve(input) {
    let substr = input.substring(input.lastIndexOf('\\', input.length-1))
    substr = substr.substring(1, substr.length)
    let fileName = substr.substring(0, substr.lastIndexOf('.'))
    let ext = substr.substring(substr.lastIndexOf('.')+1, substr.length)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${ext}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx')