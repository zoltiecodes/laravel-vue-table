import LaravelTable from './components/LaravelTable.vue';
import Vue from 'vue/dist/vue.js'

const LaravelTablePlugin = {
    install(Vue, options){

        Vue.component('laravel-table', LaravelTable)

        Vue.mixin({
            mounted(){
                console.log('Laravel Table Mounted');
            }
        });
    }
};

export default LaravelTablePlugin;