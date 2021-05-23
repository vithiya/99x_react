import axios from 'axios';

const PRICE_LIST_BASE_URL ='http://localhost:8080/initial_price/1';
const All_PRICE_LIST_BASE_URL ='http://localhost:8080/initial_price';

class PriceService {
    getPriceList(){
        return axios.get(All_PRICE_LIST_BASE_URL);
    }
}

export default new PriceService();