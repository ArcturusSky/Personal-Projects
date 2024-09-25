const vscode = require('vscode');

function activate(context) {
    console.log('Doctest Style Extension is now active');

    let disposable = vscode.workspace.onDidOpenTextDocument(document => {
        if (document.languageId === 'plaintext' && document.fileName.endsWith('.txt')) {
            vscode.languages.setTextDocumentLanguage(document, 'doctest');
        }
    });

    context.subscriptions.push(disposable);

    // Also apply to all currently open text documents
    vscode.workspace.textDocuments.forEach(document => {
        if (document.languageId === 'plaintext' && document.fileName.endsWith('.txt')) {
            vscode.languages.setTextDocumentLanguage(document, 'doctest');
        }
    });
}

module.exports = { activate };