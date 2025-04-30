function uploader(subfolder_path, allowed_file_type, max_file_size, error_msg) {

    // file upload folder
    const upload_path = `${__dirname}/../public/upload/${subfolder_path}`;
    // define the storage 
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, upload_path);
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
        }
    });
    // upload object
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: max_file_size
        },
        fileFilter: function (req, file, cb) {
            if (allowed_file_type.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(new Error(error_msg), false);
            }
        }
    });

    
    return upload;
}

module.exports = uploader;