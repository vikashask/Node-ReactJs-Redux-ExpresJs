import * as types from './actionTypes';

/* 
Actions are payloads of information that send data from your application to your store
*/
/**
 * Function to get all data
 * @param {Object Array} allData 
 */
export const loadAllData = (allData) => {
    
    return {
        type: types.GET_ALL_DATA,
        allData
    }
}
