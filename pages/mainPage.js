let mainPage = function () {
    let searchInput = element(by.xpath(" //input[@placeholder='Search...']"));
    let btnFilter = element(by.buttonText("Filter"));
    let itemTitle = element(by.linkText("nature"));



    this.searchItem = (itemName) => {
        searchInput.sendKeys(itemName);
    }
    this.clickOnFilter = () => {
        btnFilter.click();
    }
    this.checkFilterFunc = (itemName) => {
        element.all(by.className("cell")).filter(function (elem, index) {
            return elem.getText().then(function (text) {
                return text === 'itemName';
            });
        });

    }
    this.clickOnItem = () => {
        itemTitle.click();
    }
    this.expectItemUrl = () => {
        const EC = protractor.ExpectedConditions;
        browser.wait(EC.urlContains('/galleries/55'), 5000);

    }
}
module.exports = new mainPage;