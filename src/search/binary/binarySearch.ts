import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {
    var mid = items.length / 2; //var gang
    var done = false;
    while(done == false) {
        if(item != items[mid]) {
            if(item > items[mid]) {
                items = items.slice(mid);
                mid = items.length / 2;
            }
            else if(item < items[mid]) {
                items = items.slice(-mid);
                mid = items.length / 2;
            }
        }
        else if(item == items[mid]){
            done = true;
        }
        else {
            done = true
            return NO_MATCH;
        }
    }
}

export default binarySearch;