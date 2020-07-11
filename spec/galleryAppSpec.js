
let mainPage = require("../pages/mainPage");

describe("gallery-app.vivifyideas", () => {
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://gallery-app.vivifyideas.com/");
        browser.manage().window().maximize();
    });
    it("filter", () => {
        mainPage.searchItem("nature");
        mainPage.clickOnFilter();
        mainPage.checkFilterFunc("nature");

    });
    it("Individualy opening", () => {
        mainPage.clickOnItem();
        mainPage.expectItemUrl();
    });
    it("load more items", () => {
        mainPage.loadMoreBtnFunc();

    })
})

