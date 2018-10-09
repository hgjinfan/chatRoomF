<template>
    <div></div>
</template>

<script>
import Mock from 'mockjs'
export default {
    created () {
        Mock.mock('/login','post', (option) => {
            return option
        })
    }
};
</script>
