
export const ucFirstChar = (val) => {
    try {
        return val.charAt(0).toUpperCase() + val.slice(1)
    } catch (error) {
        throw error
    }
}
