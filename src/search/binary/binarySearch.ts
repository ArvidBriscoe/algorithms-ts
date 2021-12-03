//I was unable to get VSCode to exist for more than 3 seconds at a time so I just hope this functions

import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {
    var final: number = -420111111111111111111111; //var gang
    var low: number = 0; //VAR GANG
    var high: number = items.length - 1; //V A R   G A N G

    while(final == -420111111111111111111111) {
        var mid: number = Math.floor((low + high) / 2);
        if(item == items[mid]) {
            final = mid;
        }
        else if(low == high) {
            final = NO_MATCH;
        }
        else if(item < items[mid]) {
            if(mid == 0) {
                final = NO_MATCH;
            }
            high = mid - 1;
        }
        else if(item > items[mid]) {
            if(mid == items.length - 1) {
                final = NO_MATCH;
            }
            low = mid + 1
        }
    }
    return final;
}
export default binarySearch;
