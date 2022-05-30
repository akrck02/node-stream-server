import API from "./api/Api";

export default class StreamingServer { 
    public static start() {
        API.start();
    }
}

StreamingServer.start();