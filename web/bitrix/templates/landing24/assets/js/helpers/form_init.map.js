{"version":3,"sources":["form_init.js"],"names":["BX","addCustomEvent","event","selector","makeRelativeSelector","block","querySelectorAll","length","window","id","LandingForm","initForm","currentForm","attr","data","replace","dataFormId","onFormRemove","dataAttributeShowHeader","Object","keys","formOptions","css","content","matchShowHeader","onFormReload","dataAttributeUseStyle","createFormOptions","document","this","dataAttributeDomain","dataAttributePrefix","dataAttributeIsConnector","hideHeaderString","hideBitrixLogoString","paddingFixesString","domainNode","findChild","attribute","isFormChosen","domain","initFormLoader","createFullDomain","styleParams","wrapper-padding","params","bg","bg-content","bg-block","main-bg","main-border-color","main-font-family","main-font-color","main-font-color-hover","main-font-weight","second-font-color","icon-font-color","button-font-color","header-font-size","header-font-weight","header-text-font-size","label-font-size","border-block","input-bg","input-box-shadow","input-select-bg","input-border","input-border-radius","input-border-color","input-border-hover","agreement-label-font-size","styles","selectors",".crm-webform-wrapper, .content-wrap","body.crm-webform-iframe",".content",".crm-webform-block",".crm-webform-header-container",".crm-webform-header-container h2",".crm-webform-inner-header",".crm-webform-mini-cart-title, .crm-webform-mini-cart-services-container",".crm-webform-header",".crm-webform-label","button.crm-webform-submit-button, .crm-webform-file-upload .crm-webform-file-button",".crm-webform-label-content, .crm-webform-file-text-field",".crm-webform-input-label",".crm-webform-input, .crm-webform-file-text-field",".crm-webform-icon",".crm-webform-desktop-font-style a",".crm-webform-desktop-font-style a:hover",".crm-webform-input option",".crm-webform-active .crm-webform-input, .crm-webform-active mark, .crm-webform-input:hover",".crm-webform-checkbox-container:hover i",".crm-webform-checkbox-name",".crm-webform-input+i:after",".crm-webform-agreement-modifier .crm-webform-checkbox-name","formParams","prototype","b24Forms","i","c","w","d","u","b","arguments","ref","forms","push","s","createElement","r","Date","async","src","h","getElementsByTagName","parentNode","insertBefore","createNoFormMessage","createFormParams","proxy","onFormFrameLoad","addFormInLoader","Bitrix24FormLoader","init","preLoad","Landing","getMode","formContainer","querySelector","alertHtml","message","messageNode","create","tag","props","className","html","adjust","children","formCode","formParts","split","lang","sec","type","node","b24form","removeFormFromLoader","Bitrix24FormObject","forEach","form","uniqueLoadId","ie","postMessage","messageDomain","match","frameParameters","options","iframe","contentWindow","JSON","stringify","unload","fullDomain","isUsingCustomStyle","cssContent","createFormOptionsCss","cssFiles","createFormOptionsCssFiles","file","createHideBitrixLabelCss","createPaddingFixesCss","files","readFormStyles","cssString","cssStringCurrent","style","delegate","param","value","string","Array"],"mappings":"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","file":""}