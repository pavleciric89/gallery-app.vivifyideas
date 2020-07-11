let mainPage = function () {
    let searchInput = element(by.xpath(" //input[@placeholder='Search...']"));
    let btnFilter = element(by.buttonText("Filter"));
    let itemTitle = element(by.linkText("nature"));
    let btnLoadMore = element(by.buttonText("Load More"));




    this.searchItem = (itemName) => {
        searchInput.sendKeys(itemName);
    }
    this.clickOnFilter = () => {
        btnFilter.click();
    }
    this.checkFilterFunc = (itemName) => {
        element.all(by.className("cell")).filter(function (elem, index) {
            return elem.getText().then(function (text) {
                expect(text.toEqual(itemName));
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
    this.loadMoreBtnFunc = () => {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(btnLoadMore), 5000);
        btnLoadMore.click();
        expect(element.all(by.className("cell")) > 10);
    }
}
module.exports = new mainPage;