<template>
    <div class="laravel-table" :class="css.designClass">
        <table :class="css.tableClass"></table>
    </div>
</template>

<script>
    import ApiBuilder from './ApiBuilder.js'
    import axios from 'axios'

    export default {
        props: {
            data: {
                type: [Array, Object],
                default: null
            },
            apiUrl: {
                type: String,
                default: null
            },
            css: {
                type: Object,
                default: function () {
                    return {
                        designClass: 'laravel-table-default',
                        tableClass: 'table'
                    };
                }
            },
        },
        data () {
            return {
                tableData: [],
                columns: []
            };
        },
        mounted () {
            this.loadData();

        },
        methods: {
            // Load the table data
            loadData() {
                if(this.data)
                {
                    this.tableData = this.data;
                }
                else
                {
                    if(! this.apiUrl)
                        throw Error('You have to either define an API url or pass the data directly.');

                    let api = new ApiBuilder('http://pixeltest.test/api-test', 'users_');

                    console.log(
                        api
                            .perPage(25)
                            .addFilter('name', 'Zs')
                            .sortBy('name', 'ASC')
                            .getUrl());

                    // axios.get(this.apiUrl)
                }
            }
        }
    }
</script>