import { format } from "date-fns";

export const getScore = (score, index) => {
    if (!score || score.length !== 2) {
        return undefined
    }
    return score[index];
}

export const getDate = (date) => {
    if (!date) {
        return undefined;
    }

    return format(date, "dd.MM.yy");
}