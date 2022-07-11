



// All Selectors
const UI = {
    loadSelectors() {
        const formElm = document.querySelector('form');
        const firstNameElm = document.querySelector('#firstName');
        const lastNameElm = document.querySelector('#lastName');
        const emailElm = document.querySelector('#email');
        const phoneNumberElm = document.querySelector('#phoneNumber');
        const websiteUrlElm = document.querySelector('#websiteUrl');
        const cityElm = document.querySelector('#city');
        const zipElm = document.querySelector('#zip');

        // validation 
        const firstNameFeedBackElm = document.querySelector('#firstNameFeedBack');
        const lastNameFeedBackElm = document.querySelector('#lastNameFeedBack');
        const emailFeedBackElm = document.querySelector('#emailFeedBack');

        return {
            formElm,
            firstNameElm,
            lastNameElm,
            emailElm,
            phoneNumberElm,
            websiteUrlElm,
            cityElm,
            zipElm,
            firstNameFeedBackElm,
            lastNameFeedBackElm,
            emailFeedBackElm
        }
    },
    showMessage(msg) {
        const { messageElm } = this.loadSelector();
        const elm = `<div class="alert alert-danger" id="message" role="alert">
                            ${msg}
                        </div>`;
        messageElm.insertAdjacentHTML("afterbegin", elm);
        this.hideMessage();
    },
    validateInputs({firstName, lastName, email, phoneNumber, websiteUrl, city, zip}) {

       const {firstNameElm, firstNameFeedBackElm, lastNameElm, emailElm, lastNameFeedBackElm, emailFeedBackElm} =  this.loadSelectors();


        // username
        // name => must be more than 5 character . must not contain number and any special character
        // email => valid email format
        // phone => bd phone
        // slug => (letter, number , -, _)
        // generate strong password => search online > button > generate and copy
        // validate strong password
        // website url

        let fNameIsValid = false;
        const nameRegex = /^[a-z](.+){3}[a-z]$/i;        
        if(nameRegex.test(firstName)) {

            fNameIsValid =  true;
            // at first remove invalid class then add valid class
            firstNameElm.classList.remove('is-invalid');
            firstNameElm.classList.add('is-valid');
            firstNameFeedBackElm.className = 'valid-feedback';
            firstNameFeedBackElm.textContent = 'Looks good!';

        } else {

            // at first remove valid class then add invalid class
            firstNameElm.classList.remove('is-valid');
            firstNameElm.classList.add('is-invalid');
            firstNameFeedBackElm.className = 'invalid-feedback';
            firstNameFeedBackElm.textContent = 'Use only letter and must be more than 5 character';

        }


        
        let lNameIsValid = false;
        if(nameRegex.test(lastName)) {
            
            lNameIsValid = true;
            // at first remove invalid class then add valid class
            lastNameElm.classList.remove('is-invalid');
            lastNameElm.classList.add('is-valid');
            lastNameFeedBackElm.className = 'valid-feedback';
            lastNameFeedBackElm.textContent = 'Looks good!';
        } else {


            // at first remove valid class then add invalid class
            lastNameElm.classList.remove('is-valid');
            lastNameElm.classList.add('is-invalid');
            lastNameFeedBackElm.className = 'invalid-feedback';
            lastNameFeedBackElm.textContent = 'Use only letter and must be more than 5 character';

        }




        // Email validation
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
        if(emailRegex.test(email)) {
            

            // at first remove invalid class then add valid class
            emailElm.classList.remove('is-invalid');
            emailElm.classList.add('is-valid');
            emailFeedBackElm.className = 'valid-feedback';
            emailFeedBackElm.textContent = 'Looks good!';
    

        } else {

            // at first remove valid class then add invalid class
            emailElm.classList.remove('is-valid');
            emailElm.classList.add('is-invalid');
            emailFeedBackElm.className = 'invalid-feedback';
            emailFeedBackElm.textContent = 'Please provide valid email address';
        }

        



    },
    getInputs() {
        const {firstNameElm, lastNameElm, emailElm, phoneNumberElm, websiteUrlElm, cityElm, zipElm} = this.loadSelectors();

        return {
            firstName: firstNameElm.value,
            lastName: lastNameElm.value,
            email: emailElm.value,
            phoneNumber: phoneNumberElm.value,
            websiteUrl: websiteUrlElm.value,
            city: cityElm.value,
            zip: zipElm.value
        }
    },
    init(){

        const {formElm} = this.loadSelectors();
        formElm.addEventListener('submit', (e) => {
            e.preventDefault();

            // get input
            const inputData = this.getInputs();

            // validate input
            const isValid = this.validateInputs(inputData);
            // console.log(isValid, 'isValid');
            // if (!isValid) return false;

            // 

        })
    }
}

const userData = {};
const storageData = {};

UI.init();



















