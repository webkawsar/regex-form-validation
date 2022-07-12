



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
        let emailIsValid = false;
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
        if(emailRegex.test(email)) {
            
            emailIsValid = true;
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


        // phone number validation
        const phoneRegex = /(\+88)?01[56789]\d{8}/i;
        let phoneNumberIsValid = false;
        if(phoneRegex.test(phoneNumber) && phoneNumber.length === 11 || phoneNumber.length === 13) {

            phoneNumberIsValid = true;
            // at first remove invalid class then add valid class
            phoneNumberElm.classList.remove('is-invalid');
            phoneNumberElm.classList.add('is-valid');
            phoneNumberFeedBackElm.className = 'valid-feedback';
            phoneNumberFeedBackElm.textContent = 'Looks good!';

        } else {

            // at first remove valid class then add invalid class
            phoneNumberElm.classList.remove('is-valid');
            phoneNumberElm.classList.add('is-invalid');
            phoneNumberFeedBackElm.className = 'invalid-feedback';
            phoneNumberFeedBackElm.textContent = 'Please provide valid BD phone number';
        }


        // website url validation
        const websiteRegex = /(http:\/\/|https:\/\/)?(www\.)?[a-z]+\.[a-z]{2,4}(\.[a-z]{2,4})?/i;
        let websiteIsValid = false;
        if(websiteRegex.test(websiteUrl)) {

            websiteIsValid = true;
            // at first remove invalid class then add valid class
            websiteUrlElm.classList.remove('is-invalid');
            websiteUrlElm.classList.add('is-valid');
            websiteUrlFeedBackElm.className = 'valid-feedback';
            websiteUrlFeedBackElm.textContent = 'Looks good!';
        } else {

             // at first remove valid class then add invalid class
             websiteUrlElm.classList.remove('is-valid');
             websiteUrlElm.classList.add('is-invalid');
             websiteUrlFeedBackElm.className = 'invalid-feedback';
             websiteUrlFeedBackElm.textContent = 'Write correct website url';
        }

        // city validation
        const cityRegex = /^[a-z](.+){3}[a-z]$/i;
        let cityIsValid = false;
        if(cityRegex.test(city)) {

            cityIsValid = true;
            
            // at first remove invalid class then add valid class
            cityElm.classList.remove('is-invalid');
            cityElm.classList.add('is-valid');
            cityFeedBackElm.className = 'valid-feedback';
            cityFeedBackElm.textContent = 'Looks good!';
        } else {


            // at first remove valid class then add invalid class
            cityElm.classList.remove('is-valid');
            cityElm.classList.add('is-invalid');
            cityFeedBackElm.className = 'invalid-feedback';
            cityFeedBackElm.textContent = 'City name is required!';

        }


        // zip validation
        const zipRegex = /^\d{1,10}$/i;
        let zipCodeIsValid = false;
        if(zipRegex.test(zip)) {

            zipCodeIsValid = true;

            // at first remove invalid class then add valid class
            zipElm.classList.remove('is-invalid');
            zipElm.classList.add('is-valid');
            zipFeedBackElm.className = 'valid-feedback';
            zipFeedBackElm.textContent = 'Looks good!';

        } else {

            // at first remove valid class then add invalid class
            zipElm.classList.remove('is-valid');
            zipElm.classList.add('is-invalid');
            zipFeedBackElm.className = 'invalid-feedback';
            zipFeedBackElm.textContent = 'Valid zip code is required!';
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

            // reset input
            

        })
    }
}

const userData = {};
const storageData = {};

UI.init();



















