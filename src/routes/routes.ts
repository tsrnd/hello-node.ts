import { Request, Response } from 'express';

export class Routes {
    public routes(app): void {
        // app.route('/')
        //     .get((req: Request, res: Response) => {
        //         res.status(200).send({
        //             message: 'Hello nodejs team1'
        //         });
        //     });
        app.route('/')
            .get((req: Request, res: Response) => {
                res.sendFile(__dirname + '/index.html');
            });
    }
}
