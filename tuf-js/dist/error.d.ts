export declare class ValueError extends Error {
}
export declare class RuntimeError extends Error {
}
export declare class PersistError extends Error {
}
export declare class RepositoryError extends Error {
}
export declare class UnsignedMetadataError extends RepositoryError {
}
export declare class BadVersionError extends RepositoryError {
}
export declare class EqualVersionError extends BadVersionError {
}
export declare class ExpiredMetadataError extends RepositoryError {
}
export declare class LengthOrHashMismatchError extends RepositoryError {
}
export declare class CryptoError extends Error {
}
export declare class UnsupportedAlgorithmError extends CryptoError {
}
export declare class DownloadError extends Error {
}
export declare class DownloadLengthMismatchError extends DownloadError {
}
export declare class DownloadHTTPError extends DownloadError {
    statusCode: number;
    constructor(message: string, statusCode: number);
}
