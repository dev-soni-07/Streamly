class ApiError extends Error {
    constructor(
        statusCode,
        messagge = "Something went wrong",
        errors = [],
        stack = "",
    ) {
        // Override the default Error class constructor
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }