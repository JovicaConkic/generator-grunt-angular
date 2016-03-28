'use strict';
/* globals describe, browser, beforeEach, it, expect, element, by  */
describe('My Angular Application', function() {
    
    it('Should automatically redirect to / when location hash/fragment is empty', function() {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch('/');
    });
    
    describe('Application Title', function() {
        beforeEach(function() {
            browser.get('index.html');
        });
        it('Should display the correct title', function() {
            expect(browser.getTitle()).toEqual('My Cool Application');
        });
    });
    
    describe('Home view', function() {
        beforeEach(function() {
            browser.get('/home');
        });
        it('Should render home view when user navigates to /home', function() {
            expect(element.all(by.css('[ng-view] h1')).first().getText()).toMatch(/Home View/);
        });
    });
    
    describe('About view', function() {
        beforeEach(function() {
            browser.get('/about');
        });
        it('Should render about view when user navigates to /about', function() {
            expect(element.all(by.css('[ng-view] h1')).first().getText()).toMatch(/About View/);
        });
    });
});