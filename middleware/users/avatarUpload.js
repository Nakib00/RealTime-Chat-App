function avatarUpload(req, res, next) {
    const upload = uploader(
        // path to save the file in public folder upload/avatars
        "avatars",
        // file formate
        ['image/png', 'image/jpeg', 'image/jpg'],
        1024 * 1024 * 5, // 5MB
        // error message
        'only images are allowed'

    )

    upload.any()(req, res, function (err) {
        if (err) {
            return res.status(500).json({
                error: {
                    avatar: {
                        msg: err.message
                    }
                }
            });
        }else{
            next();
        }
    });

}


module.exports = avatarUpload;