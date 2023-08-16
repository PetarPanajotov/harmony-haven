exports.ratingChecker = (rating) => {
    rating = Number(rating);
    
    if (rating <= 10 && rating > 9) {
        return "Perfection"
    } else if (rating <= 9 && rating > 8) {
        return "Outstanding"
    } else if (rating <= 8 && rating > 7) {
        return "Excellent"
    } else if (rating <= 7 && rating > 6) {
        return "Great"
    } else if (rating <= 6 && rating > 5) {
        return "Good"
    } else if (rating <= 5 && rating > 4) {
        return "Average"
    } else if (rating <= 4 && rating > 3) {
        return "Fair"
    } else if (rating <= 3 && rating > 2) {
        return "Poor"
    } else if (rating <= 2 && rating > 1) {
        return "Terrible"
    };
};