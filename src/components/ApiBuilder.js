/**
 * Just a simple class to help manage the api calls
 * easily with fluent API.
 */
class ApiBuilder {

    constructor(baseUrl, queryPrefix){
        this._baseUrl = baseUrl;
        this._queryPrefix = queryPrefix ? queryPrefix : '';

        // The URL parameter keys, feel free to overwrite these
        this.keys = {
            perPage: 'perPage',
            page: 'page',
            query: 'query',
            sortBy: 'sortBy',
            sortMode: 'sortMode',
        };
    }

    perPage(value){
        this._perPage = value;
        return this;
    }

    page(value){
        this._page = value;
        return this;
    }

    query(value){
        this._query = value;
        return this;
    }

    sortBy(column, mode){
        this._sortBy = column;
        this._sortMode = mode;
        return this;
    }

    addFilter(key, value){
        if(!this._filters) this._filters = {};
        this._filters[key] = value;
        return this;
    }

    getUrl(){
        let url = new URL(this._baseUrl);

        if(this._perPage)
            url.searchParams.append(this._queryPrefix + this.keys.perPage, this._perPage);

        if(this._page)
            url.searchParams.append(this._queryPrefix + this.keys.page, this._page);

        if(this._query)
            url.searchParams.append(this._queryPrefix + this.keys.query, this._query);

        if(this._sortBy)
            url.searchParams.append(this._queryPrefix + this.keys.sortBy, this._sortBy);

        if(this._sortMode)
            url.searchParams.append(this._queryPrefix + this.keys.sortMode, this._sortMode);

        for (let key in this._filters)
        {
            if(this._filters.hasOwnProperty(key))
                url.searchParams.append(key, this._filters[key]);
        }

        return url.href;
    }
}

export default ApiBuilder;