import IApiFunctionSet from "./interfaces/IApiFunctionSet";
import Video from "./Video";
import WebServer from "./WebServer";

export class Router {
    
    public static API = `/`;

    public static async start() : Promise<IApiFunctionSet> {

        const paths :IApiFunctionSet = {
            "video": (req, res) => Video.stream(req, res),
            "" : (req, res) => WebServer.index(req, res)
        }

        return paths;
    }

}