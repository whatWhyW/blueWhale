import {sendPostRequest} from './common_actions';

export function getWorkloads(paramData) {
    return sendPostRequest(
        '/api/engineer/getWorkLoad',
        paramData
    );
}