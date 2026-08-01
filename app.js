const choiceOptions = [...document.querySelectorAll('.choice-option')];
    const frame = document.querySelector('.frame');
    const screenImage = document.querySelector('#screen-image');
    const initialScreen = screenImage.src;
    const resultScreen = 'assets/images/Frame17.png';
    const retryScreen = 'assets/svg/download-1.svg';
    const helpButton = document.querySelector('.help-button');
    const backButton = document.querySelector('.back-button');
    const reselectButton = document.querySelector('.reselect-button');
    const shareButton = document.querySelector('.share-button');
    const downloadClose = document.querySelector('.download-close');
    const retryConfirm = document.querySelector('.retry-confirm');

    choiceOptions.forEach((option) => {
      option.addEventListener('click', () => {
        choiceOptions.forEach((item) => {
          const selected = item === option;
          item.classList.toggle('is-selected', selected);
          item.setAttribute('aria-pressed', String(selected));
        });
      });
    });

    helpButton.addEventListener('click', () => {
      frame.classList.add('is-result');
      screenImage.src = resultScreen;
      screenImage.alt = '帮我选出的烧烤结果';
    });

    const returnToChoices = () => {
      frame.classList.remove('is-result', 'is-download', 'is-reselect');
      screenImage.src = initialScreen;
      screenImage.alt = '今天想吃什么选择界面';
    };

    backButton.addEventListener('click', returnToChoices);

    downloadClose.addEventListener('click', () => {
      frame.classList.remove('is-download');
      screenImage.src = resultScreen;
      screenImage.alt = '帮我选出的烧烤结果';
    });

    shareButton.addEventListener('click', () => {
      frame.classList.add('is-download');
      screenImage.src = 'assets/svg/download.svg';
      screenImage.alt = '分享或保存结果';
    });

    reselectButton.addEventListener('click', () => {
      frame.classList.add('is-reselect');
      screenImage.src = retryScreen;
      screenImage.alt = '重新选择提示';
      choiceOptions.forEach((item) => {
        const selected = item.dataset.choice === 'random';
        item.classList.toggle('is-selected', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
    });

    retryConfirm.addEventListener('click', () => {
      returnToChoices();
      choiceOptions.forEach((item) => {
        const selected = item.dataset.choice === 'struggle';
        item.classList.toggle('is-selected', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
    });
