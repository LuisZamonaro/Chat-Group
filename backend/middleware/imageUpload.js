const multer = require("multer")
const path = require("path")

// Destination to store image
const imageStorage = multer.diskStorage({
    destination: function(req, res, cb) { // mudando o destino padrão
        let folder = ""

        if(req.baseUrl.includes("users")) {
            folder = "users"
        } else if(req.baseUrl.includes("photos")) {
            folder = "photos"
        }

        cb(null, `uploads/${folder}/`) // configura o destino da imagem
    },
    filename: (req, file, cb) => { //mudando o nome do arquivo padrão
        cb(null, Date.now() + path.extname(file.originalname)) // 74552418.jpg
    }
})

const imageUpload = multer({
    storage: imageStorage,
    fileFilter: (req, file, cb) => {
        // Verifique a extensão do arquivo
        const allowedFormats = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp'];
        const extname = path.extname(file.originalname).toLowerCase();
        if (allowedFormats.includes(extname)) {
            // O formato é permitido
            cb(null, true);
        } else {
            // Formato não permitido
            cb(new Error("Por favor, envie apenas arquivos PNG, JPG, JPEG, GIF, BMP ou WebP."));
        }
    }
});

// aceita todas os arquivos de imagem imagens
// const imageUpload = multer({
//     storage: imageStorage,
//     fileFilter(req, file, cb) {
//         // Sempre retorna verdadeiro, aceitando qualquer tipo de arquivo
//         cb(undefined, true);
//     }
// });

// aceita somente png e jpg
// const imageUpload = multer({
//     storage: imageStorage,
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(png|jpg)$/)) {
//             // upload only png and jpg formats
//             return cb(new Error("Por favor envie apenas png ou jpg!"))
//         }
//         cb(undefined, true)
//     }
// })

module.exports = {imageUpload}