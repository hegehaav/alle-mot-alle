export const getScore = (match, index) => {
    if (match.score === undefined || match.score[index].points === undefined) {
        return "";
    }
    return match.score[index].points;
}