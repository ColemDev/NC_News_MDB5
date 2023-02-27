import { format } from 'date-fns';


export const dateConverter = (date) => {

    const newDate = new Date(date);
    const formattedDate = format(newDate, 'dd/MM/yyyy');
    return formattedDate;
}