<template>
    <div>
        <h2> {{ title }}</h2>
    </div>

</template>

<script>
export default{
    name: "courseList",

    data(){
        return {
            sid: 0,
            sections:[],
            title:"Registered Courses"
        }
    },
    methods:{

    },
    mounted()
    {
        
    }

}
</script>

<style scoped>

</style>