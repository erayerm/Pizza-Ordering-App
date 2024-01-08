
describe("Form Sayfası Testleri", () => {
    beforeEach(()=>{
        cy.visit("localhost:3000/pizza");
    })
    it("Inputa bir metin giren test", () => {
        cy.get("[data-cy=isim]").type("Eray");
    })
    it("Birden fazla malzeme seçilebilen bir test", () => {
        cy.get("[data-cy=checkbox1]").check();
        cy.get("[data-cy=checkbox2]").check();
    })
    it("Formu gönderen bir test", () => {
        cy.get("[data-cy=isim]").type("Eray");
        cy.get("[data-cy=checkbox1]").check();
        cy.get("[data-cy=checkbox2]").check();
        cy.get("[data-cy=checkbox3]").check();
        cy.get("[data-cy=checkbox4]").check();
        cy.get("[data-cy=select]").select("İnce Hamur", { force: true }).invoke('val')
            .should('eq', 'İnce Hamur');
        cy.get("[data-cy=kucuk]").check()
        cy.get("[data-cy=submit]").click();
    })
})



