import { Route, Get, Controller } from 'tsoa';
@Route("api/health")
export class HealthController extends Controller {
    constructor() {
        super();
    }
    @Get()
    public async check() {
        return true;
    }
}