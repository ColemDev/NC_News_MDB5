
//currently when created_at: 1593011640000 is posted to the backend, it is returned as 2020-06-26T14:14:00.000Z but we want it to return "posted on Nov 20th 2020 at 03:00"
export const dateFormatter = (date) => {
    const newDate = new Date(date);
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    return newDate.toLocaleString("en-GB", options); 
    };