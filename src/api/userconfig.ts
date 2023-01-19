import { AccountInfo, IPublicClientApplication } from "@azure/msal-browser";
import { loginRequest } from '../config/msalconfig';

const RequestAccessToken = (instance: IPublicClientApplication, accounts: AccountInfo[]): Promise<any> => {
    var promise = new Promise(function (resolve, reject) {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            resolve(response.accessToken);

        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                resolve(response.accessToken)
            });
        });
    });
    return promise;
}
export function GetData(instance: IPublicClientApplication, accounts: AccountInfo[]) {
    var promise = new Promise(function (resolve, reject) {
        RequestAccessToken(instance, accounts).then(token => {
            fetch('https://api-2445584110491.staging.gw.apicast.io:443/userList?user_key=9569fa38304a6ea13f89b6070d86f04d', {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Bearer ' + token,
                })
            }).then(res => {
                res.json().then(data => { resolve(data) });
            }).catch(err => {
                reject(err);
            })
        });
    });
    return promise;
}
