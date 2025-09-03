<template>
    <BaseCard>
        <form action="">
            <div class="form-control">       
                <label for="title">Title</label>
                <input id="title" name="title" type="text">
            </div>

             <div class="form-control">       
                <label for="description">Description</label>
                <textarea name="description" id="description" rows="3"></textarea>
            </div>
            
            <div class="form-control">       
                <label for="link">Link</label>
                <input id="link" name="link" type="text">
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