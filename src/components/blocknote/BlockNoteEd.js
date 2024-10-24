'use client';

import { BlockNoteView, getDefaultReactSlashMenuItems, useBlockNote } from '@blocknote/react';
import '@blocknote/core/style.css';

// Our <Editor> component we can reuse later
// Gets the previously stored editor contents.
const initialContent = localStorage.getItem('editorContent');

export default function Editor() {
  // Creates a new editor instance.
  const newSlashMenuItems = getDefaultReactSlashMenuItems();
  console.log(newSlashMenuItems);
  const editor = useBlockNote({
    // If the editor contents were previously saved, restores them.
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    // Serializes and saves the editor contents to local storage.
    onEditorContentChange: (edits) => {
      localStorage.setItem('editorContent', JSON.stringify(edits.topLevelBlocks));
      const saveBlocksAsHTML = async () => {
        const html = await edits.blocksToHTML(edits.topLevelBlocks);
        localStorage.setItem('editorhtml', html);
      };
      saveBlocksAsHTML();
    },
    defaultStyles: false,
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}
