<template>
<div>
    <div> 
    <router-link to="/" @click="logout"> Logout </router-link></div>
    <h1 v-if="student"> Hello {{ student.name }}! </h1>
</div>
</template>

<script>

import StudentDataService from "../services/StudentDataService"
import CourseList from "./CourseList.vue";
export default{
    name:"studentProfile",

    components:{
        CourseList
    },

    data()
    {
        return{
            student:null,

        }
    },

    methods:{

        logout(event){
            event.preventDefault();
            localStorage.removeItem('sid');
        },

        retreiveStudent(){
            const id = localStorage.getItem('sid');
            console.log("SID: "+id);
            StudentDataService.get(id)
            .then(response => {
                this.student = response.data;
                console.log(this.student);

            })
            .catch(error => {
                console.log(error);
            })
        }

    },
    mounted()
    {
        this.retreiveStudent();
        


    }

}

</script>


<style scoped>

</style>