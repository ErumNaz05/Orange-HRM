
export class NavigationPage{
    Login(){
        cy.get('[data-test="mf-email"]').type('abu@fertilitypro.com')
        cy.get('[id="password"]').type('Abu1234!')
        cy.get('[data-test="mf-loading-submit"]').click()
    }
    ScheduleAppointment(){
        cy.get('[data-test="mf-icon"].icon-icn_plus').click()
        cy.get('.dropdown-menu').contains('Schedule Appointment').click()
        cy.get('.mf-filter-select-input > [data-test="text-field"]').type('kim')
        cy.get('[data-test="mf-filter-user-item"]').should('contain','Riley, Kim').click()
        cy.get('[data-test="appointmenttype"]').click()
        cy.get('[data-test="power-select-options"]').should('contain','BLD - Estradiol').click()
        cy.get('[class="ember-power-select-selected-item"]').should('have.length','2')
        cy.get('[data-test="billing-locations"]').click()
        cy.get('[data-test="power-select-options"]').find('[data-option-index="3"]').should('be.visible').click()
        cy.get('[class="ember-power-select-selected-item"]').should('have.length','3')
        cy.get('[class="resource mf-event__metadata"]').click()
        cy.get('[data-test="mf-dropdown-multiple-group-item"]').contains('BD - Paoli').click()
        cy.get('[placeholder="Date"]').click()
        cy.get('[class="today day"]').should('be.visible').click()
        cy.get('[class="hours mf-event__metadata"]').click()
        cy.get('[data-test="power-select-options"]').should('contain','7:15 AM').click()
        cy.get('[class="ember-power-select-selected-item"]').should('have.length','4')
        const prom01 = cy.get('[data-test="mf-loading-button"]')
        new Cypress.Promise((resolve,reject) =>{resolve(prom01)})
        prom01.contains('CREATE').click()
        cy.wait(1000)
    }
    StimSheetPage(){
        cy.get('[data-test="mf-toolbar-button"]').contains('Day').click()
        const prom1 = cy.get('[data-test="mf-schedule-single-day-events-with-time"]').first()
        new Cypress.Promise((resolve,reject) =>{resolve(prom1)})
        prom1.find('[class="patient-name inline"]').first().click()
        cy.get('[data-test="mf-schedule-single-day-events-with-time"]').first().then($a =>
            {
                if($a.find('.automated-warning').hasClass('automated-warning'))
                {
                    cy.get('[class="patient-name inline"]').first().click()
                    new Cypress.Promise((resolve, reject) => {
                        resolve(cy.get('.mf-patient-warning-modal').should('be.visible'))
                    })
                    cy.get('[data-test="mf-icon-button"]').click()
                }
                else
                {
                    cy.get('[class="patient-name inline"]').first().click()
                }
            })
        cy.wait(5000)
        const prom103 = cy.get('[data-cy="protocol_stimsheet_link"]')
        new Cypress.Promise((resolve,reject) =>{resolve(prom103)})
        prom103.find('[data-test="link-to"]').contains('GO TO STIM SHEET').should('be.visible').click()
        cy.wait(2000)
    }
    AppointmentForm(){
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-appointments"]').find('[data-cy="stimsheet_add_item_button"]').should('contain','ADD APPOINTMENT').click()
        cy.get('[data-test="appointmenttype"]').click()
        cy.get('[data-test="power-select-options"]').contains('BLD - Estradiol').click()
        cy.get('[data-test="billing-locations"]').click()
        cy.get('[data-test="power-select-options"]').contains('PAOLI').click()
        cy.get('[class="resource mf-event__metadata"]').click()
        cy.get('[class="mf-dropdown-multiple__list"]').contains('BD - Paoli').click()
        cy.get('[class="date mf-event__metadata"]').contains('Day').click()
        cy.get('[data-test="power-select-options"]').find('[data-option-index="30"]').click()
        cy.get('[class="hours mf-event__metadata"]').click()
        cy.get('[data-test="power-select-options"]').contains('7:15 AM').click()
        const prom2 = cy.get('[data-test="mf-loading-button"]')
        new Cypress.Promise((resolve,reject) =>{resolve(prom2)})
        prom2.contains('Create').click()
        cy.wait(1000)
    }
    HarmonesForm(){
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-hormones"]')
        .find('[class="lt-cell align-left today ember-view"]').first().click()
        cy.get('[class="row mf-basic-modal__container"]')
        .find('[data-test="text-field"]').first().type('111')
        cy.get('[class="row mf-basic-modal__container"]')
        .find('[data-test="text-field"]').last().type('222')
        const prom3 = cy.get('[class="mf-modal mf-basic-modal"]')
        new Cypress.Promise((resolve,reject) =>{resolve(prom3)})
        prom3.find('[data-test="mf-loading-button"]').click()
        cy.wait(1000)
    }
    MedicationForm(){
        cy.get('[data-cy="stimsheet_add_item_button"]').contains('ADD MEDICATION').click()
        cy.get('[data-test="mf-dropdown"]').find('[tabindex="1"]').click()
        cy.get('[data-test="power-select-options"]').find('[data-option-index="7"]').click()
        cy.get('[class="mf-modal mf-basic-modal"]')
        .find('[data-test="mf-input"]').type('25')
        cy.get('[data-test="mf-dropdown"]').find('[tabindex="3"]').click()
        cy.get('[data-test="power-select-options"]').find('[data-option-index="40"]').click()
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-medications-new-collection-row"]')
        .find('[tabindex="4"]').click()
        cy.get('[data-test="power-select-options"]').find('[data-option-index="2.0"]').click()
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-medications-new-collection-row"]')
        .find('[tabindex="5"]').click()
        cy.get('[data-test="power-select-options"]').find('[data-option-index="192"]').click()
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-medications-new-collection-row"]')
        .find('[tabindex="6"]').click()
        cy.get('[data-test="power-select-options"]').find('[data-option-index="0"]').click()
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-medications-new-collection-row"]')
        .find('[tabindex="7"]').click()
        cy.get('[data-test="power-select-options"]').find('[data-option-index="30"]').click()
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-medications-new-collection-row"]')
        .find('[tabindex="8"]').click()
        cy.get('[data-test="power-select-options"]').find('[data-option-index="47"]').click()
        const prom4 = cy.get('[data-test="mf-loading-button"]')
        new Cypress.Promise((resolve,reject) =>{resolve(prom4)})
        prom4.contains('UPDATE').click()
        cy.wait(1000)
    }
    UltrasoundForm(){
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-ultrasounds"]')
        .find('.today').first().click()
        cy.get('[data-cy="stimsheet_left_ovary_input"]')
        .find('.small-input').type('1')
        cy.get('[data-cy="stimsheet_left_ovary_input"]')
        .find('[data-test="mf-input"]').last().type('2')
        cy.get('[data-cy="stimsheet_right_ovary_input"]')
        .find('[data-test="mf-input"]').first().type('3')
        cy.get('[data-cy="stimsheet_right_ovary_input"]')
        .find('[data-test="mf-input"]').last().type('4')
        cy.get('[data-cy="stimsheet_endo_thickness_input"]').type('5')
        cy.get('[data-cy="stimsheet_endometrium_pattern_dropdown"]').click()
        cy.get('[data-test="power-select-options"]').find('[data-option-index="1"]').click()
        cy.get('[data-cy="stimsheet_ultrasound_observation_input"]').type('test')
        cy.fixture('test.jpg', {encoding:null}).as('fixed')
        cy.get('input[type=file]').selectFile('@fixed',{force:true})
        const prom5 = cy.get('[data-test="mf-loading-button"]')
        new Cypress.Promise((resolve,reject) =>{resolve(prom5)})
        prom5.contains('UPDATE').click()
        cy.wait(1000)
    }
    DailyNotesForm(){
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-daily-notes"]')
        .find('[class="lt-cell align-left mf-protocol-daily-notes-table-cell-container today ember-view"]').click()
        cy.get('[data-test="mf-loading-button"]').then(($body)=>{
            if($body.text().includes('CREATE'))
                {
                    cy.get('[class="mf-modal mf-basic-modal"]').find('[data-test="text-area"]').type('test')
                    const prom6 = cy.get('[data-test="mf-loading-button"]')
                    new Cypress.Promise((resolve,reject) =>{resolve(prom6)})
                    prom6.contains('CREATE').click()
                }
            else
                {
                    cy.get('[class="mf-modal mf-basic-modal"]').find('[data-test="text-area"]').clear().type('test')
                    const prom7 = cy.get('[data-test="mf-loading-button"]')
                    new Cypress.Promise((resolve,reject) =>{resolve(prom7)})
                    prom7.contains('UPDATE').click()
                }
        })
        cy.wait(1000)
    }
    editbelowforms(){
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-treatment-pregnancy-outcome"]')
        .find('[class="btn btn-primary"]').click()
    }
    TreatmentForm(){
        cy.get('[data-test="mf-dropdown-model"]').contains('Select a treatment outcome').click()
        cy.get('[data-test="power-select-options"]').contains('Biochemical').click()
        cy.get('[class="treatment-outcome"]')
        .find('[data-test="bootstrap-datepicker"]').first().click()
        cy.get('[class="datepicker-days"]').find('[class="today day"]').click()
    }
    BloodTestForm(){
        cy.get('.test-result-action').first().find('[data-test="mf-icon"]').click()
        cy.get('[class="mf-modal mf-basic-modal"]').find('[data-test="bootstrap-datepicker"]').click()
        cy.get('[class="datepicker-days"]').find('[class="today day"]').click()
        cy.get('[placeholder="Bhcg value"]').type('12')
        cy.get('[data-test="mf-loading-button"]').contains('Create').click()
    }
    UltrasoundTestForm(){
        cy.get(':nth-child(1) > .treatment-outcome > :nth-child(5) > .test-result-action > .btn').click()
        cy.get('[class="mf-modal mf-basic-modal"]').find('[data-test="mf-datepicker"]').click()
        cy.get('[class="datepicker-days"]').find('[class="today day"]').click()
        cy.get('[placeholder="Fetal hearts"]').type('1')
        cy.get('[placeholder="Gestational Sac"]').type('2')
        cy.get('[data-test="mf-loading-button"]').contains('Create').click()
    }
    PregnancyForm(){
        cy.get('[class="treatment-outcome"]').find('[data-test="basic-dropdown-trigger"]')
        .contains('Select a pregnancy outcome').click()
        cy.get('[data-test="power-select-options"]').contains('Live Birth').click()
        cy.get('[class="treatment-outcome"]').find('[data-test="basic-dropdown-trigger"]')
        .contains('Select an outcome info source').click()
        cy.get('[data-test="power-select-options"]').contains('Patient (written)').click()
        cy.get('[class="treatment-outcome"]').find('[data-test="mf-datepicker"]').last().click()
        cy.get('[class="datepicker-days"]').find('[class="today day"]').click()
        cy.get('[class="treatment-outcome"]').find('[data-test="basic-dropdown-trigger"]')
        .contains('Select a delivery method').click()
        cy.get('[data-test="power-select-options"]').contains('Vaginal').click()
    }
    InfantForm(){       
        cy.get(':nth-child(2) > .treatment-outcome > :nth-child(5) > .test-result-action > .btn').click()
        cy.get('.mf-basic-modal__container>.row >:nth-child(1)>[data-test="mf-boolean-input"]>.block>.positive>[data-test="radio-button-input"]')
        .click()
        cy.get('[class="ember-power-select-placeholder"]').contains('Select a gender').click()
        cy.get('[class="ember-power-select-options ember-view"]').find('[data-option-index="0"]').click()
        cy.get('[placeholder="Birth weight"]').type('2.2')
        cy.get('[class="ember-power-select-placeholder"]').contains('Select a unit').click()
        cy.get('[class="ember-power-select-options ember-view"]').find('[data-option-index="2"]').click()
        cy.get(':nth-child(5) > [data-test="mf-boolean-input"] > .block > .positive > [data-test="radio-button-input"]')
        .click()
        cy.get('[class="mf-dropdown-multiple__placeholder--empty"]').contains('Select birth defects').click()
        cy.get('[class="mf-dropdown-multiple__options visible"]').find('[data-option-index="5"]').click()
        cy.get('[class="mf-dropdown-multiple__placeholder"]').contains('None').click()
        cy.get('[data-test="mf-loading-button"]').contains('Create').click()
    }
    NotesForm(){
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-notes"]')
        .find('[data-cy="stimsheet_accordion_panel_element_title_dropdown"]').click()
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-notes"]').find('[data-test="add-new-note"]').click()
        cy.get('[data-test="template-selector"]').click()
        cy.get('[data-test="power-select-options"]').find('[data-option-index="2"]').click()
        cy.get('[data-test="mf-confirmation-modal"]').find('[data-test="mf-loading-button"]').contains('Replace Text').click()
    }
    StickyNoteForm(){
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-sticky-notes"]')
        .find('[data-cy="stimsheet_add_item_button"]').click()
        cy.get('[class="mf-modal mf-basic-modal"]').find('[placeholder="Add a title"]').type('Titled Testing')
        cy.get('[class="mf-modal mf-basic-modal"]').find('[placeholder="Write a note"]').type('Notes Added for Testing')
        cy.get('[data-test="mf-loading-button"]').contains('Create').click()
    }

}

export const navigateTo = new NavigationPage()

