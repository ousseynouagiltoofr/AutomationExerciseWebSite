class HomePage {
   

    constructor(page: Page) {

        this.page = page;
        this.home_link = getByRole('link', { name: ' Home' });
        this.products_link = getByRole('link', { name: ' Products' });
        this.signup_login_link = getByRole('link', { name: ' Signup / Login' });
        this.test_cases_link = getByR ole('link', { name: ' Test Cases' });
        this.contact_us_link = getByRole('link', { name: ' Contact us' });
    }
}

    clickOnHomeLink(){

    }
    clickOnProductsLink(){
        
    }