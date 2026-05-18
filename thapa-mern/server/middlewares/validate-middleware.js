export const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = "Fill all the required fields correctly";
        if (err.name === "ZodError") {
            const extraDetails = err.issues.map((e) => e.message).join(", ");
            return res.status(status).json({
                message,
                extraDetails
            });
        }

        next(error);
    }
}