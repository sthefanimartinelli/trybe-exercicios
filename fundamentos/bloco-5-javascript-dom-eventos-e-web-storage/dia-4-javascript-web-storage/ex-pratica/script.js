window.onload = function() {
    // 1. Alterar cor de fundo da tela:
    let select = document.querySelector('select');
    select.addEventListener('change', function(){
        let selected = select.selectedOptions[0].value;
        document.body.style.backgroundColor = selected;
        localStorage.setItem('Ex.5.4-background-color', selected);    
    });

    // 2. Alterar cor do texto:
    let selectCorDaFonte = document.querySelector('select#corDaFonte');
    selectCorDaFonte.addEventListener('change', function(){
        let corDaFonteSelected = selectCorDaFonte.selectedOptions[0].value;
        document.body.style.color = corDaFonteSelected;
        localStorage.setItem('Ex.5.4-font-color', corDaFonteSelected);
    });

    // 3. Alterar o tamanho da fonte:
    let inputFontSize = document.querySelector('input[name="font-size"]');
    inputFontSize.addEventListener('change', function(){
        let paragraph = document.querySelector('p');
        paragraph.style.fontSize = `${inputFontSize.value}px`;
        localStorage.setItem('Ex.5.4-font-size', `${inputFontSize.value}px`);
    });

    // 4. Alterar o espaçamento entre as linhas do texto
    let inputLineHeight = document.querySelector('#lineHeight');
    inputLineHeight.addEventListener('change', function(){
        document.body.style.lineHeight = `${inputLineHeight.value}px`;
        localStorage.setItem('Ex.5.4-line-height');
    });

    // 5. Alterar o tipo da fonte (font family)
    let selectFontFamily = document.querySelector('select[name="font-family"]');
    selectFontFamily.addEventListener('change', function(){
        let fontFamily = selectFontFamily.selectedOptions[0].value;
        document.body.style.fontFamily = fontFamily;
        localStorage.setItem('Ex.5.4-font-family');
    });


    let savedBackground = localStorage.getItem('Ex.5.4-background-color');
    document.body.style.backgroundColor = savedBackground;

    let savedFontColor = localStorage.getItem('Ex.5.4-font-color');
    document.body.style.color = savedFontColor;

    let savedFontSize = localStorage.getItem('Ex.5.4-font-size');
    let paragraph = document.querySelector('p');
    paragraph.style.fontSize = savedFontSize;

    let savedLineHeight = localStorage.getItem('Ex.5.4-line-height');
    document.body.style.lineHeight = savedLineHeight;

    let savedFontFamily = localStorage.getItem('Ex.5.4-font-family');
    document.body.style.fontFamily = savedFontFamily;
}