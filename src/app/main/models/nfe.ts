export interface Ide {
    cUF: string;
    cNF: string;
    natOp: string;
    indPag: string;
    mod: string;
    serie: string;
    nNF: string;
    dhEmi: Date;
    dhSaiEnt: Date;
    tpNF: string;
    idDest: string;
    cMunFG: string;
    tpImp: string;
    tpEmis: string;
    cDV: string;
    tpAmb: string;
    finNFe: string;
    indFinal: string;
    indPres: string;
    procEmi: string;
    verProc: string;
}

export interface EnderEmit {
    xLgr: string;
    nro: string;
    xCpl: string;
    xBairro: string;
    cMun: string;
    xMun: string;
    UF: string;
    CEP: string;
    cPais: string;
    xPais: string;
    fone: string;
}

export interface Emit {
    CNPJ: string;
    xNome: string;
    xFant: string;
    enderEmit: EnderEmit;
    IE: string;
    CRT: string;
}

export interface EnderDest {
    xLgr: string;
    nro: string;
    xBairro: string;
    cMun: string;
    xMun: string;
    UF: string;
    CEP: string;
    cPais: string;
    xPais: string;
    fone: string;
}

export interface Dest {
    CNPJ: string;
    xNome: string;
    enderDest: EnderDest;
    indIEDest: string;
    IE: string;
    email: string;
}

export interface Prod {
    cProd: string;
    cEAN: string;
    xProd: string;
    NCM: string;
    EXTIPI: string;
    CFOP: string;
    uCom: string;
    qCom: string;
    vUnCom: string;
    vProd: string;
    cEANTrib: string;
    uTrib: string;
    qTrib: string;
    vUnTrib: string;
    indTot: string;
    xPed: string;
    nFCI: string;
}

export interface ICMS00 {
    orig: string;
    CST: string;
    modBC: string;
    vBC: string;
    pICMS: string;
    vICMS: string;
}

export interface ICMS {
    ICMS00: ICMS00;
}

export interface IPINT {
    CST: string;
}

export interface IPI {
    cEnq: string;
    IPINT: IPINT;
}

export interface PISNT {
    CST: string;
}

export interface PIS {
    PISNT: PISNT;
}

export interface COFINSNT {
    CST: string;
}

export interface COFINS {
    COFINSNT: COFINSNT;
}

export interface Imposto {
    ICMS: ICMS;
    IPI: IPI;
    PIS: PIS;
    COFINS: COFINS;
}

export interface Det {
    prod: Prod;
    imposto: Imposto;
    _nItem: string;
}

export interface ICMSTot {
    vBC: string;
    vICMS: string;
    vICMSDeson: string;
    vBCST: string;
    vST: string;
    vProd: string;
    vFrete: string;
    vSeg: string;
    vDesc: string;
    vII: string;
    vIPI: string;
    vPIS: string;
    vCOFINS: string;
    vOutro: string;
    vNF: string;
}

export interface Total {
    ICMSTot: ICMSTot;
}

export interface Transporta {
    CNPJ: string;
    xNome: string;
    IE: string;
    xEnder: string;
    xMun: string;
    UF: string;
}

export interface Vol {
    qVol: string;
    esp: string;
    pesoL: string;
    pesoB: string;
}

export interface Transp {
    modFrete: string;
    transporta: Transporta;
    vol: Vol;
}

export interface InfAdic {
    infCpl: string;
}

export interface InfNFe {
    ide: Ide;
    emit: Emit;
    dest: Dest;
    det: Det;
    total: Total;
    transp: Transp;
    infAdic: InfAdic;
    _versao: string;
    _Id: string;
}

export interface CanonicalizationMethod {
    _Algorithm: string;
}

export interface SignatureMethod {
    _Algorithm: string;
}

export interface Transform {
    _Algorithm: string;
}

export interface Transforms {
    Transform: Transform[];
}

export interface DigestMethod {
    _Algorithm: string;
}

export interface Reference {
    Transforms: Transforms;
    DigestMethod: DigestMethod;
    DigestValue: string;
    _URI: string;
}

export interface SignedInfo {
    CanonicalizationMethod: CanonicalizationMethod;
    SignatureMethod: SignatureMethod;
    Reference: Reference;
}

export interface X509Data {
    X509Certificate: string;
}

export interface KeyInfo {
    X509Data: X509Data;
}

export interface Signature {
    SignedInfo: SignedInfo;
    SignatureValue: string;
    KeyInfo: KeyInfo;
    _xmlns: string;
}

export interface NFe {
    infNFe: InfNFe;
    Signature: Signature;
    _xmlns: string;
}

export interface InfProt {
    tpAmb: string;
    verAplic: string;
    chNFe: string;
    dhRecbto: Date;
    nProt: string;
    digVal: string;
    cStat: string;
    xMotivo: string;
}

export interface ProtNFe {
    infProt: InfProt;
    _versao: string;
}

export interface NfeProc {
    NFe: NFe;
    protNFe: ProtNFe;
    _xmlns: string;
    _versao: string;
}

export interface RootObject {
    nfeProc: NfeProc;
}

