interface MetadataType {
    id?: string | number | undefined,
    title?: string
}

interface SingleGetResponse {
    success: boolean,
    message: string,
    data: any
}