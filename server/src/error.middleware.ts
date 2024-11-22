
export function ServerErrorMiddleware(error: Error, request: Request, response: Response, next: any) {
    next();
}