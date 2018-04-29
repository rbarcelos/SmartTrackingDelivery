export interface Toma03 {
    toma: string;
}

export interface Ide {
    cUF: string;
    cCT: string;
    CFOP: string;
    natOp: string;
    forPag: string;
    mod: string;
    serie: string;
    nCT: string;
    dhEmi: Date;
    tpImp: string;
    tpEmis: string;
    cDV: string;
    tpAmb: string;
    tpCTe: string;
    procEmi: string;
    verProc: string;
    cMunEnv: string;
    xMunEnv: string;
    UFEnv: string;
    modal: string;
    tpServ: string;
    cMunIni: string;
    xMunIni: string;
    UFIni: string;
    cMunFim: string;
    xMunFim: string;
    UFFim: string;
    retira: string;
    toma03: Toma03;
}

export interface ObsCont {
    xTexto: string;
    _xCampo: string;
}

export interface Compl {
    xObs: string;
    ObsCont: ObsCont[];
}

export interface EnderEmit {
    xLgr: string;
    nro: string;
    xCpl: string;
    xBairro: string;
    cMun: string;
    xMun: string;
    CEP: string;
    UF: string;
}

export interface Emit {
    CNPJ: string;
    IE: string;
    xNome: string;
    xFant: string;
    enderEmit: EnderEmit;
}

export interface EnderReme {
    xLgr: string;
    nro: string;
    xCpl: string;
    xBairro: string;
    cMun: string;
    xMun: string;
    CEP: string;
    UF: string;
    cPais: string;
    xPais: string;
}

export interface Rem {
    CNPJ: string;
    IE: string;
    xNome: string;
    xFant: string;
    fone: string;
    enderReme: EnderReme;
    email: string;
}

export interface EnderDest {
    xLgr: string;
    nro: string;
    xBairro: string;
    cMun: string;
    xMun: string;
    CEP: string;
    UF: string;
    cPais: string;
    xPais: string;
}

export interface Dest {
    CNPJ: string;
    IE: string;
    xNome: string;
    fone: string;
    enderDest: EnderDest;
    email: string;
}

export interface Comp {
    xNome: string;
    vComp: string;
}

export interface VPrest {
    vTPrest: string;
    vRec: string;
    Comp: Comp[];
}

export interface ICMS00 {
    CST: string;
    vBC: string;
    pICMS: string;
    vICMS: string;
}

export interface ICMS {
    ICMS00: ICMS00;
}

export interface Imp {
    ICMS: ICMS;
    vTotTrib: string;
    infAdFisco: string;
}

export interface InfQ {
    cUnid: string;
    tpMed: string;
    qCarga: string;
}

export interface InfCarga {
    vCarga: string;
    proPred: string;
    infQ: InfQ[];
}

export interface InfNFe {
    chave: string;
    dPrev: string;
}

export interface InfDoc {
    infNFe: InfNFe[];
}

export interface Seg {
    respSeg: string;
    xSeg: string;
    nApol: string;
    vCarga: string;
}

export interface Prop {
    CNPJ: string;
    RNTRC: string;
    xNome: string;
    IE: string;
    UF: string;
    tpProp: string;
}

export interface Veic {
    cInt: string;
    RENAVAM: string;
    placa: string;
    tara: string;
    capKG: string;
    capM3: string;
    tpProp: string;
    tpVeic: string;
    tpRod: string;
    tpCar: string;
    UF: string;
    prop: Prop;
}

export interface Moto {
    xNome: string;
    CPF: string;
}

export interface Rodo {
    RNTRC: string;
    dPrev: string;
    lota: string;
    veic: Veic[];
    moto: Moto;
}

export interface InfModal {
    rodo: Rodo;
    _versaoModal: string;
}

export interface InfCTeNorm {
    infCarga: InfCarga;
    infDoc: InfDoc;
    seg: Seg;
    infModal: InfModal;
}

export interface AutXML {
    CNPJ: string;
}

export interface InfCte {
    ide: Ide;
    compl: Compl;
    emit: Emit;
    rem: Rem;
    dest: Dest;
    vPrest: VPrest;
    imp: Imp;
    infCTeNorm: InfCTeNorm;
    autXML: AutXML;
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

export interface CTe {
    infCte: InfCte;
    Signature: Signature;
    _xmlns: string;
}

export interface InfProt {
    tpAmb: string;
    verAplic: string;
    chCTe: string;
    dhRecbto: Date;
    nProt: string;
    digVal: string;
    cStat: string;
    xMotivo: string;
}

export interface ProtCTe {
    infProt: InfProt;
    _versao: string;
}

export interface CteProc {
    CTe: CTe;
    protCTe: ProtCTe;
}

export interface RootObject {
    cteProc: CteProc;
}


