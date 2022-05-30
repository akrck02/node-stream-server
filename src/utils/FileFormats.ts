export enum FileFormats {
    MP4 = "mp4",
    MP3 = "mp3",
    JPG = "jpg",
    PNG = "png",
    GIF = "gif",
    SVG = "svg",
    PDF = "pdf",
    TXT = "txt",
    JSON = "json",
    HTML = "html",
    CSS = "css",
    JS = "js",
}

export enum MimeTypes {
    MP4 = "video/mp4",
    MP3 = "audio/mp3",
    JPG = "image/jpeg",
    PNG = "image/png",
    GIF = "image/gif",
    SVG = "image/svg+xml",
    PDF = "application/pdf",
    TXT = "text/plain",
    JSON = "application/json",
    HTML = "text/html",
    CSS = "text/css",
    JS = "application/javascript",
}

export class FileFormatUtils {

    static isVideo(fileFormat : FileFormats = FileFormats.TXT) : boolean {
        return fileFormat === FileFormats.MP4;
    }

    static isAudio(fileFormat : FileFormats = FileFormats.TXT) : boolean {
        return fileFormat === FileFormats.MP3;
    }

    static isImage(fileFormat : FileFormats = FileFormats.TXT) : boolean {
        return fileFormat === FileFormats.JPG ||
               fileFormat === FileFormats.PNG ||
               fileFormat === FileFormats.GIF ||
               fileFormat === FileFormats.SVG;
    }

    static isDocument(fileFormat : FileFormats = FileFormats.TXT) : boolean {
        return fileFormat === FileFormats.PDF ||
               fileFormat === FileFormats.TXT ||
               fileFormat === FileFormats.JSON ||
               fileFormat === FileFormats.HTML ||
               fileFormat === FileFormats.CSS ||
               fileFormat === FileFormats.JS;
    }

    static getFileFormat(extension : string) : FileFormats {
        switch(extension.toLowerCase()) {
            case FileFormats.MP4:
                return FileFormats.MP4;
            case FileFormats.MP3:
                return FileFormats.MP3;
            case FileFormats.JPG:
                return FileFormats.JPG;
            case FileFormats.PNG:
                return FileFormats.PNG;
            case FileFormats.GIF:
                return FileFormats.GIF;
            case FileFormats.SVG:
                return FileFormats.SVG;
            case FileFormats.PDF:
                return FileFormats.PDF;
            case FileFormats.TXT:
                return FileFormats.TXT;
            case FileFormats.JSON:
                return FileFormats.JSON;
            case FileFormats.HTML:
                return FileFormats.HTML;
            case FileFormats.CSS:
                return FileFormats.CSS;
            case FileFormats.JS:
                return FileFormats.JS;
            default:
                return FileFormats.TXT;
        }
    }

    static getMimeType(fileFormat : FileFormats = FileFormats.TXT) : string {
        switch(fileFormat) {
            case FileFormats.MP4:
                return MimeTypes.MP4;
            case FileFormats.MP3:
                return MimeTypes.MP3;
            case FileFormats.JPG:
                return MimeTypes.JPG;
            case FileFormats.PNG:
                return MimeTypes.PNG;
            case FileFormats.GIF:
                return MimeTypes.GIF;
            case FileFormats.SVG:
                return MimeTypes.SVG;
            case FileFormats.PDF:
                return MimeTypes.PDF;
            case FileFormats.TXT:
                return MimeTypes.TXT;
            case FileFormats.JSON:
                return MimeTypes.JSON;
            case FileFormats.HTML:
                return MimeTypes.HTML;
            case FileFormats.CSS:
                return MimeTypes.CSS;
            case FileFormats.JS:
                return MimeTypes.JS;
            default:
                return MimeTypes.TXT;
        }

    }
}
