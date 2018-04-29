export class PontoMapaContent {
    public name: string;
    public endereco: string;
    public lastUpdated: Date;
    public contentStatus: string;
    public statusBar: IconedStatus[];
}

export class IconedStatus {
    public iconName: string;
    public description: string;
}
