<template>
    <div>
        <h2>{{title}}</h2>
        <div class="container">
            <div class="list-group">
                <a
                    v-for="(item, index) in alltotal" :key="index"
                    href=""
                    class="list-group-item list-group-item-action list-group-item-primary">第{{index+1}}次：{{item}}分</a>
            </div>
            <button type="button" class="btn btn-outline-primary btn-block mt-5" @click="goto()">再来一次</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            title:'您的历史分数'
        }
    },
    methods: {
        goto: function() {
            this.$router.push('/about');
        },
    },
    computed: {
        ...mapState([
            'alltotal'
        ])
    },
}
</script>