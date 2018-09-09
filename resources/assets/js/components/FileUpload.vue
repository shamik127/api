<template>
    <div>
        <input type="file" name="file" id="file" v-on:change="handleFileUpload()" ref="file">
        <button v-on:click="handleSubmit()">Upload Files</button>
        <h1 class="display-1"> {{uploadPercentage}} </h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'FileUpload',
    data() {
        return {
            file: '',
            uploadPercentage: 0
        }
    },
    computed: {

    },
    methods: {
        handleFileUpload: () => {
            this.file = document.getElementById('file').files[0];
        },
        handleSubmit: () => {
            let formData = new FormData();
            formData.append('file', this.file);
            axios.post('/file/create',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: function(progressEvent) {
                    console.log(this.uploadPercentage);
                    this.uploadPercentage = parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total));
                }.bind(this)
            }
            )
            .then(function(response){
                console.log(response.data);
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }
}
</script>

<style scoped>

</style>
