export const prepareFontSizeNumber = (data?: string | number) => {
    return typeof data === 'number' 
        ? String(data) + 'px'
        : String(data);
}