<template>
    <BaseDialog v-if="inputIsInvalid" title="Invalid Input!" @close="confirmError">
        <!-- targetting the default slot with no name -->
        <template #default>
            <p>One input value is invalid.</p>
            <p>Enter all inputs</p>
        </template>
        <!-- targetting the slot with name 'actions' -->
        <template #actions>
            <BaseButton @click="confirmError" >Okay</BaseButton>
        </template>
    </BaseDialog>
    <BaseCard>
        <form action="" @submit.prevent="submitData">
            <div class="form-control">       
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="titleInput">
            </div>

             <div class="form-control">       
                <label for="description">Description</label>
                <textarea name="description" id="description" rows="3" ref="descInput"></textarea>
            </div>
            
            <div class="form-control">       
                <label for="link">Link</label>
                <input id="link" name="link" type="text" ref="linkInput">
            </div>

            <div>  
                <!-- type here is a prop and not an actual "type" 
                     that buttons have, the string here will give the 
                     button its type as its tied to the prop in this 
                     component's cile  -->
                <BaseButton type="submit">Add Resource</BaseButton>
            </div>
            
        </form>
    </BaseCard>
</template>

<script>
export default {
    inject: ['addResource'],

    data() {
        return {
            inputIsInvalid: false
            }
    },

    methods: {
      submitData() {
        const enteredTitle = this.$refs.titleInput.value;
        const enteredDesc = this.$refs.descInput.value;
        const enteredLink = this.$refs.linkInput.value; 

        //trim removes whitespace from both ends of a string and actuall blank input that's entered
        if(enteredTitle.trim() === '' || 
           enteredDesc.trim() === '' || 
           enteredLink.trim() === '') {
            // add more validation here
            this.inputIsInvalid = true;
            //stop the function from continuing here
            return;
        }

        this.addResource(enteredTitle, enteredDesc, enteredLink);
      },
      confirmError() {
        this.inputIsInvalid = false;
      }  
    },
}
</script>

<style scoped>
    label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    }

    input,
    textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
    }

    input:focus,
    textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
    }

    .form-control {
    margin: 1rem 0;
    }
</style>