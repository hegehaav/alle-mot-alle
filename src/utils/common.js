export const getScore = (match, index) => {
    if (match.score === undefined || match.score[index].points === undefined) {
        return undefined
    }
    return match.score[index].points;
}