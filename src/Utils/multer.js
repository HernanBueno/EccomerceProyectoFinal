import multer from "multer";

const storage = multer.diskStorage({
    destination: function(_req, _file, cb) {
        cb(null, "uploads")
    },
    filename: function(_req, file, cb){
        cb(null, file.originalname )
    }
})

let upload = multer({ storage:storage })

upload = upload.single("miFoto")
function uploadFile(_req,res){
    res.send({data:"El Archivo se subio correctamente"})
}
export{upload, uploadFile}