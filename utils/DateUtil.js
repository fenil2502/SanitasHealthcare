/**
 * Get the digit of Month from given Date
 * If date string is not valid then return 0
 * @param  {string} dateString The valid date string
 * @return {Number}      The month digit
 */
 export const dateMonth = (dateString) => {
    let month = 0;
    if (!isNaN(Date.parse(dateString))) {
        month = new Date(dateString).toLocaleString('default', { month: 'numeric' });
        return month;
    }
    return month;

}

/**
 * Get the Difference of Years between two valid dates
 * @param {Date} endDate - the end date
 * @param {Date} startDate - the start date
 * @return {number} Difference of Years between startDate and endDate
*/
export const yearDifference = (endDate, startDate) => {
    if (!isNaN(Date.parse(startDate)) && !isNaN(Date.parse(endDate))) {
        let sDate = new Date(startDate);
        let eDate = new Date(endDate);
        let yearsDiff = eDate.getFullYear() - sDate.getFullYear();
        return yearsDiff;

    }

}

/**
 * Get the Difference of Months between two valid dates
 * @param {Date} endDate - the end date
 * @param {Date} startDate - the start date
 * @return {number} Difference of Months between startDate and endDate
*/
export const monthDifference = (endDate, startDate, roundUpFractionalMonths) => {
    if (!isNaN(Date.parse(startDate)) && !isNaN(Date.parse(endDate))) {
        let sDate = new Date(startDate);
        let eDate = new Date(endDate);
        let inverse = false;
        if (startDate > endDate) {
            eDate = new Date(startDate);
            sDate = new Date(endDate);
            inverse = true;
        }

        let yearsDifference = yearDifference(eDate,sDate);
        let monthsDifference = eDate.getMonth() - sDate.getMonth();
        let daysDifference = eDate.getDate() - sDate.getDate();
        let monthCorrection = 0;

        //If roundUpFractionalMonths is true, check if an extra month needs to be added from rounding up.
        //The difference is done by ceiling (round up), e.g. 3 months and 1 day will be 4 months.
        if (roundUpFractionalMonths === true && daysDifference > 0) {
            monthCorrection = 1;
        }

        //If the day difference between the 2 months is negative, the last month is not a whole month.
        else if (roundUpFractionalMonths !== true && daysDifference < 0) {
            monthCorrection = -1;
        }
        let months = (inverse ? -1 : 1) * (yearsDifference * 12 + monthsDifference + monthCorrection);

        return months;

    }

}