<template>
    <div>
        <h4> Login </h4>
        <form>
            <div>
                <label for="studentId">Student ID: </label>
                <input type="text" id="studentId" v-model="studentLoginRequest.studentId" />
            </div>
            <div>
                <label for="password">Password: </label>
                <input type="password" id="password" v-model="studentLoginRequest.password" />
            </div>
        </form>
        <div>
                <button type="submit" @click="login"> Login </button>
        </div>
        <p> {{ message }}</p>
    </div>

</template>

<script>
import LoginService from '@/services/LoginService';

export default {
    name: "studentLogin",
    data() 
    {
        return {
            studentLoginRequest: {studentId:"", password:""},
            message:""
        }
    },

    methods:
    {
        login()
        {
            LoginService.login(this.studentLoginRequest)
            .then(
                response => {
                    let student = response.data;
                    console.log(student);
                    localStorage.setItem('sid', student.id);
                    this.message = student;
                    this.$router.push({name: "studentProfile"});
                }
            )
            .catch(error => {
                this.studentLoginRequest.studentId = "";
                this.studentLoginRequest.password = "";
                this.message = error.response.data.message;
                console.log(error.response.data);
            })
        }

    },

    mounted(){
        this.message = "";
    }
}
</script>


<style> 

</style>