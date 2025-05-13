const errorHandler = (error, req, res, next) =>{
    console.log(error)

    const message = error.message || "Internal Server Error";
    const statusCode = error.statusCode || 500;
    res.statusCode(statusCode).json({
        success: false,
        message,
    })
}

export default errorHandler;