setTimeout(function() {
  const flowMatic = document.querySelector("flow-matic[data-comp*='self_sign_up/new_event_creator']");
  const shadow = flowMatic.shadowRoot;
  const signUpButton = shadow.querySelector('button');

  if (!window.GEOTIX_SELF_SIGN_UP_LOADED) {
    window.GEOTIX_SELF_SIGN_UP_LOADED = true;

    const dialogFlow = flowMatic.cloneNode(true);

    shadow.getElementById('sign_up_form').remove();
    document.body.appendChild(dialogFlow);

    dialogFlow.addEventListener('flow-matic-loaded', function() {
      const dialogShadow = dialogFlow.shadowRoot;
      dialogShadow.querySelector('button').remove();
      const dialog = dialogShadow.getElementById('sign_up_form');

      signUpButton.addEventListener('click', function() {
        dialog.classList.remove('v-hidden');
        dialog.classList.remove('mdc-dialog--open');
        dialog.vComponent.open();
      });
    });
  }
}, 100);
