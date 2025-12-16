/// <reference types= "cypress" />

class appointment {
    schedule= 
    {
        email: () =>
        cy.get('[step="any"]'),
        password: () =>
        cy.get('#password'),
        login: () =>
        cy.get('#ember724'),
        dropdown: ()=>
        cy.get('[data-test="mf-action-menu"]'),
        menu: () =>
        cy.get('.breadcrumb > [data-test="mf-action-menu"] > .dropdown-menu > :nth-child(1) > a'),
        patient: () =>
        cy.get('[type="search"]'),
        slect: () =>
        cy.get('[data-test="mf-filter-user-item"]'),
        type: () =>
        cy.get('[data-test="appointmenttype"]'),
        search: () =>
        cy.get('.ember-power-select-search'),
        input: () =>
        cy.get('.ember-power-select-search-input'),
        loc: () =>
        cy.get('[data-test="billing-locations"]'),
        rsc: () =>
        cy.get('.resource > [data-test="mf-dropdown-multiple"]'),
        resource: ()=>
        cy.get('.mf-dropdown-multiple__list'),
        date: ()=>
        cy.get('[data-test="mf-datepicker"]'),
        future: () =>
        cy.get('.today'),
        time: ()=>
        cy.get('[data-test="mf-dropdown"]'),
        create: () =>
        cy.get('#test-save'),
        Day: () =>
        cy.get('.fc-button-group'),
        calendar: () =>
        cy.get('[data-test="mf-schedule-datepicker"]'),
        card: () =>
        cy.get('[data-test="mf-schedule-single-day-events-with-time"]'),
        index: () =>
        cy.get('[tabindex="7"]'),
        save: () =>
        cy.get('[data-test="mf-loading-button"]'),
        wait: ()=>
        cy.wait(4000),
        wait1: () =>
        cy.wait(1000),
        dayselector: ()=>
        cy.get('[data-test="mf-toolbar-button"]'),
        placeholder: () =>
        cy.get('[placeholder="Search by Patient Name, Email, ID, Reference ID or Phone"]'),
        selected: () =>
        cy.get('.ember-power-select-selected-item'),
        rschead: () =>
        cy.get('.mf-dropdown-multiple__head'),
        rscdropdown: () =>
        cy.get('.mf-dropdown-multiple__options'),
        selectall: () =>
        cy.get('.mf-dropdown-multiple__options--select-all'),
        clickoutside: () =>
        cy.get('[data-test="click-outside"]'),
        patientcard: ()=>
        cy.get('[data-test="mf-appointment-patient-detail-card"]'),
        edit: () =>
        cy.get('[class="mf-icon icon-icn_edit_pencil ember-view"]'),
        note: ()=>
        cy.get('[placeholder="Add a note"]'),
        notefooter: () =>
        cy.get('.mf-comment-note__footer'),
        closecalendar: () =>
        cy.get('[class="close-calendar mf-icon icon-icn_arrows-dropdown-right ember-view"]'),
        datepicker: () =>
        cy.get('.datepicker-days'),
        calendarwrap: ()=>
        cy.get('.wrap-calendar__calendar'),
        inlinename: () =>
        cy.get('[class="patient-name inline"]'),
        warning: ()=>
        cy.get('.mf-patient-warning-modal'),
        close: ()=>
        cy.get('[data-test="mf-icon-button"]'),
        protocolcycle: ()=>
        cy.get('[data-cy="protocol_cycle_type_container"]'),
        footer: () =>
        cy.get('.mf-protocol-toolbar__content-footer'),
        paneltitle: ()=>
        cy.get('[data-cy="stimsheet_accordion_panel_heading_title"]'),
        notecontainer: () =>
        cy.get('.note-container'),
        cyclenumber: ()=>
        cy.get('.cycle-number'),
        dropdownmodel: ()=>
        cy.get('[data-test="mf-dropdown-model"]'),
        option: ()=>
        cy.get('.ember-power-select-option'),
        protocolreason: () =>
        cy.get('[data-cy="protocol_reason_for_art_dropdown"]'),
        items: () =>
        cy.get('.mf-dropdown-multiple__options-item'),
        infertility: () =>
        cy.get('[data-cy="protocol_months_of_infertility_input"]'),
        lmp: () =>
        cy.get('[data-cy="protocol_lmp_container"]'),
        datepickerClass: () =>
        cy.get('.datepicker'),
        cycleday: () =>
        cy.get('[data-cy="protocol_cycle_day_1_container"]'),
        burger: () =>
        cy.get('[data-test="burger-menu"]'),
        button: ()=>
        cy.get('.mf-white-button-primary'),
        stimstart: () =>
        cy.get('[data-cy="protocol_stim_med_start_datepicker"]'),
        Assigndate: () =>
        cy.get('[data-cy="protocol_date_assigned_datepicker"]'),
        toolbar: () =>
        cy.get('.mf-protocol-toolbar__content > .mf-protocol-toolbar__content-body'),
        toolbarBody: ()=>
        cy.get('.mf-protocol-toolbar__content-body'),
        addpatient: () =>
        cy.get('[data-cy="protocol_add_patient_button"]'),
        roleselector: () =>
        cy.get('.mf-role-selector'),
        dropdownTrigger: () =>
        cy.get('[data-test="mf-dropdown"] > [data-test="basic-dropdown-trigger"]'),
        content: () =>
        cy.get('[data-test="basic-dropdown-content-element"]'),
        modal: () =>
        cy.get('.mf-basic-modal__container'),
        btn: () =>
        cy.get('[class="btn btn-primary mf-loading-button ember-view"]'),
        stim: () =>
        cy.get('[data-test="mf-art-protocol-mf-stimsheet"]'),
        toolbarContent: () =>
        cy.get('[class="mf-protocol-toolbar__content"]'),
        textarea: () =>
        cy.get('[data-test="text-area"]'),
        warningbar: () =>
        cy.get('[data-cy="patient_infobar_warnings_bar_container"]'),
        protocolId: () =>
        cy.get('[data-cy="protocol_id_container"]'),
        sideclose: () =>
        cy.get('[class="mf-side-menu-icon-open mf-icon icon-icn_arrows-dropdown-right ember-view"]'),
        sideopen: () =>
        cy.get('[class="mf-side-menu-icon-close mf-icon icon-icn_arrows-dropdown-right ember-view"]'),
        accordian: () =>
        cy.get('[data-test="mf-accordion-menu-menu-item"]'),
        title: () =>
        cy.get('.mf-main-title'),
        status: () =>
        cy.get('[class="mf-status-color-dropdown ember-view"]'),
        confirmation: () =>
        cy.get('[data-test="mf-confirmation-modal"]'),
        pagebody: () =>
        cy.get('.bm-content'),
        labaction: () =>
        cy.get('[class="mf-lab-results-batch-actions"]'),
        fileinput: () =>
        cy.get('input[type=file]'),
        popupinput: () =>
        cy.get('[class="mf-input form-group ember-view"]'),
        document: () =>
        cy.get('[data-test="mf-documents-documents-dropzone"]'),
        viewer: () =>
        cy.get('.document-viewer'),
        breadcrumb: () =>
        cy.get('[class="breadcrumb-item dropdown"]'),
        dropdownmenu: () =>
        cy.get('[class="dropdown-menu"]'),
        formlist: () =>
        cy.get('[data-test="mf-form-list"]'),
        view: () =>
        cy.get('[class="btn btn-default entire-width ember-view"]'),
        formpage: () =>
        cy.get('.form-page'),
        textfield: () =>
        cy.get('[data-test="text-field"]'),
        savebtn: () =>
        cy.get('.save'),
        dismiss: () =>
        cy.get('.action'),
        topname: () =>
        cy.get('.breadcrumb-link'),
        info: () =>
        cy.get('.mf-patient-infobar__container'),
        allergy: () =>
        cy.get('.icon-icn_allergy_alert'),
        assesment: () =>
        cy.get('[class="mf-patient-assessment"]'),
        encounter: () =>
        cy.get('[data-test="mf-overview-encounters-mf-overview-encounters-wrapper"]'),
        panelfooter: () =>
        cy.get('.panel-footer-container'),
        addprocedure: () =>
        cy.get('[class="btn btn-icon separate-bottom-md no-border-radio"]'),
        appointmenttype: () =>
        cy.get('[class="col-xs-3 mf-encounter-item__metadata"]'),
        encfooter: () =>
        cy.get('[class="col-xs-12 mf-new-encounter-encounteritem__footer-right"]'),
        stimsheet: () =>
        cy.get('[class="btn btn-primary ember-view"]'),
        reviewstatus: () =>
        cy.get('[class="with-review-status"]'),
        protocolappointment: () =>
        cy.get('[data-test="mf-art-protocol-mf-stimsheet-appointments-table-row"]'),
        searchholder:() =>
        cy.get('[placeholder="Search"]'),
        dropdowncontent: () =>
        cy.get('[class="mf-action-menu__list-item   "]'),
        taskdetails: () =>
        cy.get('[placeholder="Enter task details"]'),
        notes: () =>
        cy.get('[placeholder="Notes"]'),
        placeholderteam: () =>
        cy.get('[placeholder="Select professionals or teams"]'),
        filteruse: () =>
        cy.get('[class="mf-filter-user-item ember-view"]'),
        hamburger: () =>
        cy.get('[class="mf-icon icon-icn_navbar_hamburguer ember-view"]'),
        task: () =>
        cy.get('[href="/tasks/open"]'),
        dropdownmultiple: () =>
        cy.get('[data-test="mf-dropdown-multiple"]'),
        tbody: () =>
        cy.get('tbody'),
        icon: () =>
        cy.get('[class="btn btn-icon mf-event-collection__add separate-top-md"]'),
        h4: () =>
        cy.get('h4'),
        labresults: () =>
        cy.get('[href="/review-lab-results"]'),
        deletebtn: () =>
        cy.get('[class="mf-icon__delete mf-icon icon-icn_deleted ember-view"]'),
        selectplace: () =>
        cy.get('.ember-power-select-placeholder'),
        laboverview: () =>
        cy.get('[data-test="mf-overview-lab-results"]'),
        multipleactions: () =>
        cy.get('.mf-multiple-search-actions'),
        dateboot: () =>
        cy.get('[data-test="bootstrap-datepicker"]'),
        activity: () =>
        cy.get('[data-test="breadcrumb-todays-activities"]'),
        modaloverlay: () =>
        cy.get('.modal-overlay'),
        inputsearch: () =>
        cy.get('.mf-filter-select-input'),
        trigdown: () =>
        cy.get('[data-test="basic-dropdown-trigger"]'),
        rsctable: () =>
        cy.get('[data-test="mf-schedule-resources-table"]'),
        testdate: () =>
        cy.get('[data-test="date-picker"]'),
        closecalendar: () =>
        cy.get('.close-calendar'),
        tablecell: () =>
        cy.get('.mf-protocol-appointment-table-cell'),


        accordianmenu: () =>
        cy.get('.mf-accordion-menu-link'),
        notesoverview: () =>
        cy.get('.mf-overview-notes'),
        noteitem: () =>
        cy.get('.mf-note-item'),
        editor: () =>
        cy.get('.mf-richtext-editor__panel-icon'),
        savenote: () =>
        cy.get('[data-test="save-note"]'),
        indicator: () =>
        cy.get('.mf-richtext-editor__commands-indicator'),
        addlabresult: ()=>
        cy.get('[class="btn btn-icon separate-top-md"]'),
        panelbody: () =>
        cy.get('.panel-body'),
        modalpopup: () =>
        cy.get('.mf-modal'),
        modaltrigger: () =>
        cy.get('.mf-modal [data-test="basic-dropdown-trigger"]'),
        panel: () =>
        cy.get('.panel'),
        editprop: () =>
        cy.get('[data-test="mf-edit-prop"] > [data-test="text-field"]'),
        tick: ()=>
        cy.get('.icon-icn_completed'),
        titletext: () =>
        cy.get('.title-text'),
        tasktitle: () =>
        cy.get('.task-title'),
        avatar: () =>
        cy.get('[data-test="mf-tasks-column-assigned-to"] > [data-test="mf-multiple-avatar"]'),
        deleteable: () =>
        cy.get('[data-test="mf-deletable-item"]'),
        modalselected: () =>
        cy.get('.mf-basic-modal__container .ember-power-select-selected-item'),


        professionaltab: () =>
        cy.get('[href="#cycleTabProfessionals"]'),
        professionals: () =>
        cy.get('[data-test="mf-patient-professional-relationship"]'),
        addprofessional: () =>
        cy.get('[data-test="mf-professional-search"]'),
        newtaskbtn: () =>
        cy.get('[class="add-new-task"]'),
        taskdate: () =>
        cy.get('[placeholder="Enter date"]'),
        tasktoday: () =>
        cy.get('[class="datepicker-days"]').find('[class="today day"]'),
        taskplaceholder: () =>
        cy.get('[class="ember-power-select-placeholder"]'),
        firstobj: () =>
        cy.get('[data-test="power-select-options"]').find('[data-option-index="1"]'),
        associated: () =>
        cy.get('[class="mf-filter-user-item__container-name"]').contains('Professionals Associated with Patient'),
        toggle: () =>
        cy.get('[class="dropdown-toggle "]'),
        link: () =>
        cy.get('[data-test="link-to"]'),
        checkbox: () =>
        cy.get('[data-test="checkbox"]'),
        role: () =>
        cy.get('[role="menuitem"]')

    }
} export default appointment