export const useCleanText = (text: string) => {
    return text.replace(/style="[^"]*"/g, '')
}