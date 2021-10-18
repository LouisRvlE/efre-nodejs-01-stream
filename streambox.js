const fs = require("fs")
const { stdout } = require("process")
const { Transform } = require('stream')


function duplicate(file) {
    let [filename, ext] = file.split(".")

    const readstream = fs.createReadStream(__dirname + "/" + file)
    let writestream = fs.createWriteStream("./" + filename + ".copy." + ext)
    readstream.pipe(writestream)

    writestream.on("finish", () => {
        console.log("File: " + file + " succesfully duplicated!")
    })
    

}

// fs.createReadStream('IMAGE.JPG').pipe(process.stdout)


String.prototype.func = function(_fun) {
    // this._fun()
    console.log(_fun)
    return this
}
console.log("oUi".func(String.prototype.toLowerCase))


// function transform(filename, regex, func) {
//     const TransformStream = new Transform();
//     TransformStream._transform = (chunk, _encoding, callback) => {
//         TransformStream.push(chunk.toString().func(func));
//         callback();
//     }
//     const readstream = fs.createReadStream(__dirname + "/" + filename)

//     readstream.pipe(TransformStream).pipe(process.stdout);
// }
// transform("./README.md", "pouet", String.prototype.toLowerCase)


module.exports = {
    duplicate,
}