
describe("Form Sayfasında", () => {
    beforeEach(() => {
        cy.visit("localhost:3000/pizza");
    })
    it("Inputa bir metin giren test", () => {
        cy.get("[data-cy=isim]").type("Eray");
    })
    it("Birden fazla malzeme seçilebiliyor", () => {
        cy.get("[data-cy=checkbox1]").check({ force: true });
        cy.get("[data-cy=checkbox2]").check({ force: true });
        cy.get("[data-cy=checkbox1]").should("be.checked");
        cy.get("[data-cy=checkbox2]").should("be.checked");
    })
    it("Formda her şey doğru girildiyse success sayfasına gidiyor", () => {
        cy.get("[data-cy=isim]").type("Eray");
        cy.get("[data-cy=checkbox1]").check({ force: true });
        cy.get("[data-cy=checkbox2]").check({ force: true });
        cy.get("[data-cy=checkbox3]").check({ force: true });
        cy.get("[data-cy=checkbox4]").check({ force: true });
        cy.get("[data-cy=select]").select("İnce Hamur", { force: true }).invoke('val')
            .should('eq', 'İnce Hamur');
        cy.get("[data-cy=kucuk]").check({ force: true });
        cy.get("[data-cy=submit]").click();
        cy.contains("lezzetin yolda").should("exist");
    })
    it("Formda dörtten az checkbox seçildiyse hata mesajı gösteriliyor", () => {
        cy.get("[data-cy=isim]").type("Eray");
        cy.get("[data-cy=checkbox1]").check({ force: true });
        cy.get("[data-cy=checkbox2]").check({ force: true });
        cy.get("[data-cy=checkbox3]").check({ force: true });
        cy.get("[data-cy=select]").select("İnce Hamur", { force: true }).invoke('val')
            .should('eq', 'İnce Hamur');
        cy.get("[data-cy=kucuk]").check({ force: true });
        cy.get("[data-cy=submit]").click();
        cy.contains("En az 4 malzeme seçmelisiniz!").should("exist");
    })
    it("Formda ondan fazla checkbox seçildiyse hata mesajı gösteriliyor", () => {
        cy.get("[data-cy=isim]").type("Eray");
        cy.get("[data-cy=checkbox1]").check({ force: true });
        cy.get("[data-cy=checkbox2]").check({ force: true });
        cy.get("[data-cy=checkbox3]").check({ force: true });
        cy.get("[data-cy=checkbox4]").check({ force: true });
        cy.get("[data-cy=checkbox5]").check({ force: true });
        cy.get("[data-cy=checkbox6]").check({ force: true });
        cy.get("[data-cy=checkbox7]").check({ force: true });
        cy.get("[data-cy=checkbox8]").check({ force: true });
        cy.get("[data-cy=checkbox9]").check({ force: true });
        cy.get("[data-cy=checkbox10]").check({ force: true });
        cy.get("[data-cy=checkbox11]").check({ force: true });
        cy.get("[data-cy=select]").select("İnce Hamur", { force: true }).invoke('val')
            .should('eq', 'İnce Hamur');
        cy.get("[data-cy=kucuk]").check({ force: true });
        cy.get("[data-cy=submit]").click();
        cy.contains("En fazla 10 malzeme seçebilirsiniz!").should("exist");
    })
    it("Formda isim alanına yeterli karakter yazılmazsa hata mesajı gösteriyor", () => {
        cy.get("[data-cy=isim]").type("E");
        cy.get("[data-cy=checkbox1]").check({ force: true });
        cy.get("[data-cy=checkbox2]").check({ force: true });
        cy.get("[data-cy=checkbox3]").check({ force: true });
        cy.get("[data-cy=checkbox4]").check({ force: true });
        cy.get("[data-cy=select]").select("İnce Hamur", { force: true }).invoke('val')
            .should('eq', 'İnce Hamur');
        cy.get("[data-cy=kucuk]").check({ force: true });
        cy.get("[data-cy=submit]").click();
        cy.contains("İsim en az 2 karakter olmalıdır!").should("exist");
    })
    it("Formda Hamur kalınlığı seçilmezse hata mesajı gösteriyor", () => {
        cy.get("[data-cy=isim]").type("Eray");
        cy.get("[data-cy=checkbox1]").check({ force: true });
        cy.get("[data-cy=checkbox2]").check({ force: true });
        cy.get("[data-cy=checkbox3]").check({ force: true });
        cy.get("[data-cy=checkbox4]").check({ force: true });
        cy.get("[data-cy=kucuk]").check({ force: true });
        cy.get("[data-cy=submit]").click();
        cy.contains("Lütfen hamur kalınlığı seçiniz!").should("exist");
    })
    it("Formda pizza boyutu seçilmezse hata mesajı gösteriyor", () => {
        cy.get("[data-cy=isim]").type("Eray");
        cy.get("[data-cy=checkbox1]").check({ force: true });
        cy.get("[data-cy=checkbox2]").check({ force: true });
        cy.get("[data-cy=checkbox3]").check({ force: true });
        cy.get("[data-cy=checkbox4]").check({ force: true });
        cy.get("[data-cy=select]").select("İnce Hamur", { force: true }).invoke('val')
            .should('eq', 'İnce Hamur');
        cy.get("[data-cy=submit]").click();
        cy.contains("Lütfen pizzanın boyutunu seçiniz!").should("exist");
    })
    it("Siparişin fiyatını malzeme sayısına göre doğru hesaplanıyor", () => {
        cy.get("[data-cy=checkbox1]").check({ force: true });
        cy.get("[data-cy=checkbox2]").check({ force: true });
        cy.get("[data-cy=checkbox3]").check({ force: true });
        cy.get("[data-cy=checkbox4]").check({ force: true });
        cy.get("[data-cy=totalPrice]").invoke("text").should("eq", "105.50₺");
    })
    it("Siparişin fiyatını sipariş sayısına göre doğru hesaplanıyor", () => {
        cy.get("[data-cy=arttirButton]").click();
        cy.get("[data-cy=totalPrice]").invoke("text").should("eq", "171.00₺");
    })
    it("Siparişin fiyatını hem malzeme sayısına hem de sipariş sayısına göre doğru hesaplanıyor", () => {
        cy.get("[data-cy=checkbox1]").check({ force: true });
        cy.get("[data-cy=arttirButton]").click();
        cy.get("[data-cy=totalPrice]").invoke("text").should("eq", "181.00₺");
    })
})

describe("Ana Sayfada", () => {
    it("Ana sayfadan başlayıp success sayfasına gidiyor", () => {
        cy.visit("localhost:3000/");
        cy.get("[data-cy=aciktimButon]").click();
        cy.get("[data-cy=isim]").type("Eray");
        cy.get("[data-cy=checkbox1]").check({ force: true });
        cy.get("[data-cy=checkbox2]").check({ force: true });
        cy.get("[data-cy=checkbox3]").check({ force: true });
        cy.get("[data-cy=checkbox4]").check({ force: true });
        cy.get("[data-cy=select]").select("İnce Hamur", { force: true }).invoke('val')
            .should('eq', 'İnce Hamur');
        cy.get("[data-cy=kucuk]").check({ force: true });
        cy.get("[data-cy=submit]").click();
        cy.contains("lezzetin yolda").should("exist");
    })
    
})