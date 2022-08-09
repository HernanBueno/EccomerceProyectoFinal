import multer from "multer";

const storage = multer.diskStorage({
    destination: function(_req, _file, cb) {
        cb(null, "uploads")
    },
    filename: function(_req, file, cb){
        cb(null, file.originalname )
    }
})

const upload = multer({ storage:storage })


exports.upload = upload.single("miFoto")

exports.uploadFile = (_req,res) =>{
    res.send({data:"El Archivo se subio correctamente"})
}