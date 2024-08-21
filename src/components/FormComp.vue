<template>
    <div >
        <form id="myForm" action="https://submit-form.com/FBtdQasKq" method="POST" novalidate>
                        <div class="p-3 m-5 bd-example m-5 mt-0 border-5 ">
                            <div class="mb-3" style="width: 100%;">
                                <label for="name" class="form-label" id="fCon" style="color: white;" >Name</label>
                                <br>
                                <input type="text" id="name" name="name" required="`${formVal()}`">
                            </div>
                            <div class="mb-3" style="width: 100%;">
                                <label for="email" class="form-label" id="fCon1" style="color: white;">Email address</label>
                                <input type="email" id="email" name="email" placeholder="name@example.com" required="`${formVal()}`">
                            </div>
                            <div class="mb-3" style="width: 100%;">
                                <label for="feedback" class="form-label" id="fCon2" style="color: white;">Message</label>
                                <textarea id="feedback" name="feedback" rows="3" required="`${formVal()}`"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-danger" @click='formVal' >Submit</button>
                            <button type="reset" class="btn">Clear</button>
                        </div>
                    </form>
    </div>
</template>
<script>
export default {
    methods: {
        formVal(event) {
            event.preventDefault(); 
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let feedback = document.getElementById('feedback').value;

            if (!/^[a-zA-Z ]+$/.test(name)) {
                alert('Please enter a valid name');
                return false;
            }

            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                alert('Please enter a valid email');
                return false;
            }

            if (feedback.length < 1) {
                alert('Please provide feedback');
                return false;
            }

            document.getElementById('myForm').submit();
        }
    }
}
</script>
<style>
    #myForm{
        background-color: #900A0680;
        width: 360px;
        height: fit-content;
        margin-bottom: 10%;
        margin-top: 5%;
        
    }
</style>