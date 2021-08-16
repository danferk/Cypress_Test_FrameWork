var elements = require('./elements')
class HomePage {
  clickSearchTxtBox() {
    return cy.get(elements.HOMEPAGE.SEARCH_TXTBOX).click();
  }

  typeInSearchTxtBox(value) {
    //by CSS
    //return cy.get(elements.HOMEPAGE.SEARCH_TXTBOX).type(value);
    //by xpath
    return cy.xpath(elements.HOMEPAGE.SEARCH_TXTBOX_XPATH).type(value);
  }

  submitSearchQuery() {
  //press enter after query is provided, for submission
    return cy.get(elements.HOMEPAGE.SEARCH_TXTBOX).type('{enter}');
  }

  }
  export default HomePage;