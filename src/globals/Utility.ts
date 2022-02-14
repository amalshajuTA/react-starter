class Utility {

    parseQueryString(path: string){

        const parsedQueryString: any = {};

        const queryString = path?.split('?')[1];
        const queryStringList = queryString?.split('&');

        queryStringList?.forEach(item=>{
            const key = item.split('=')[0];
            const value = item.split('=')[1];
            parsedQueryString[decodeURIComponent(key)] = this.decodeValue(value)
        })

        return parsedQueryString
    }

    decodeValue(value : any){

        const decodedValue = decodeURIComponent(value || '');
        try {
            return JSON.parse(decodedValue);
        }catch(e) {
            return decodedValue;
        }
    }

}

export default new Utility()