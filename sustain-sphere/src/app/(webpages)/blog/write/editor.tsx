'use client'

import { FC, useState } from 'react'
import { Editor, EditorState } from 'draft-js'

const MyEditor: FC = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    
    const onChange = (state: EditorState) => {
        setEditorState(state)
    }
    
    return (
        <Editor
        editorState={editorState}
        onChange={onChange}
        />
    )
    }

    export default MyEditor