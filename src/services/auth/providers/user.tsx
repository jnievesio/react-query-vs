import APIClient from '../../api/client';



export async function getUserData() {
    return (await APIClient.getData('/users/me')).data;
}


export async function getBids () {
    return (await APIClient.getData('/bids')).data;
    
};