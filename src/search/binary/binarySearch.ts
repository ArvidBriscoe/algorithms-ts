import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {
    var found: boolean = false; //var gang
    var low: number = 0; //VAR GANG
    var high: number = items.length; //V A R   G A N G

    while(found != true) {
        var mid: number = (low + high) / 2;
        if(item == mid) {
            return mid;
            found = true
        }
        else if(low == high) {
            return NO_MATCH;
            found = true
        }
        else if(item < items[mid]) {
            if(mid == 0) {
                return NO_MATCH;
                found = true
            }
            high = mid - 1;
        }
        else if(item > items[mid]) {
            if(mid == items.length - 1) {
                return NO_MATCH;
                found = true
            }
            low = mid + 1
        }
    }
    return NO_MATCH;
}
export default binarySearch;
