import wretch from 'wretch';

import { BASE_URL } from '../constants';
import WooCommerceAPI from "./WooCommerce/WooCommerceAPI";
import Constants from './WooCommerce/Config';

export const customersApi = wretch(`${BASE_URL}/customers`);
export const baseApi = wretch(BASE_URL);



var ApiConfig = new WooCommerceAPI({
    url: Constants.URL.root,
    consumerKey: Constants.Keys.ConsumerKey,
    consumerSecret: Constants.Keys.ConsumerSecret,
    wp_api: true,
    version: 'wc/v2',
    queryStringAuth: true
});

export default ApiConfig;
