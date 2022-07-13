



// All Selectors
const UI = {
    loadSelectors() {
        const headElm = document.querySelector('.head');
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
        const phoneNumberFeedBackElm = document.querySelector('#phoneNumberFeedBack');
        const websiteUrlFeedBackElm = document.querySelector('#websiteUrlFeedBack');
        const cityFeedBackElm = document.querySelector('#cityFeedBack');
        const zipFeedBackElm = document.querySelector('#zipFeedBack');



        return {
            headElm,
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
            emailFeedBackElm,
            phoneNumberFeedBackElm,
            websiteUrlFeedBackElm,
            cityFeedBackElm,
            zipFeedBackElm
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
    toggleValidateClass(isValid, inputElm, feedbackElm, feedback) {

        if(isValid) {
            inputElm.classList.remove('is-invalid');
            inputElm.classList.add('is-valid');
            feedbackElm.className = 'valid-feedback';
            feedbackElm.textContent = 'Looks good!';
        } else {
            inputElm.classList.remove('is-valid');
            inputElm.classList.add('is-invalid');
            feedbackElm.className = 'invalid-feedback';
            feedbackElm.textContent = feedback;
        }
    },
    validateInputs({firstName, lastName, email, phoneNumber, websiteUrl, city, zip}) {

       const {firstNameElm, lastNameElm, emailElm, phoneNumberElm, websiteUrlElm, cityElm, zipElm, firstNameFeedBackElm, lastNameFeedBackElm, emailFeedBackElm, phoneNumberFeedBackElm, websiteUrlFeedBackElm, cityFeedBackElm, zipFeedBackElm} =  this.loadSelectors();


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

            fNameIsValid = true;
            this.toggleValidateClass(true, firstNameElm, firstNameFeedBackElm, 'valid-feedback');
        } else {
            this.toggleValidateClass(false, firstNameElm, firstNameFeedBackElm, 'Use only letter and must be more than 5 character');
        }

        let lNameIsValid = false;
        if(nameRegex.test(lastName)) {
            
            lNameIsValid = true;
            this.toggleValidateClass(true, lastNameElm, lastNameFeedBackElm, 'valid-feedback');
        } else {
            this.toggleValidateClass(false, lastNameElm, lastNameFeedBackElm, 'Use only letter and must be more than 5 character');
        }

        // Email validation
        let emailIsValid = false;
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
        if(emailRegex.test(email)) {
            
            emailIsValid = true;
            this.toggleValidateClass(true, emailElm, emailFeedBackElm, 'valid-feedback');

        } else {

            this.toggleValidateClass(false, emailElm, emailFeedBackElm, 'Please provide valid email address');
        }

        // phone number validation
        const phoneRegex = /(\+88)?01[56789]\d{8}/i;
        let phoneNumberIsValid = false;
        if(phoneRegex.test(phoneNumber) && phoneNumber.length === 11 || phoneNumber.length === 13) {

            phoneNumberIsValid = true;
            this.toggleValidateClass(true, phoneNumberElm, phoneNumberFeedBackElm, 'valid-feedback');

        } else {

            this.toggleValidateClass(false, phoneNumberElm, phoneNumberFeedBackElm, 'Please provide valid BD phone number');
        }

        // website url validation
        const websiteRegex = /(http:\/\/|https:\/\/)?(www\.)?[a-z]+\.[a-z]{2,4}(\.[a-z]{2,4})?/i;
        let websiteIsValid = false;
        if(websiteRegex.test(websiteUrl)) {

            websiteIsValid = true;
            this.toggleValidateClass(true, websiteUrlElm, websiteUrlFeedBackElm, 'valid-feedback');
        } else {

            this.toggleValidateClass(false, websiteUrlElm, websiteUrlFeedBackElm, 'Write correct website url');
        }

        // city validation
        const cityRegex = /^[a-z](.+){3}[a-z]$/i;
        let cityIsValid = false;
        if(cityRegex.test(city)) {

            cityIsValid = true;
            this.toggleValidateClass(true, cityElm, cityFeedBackElm, 'valid-feedback');
        } else {

            this.toggleValidateClass(false, cityElm, cityFeedBackElm, 'City name is required!');
        }

        // zip validation
        const zipRegex = /^\d{1,10}$/i;
        let zipCodeIsValid = false;
        if(zipRegex.test(zip)) {

            zipCodeIsValid = true;
            this.toggleValidateClass(true, zipElm, zipFeedBackElm, 'valid-feedback');

        } else {

            this.toggleValidateClass(false, zipElm, zipFeedBackElm, 'Valid zip code is required!');
        }


        // finally return validation true or false
        if(fNameIsValid && lNameIsValid && emailIsValid && phoneNumberIsValid && websiteIsValid && cityIsValid && zipCodeIsValid) {

            return  true;
        } else {
            return false;
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
    hideMessage() {
        const messageElm = document.querySelector("#message");
        setTimeout(() => {
          messageElm.remove();
        }, 2000);
    },
    showSubmitMsg() {

        const {headElm} = this.loadSelectors();

        const div = document.createElement('div');
        div.innerHTML = `<div id="message" class="alert alert-success" role="alert">
                            Great! Submitted perfectly.
                        </div>`

        headElm.insertAdjacentElement('afterbegin', div);
        this.hideMessage();

    },
    resetInputs() {
        const {firstNameElm, lastNameElm, emailElm, phoneNumberElm, websiteUrlElm, cityElm, zipElm} = this.loadSelectors();

        firstNameElm.value = '';
        lastNameElm.value = '';
        emailElm.value = '';
        phoneNumberElm.value = '';
        websiteUrlElm.value = '';
        cityElm.value = '';
        zipElm.value = '';

    },
    init(){

        const {formElm} = this.loadSelectors();
        formElm.addEventListener('submit', (e) => {
            e.preventDefault();

            // get input
            const inputData = this.getInputs();

            // validate input
            const isValid = this.validateInputs(inputData);
            if (!isValid) return false;

            // submit and show success message
            this.showSubmitMsg();

            // reset inputs
            this.resetInputs();

        })
    }
}

const userData = {};
const storageData = {};

UI.init();



















