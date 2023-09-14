import {post} from '../../utilities/httpHelper'
import getBaseUrl from '../../utilities/getBaseUrl'

export const formLogin = async params => {
    const host = window.location.host;
    const url = `${getBaseUrl()}/login`;
    const body = await post(url, {...params, host});
    return body.data;
};