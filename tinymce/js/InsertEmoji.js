function init() {
	if (tinymce.isIE) {
		tinymce.get('content').focus();
		tinymce.activeEditor.windowManager.bookmark = tinyMCE.activeEditor.selection.getBookmark();
	}
	tinyMCEPopup.resizeToInnerSize();
}

function emojiinsert(icon) {
    emojione.ascii = true;
    
    imgcode = icon.split('.');
    shortname = emoUnis[imgcode[0]];
    console.log(imgcode[0]);
    console.log('shortname:'+shortname);
    
	var icontag = '<img class="emojione" src="'+meo_emojionedomain+'icons/'+icon+'" width="'+document.getElementById('iconsize').value+'" height="'+document.getElementById('iconsize').value+'" alt="'+shortname+'" />';

	if (parent.tinymce.isIE) {
		parent.tinymce.activeEditor.focus();
		parent.tinymce.activeEditor.selection.moveToBookmark(parent.tinymce.EditorManager.activeEditor.windowManager.bookmark);
	}

//	window.tinymce.execInstanceCommand('content', 'mceInsertContent', false, icontag);
	if ('function' === typeof window.tinymce.EditorCommands.execCommand) {
		// TinyMCE 3.x
		window.tinymce.EditorCommands.execCommand('content', 'mceInsertContent', false, icontag);
	} else {
		// TinyMCE 4.x
		tinymce.execCommand('mceInsertContent', false, icontag);
	}

	tinyMCEPopup.editor.execCommand('mceRepaint');
	tinyMCEPopup.close();
	return;
}
