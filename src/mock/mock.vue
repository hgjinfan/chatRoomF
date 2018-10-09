<template>
    <div></div>
</template>

<script>
import Mock from 'mockjs'
export default {
    created () {
        Mock.mock('/login','post', (option) => {
            return {
                user_id: 'xgx'
            }
        })
        Mock.mock('/getUser', 'get', (option) => {
            return {
                userName: '1'
            }
        })
    }
};
</script>
