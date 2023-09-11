import Code from "@editorjs/code";
import Header from "@editorjs/header";
import Embed from '@editorjs/embed';
const Checklist = require('@editorjs/checklist');
import ImageTool from '@editorjs/image';

export const EDITOR_TOOLS = {
    code: Code,
    header: Header,
    embed: Embed,
    checklist: Checklist,
    image: {
        class: ImageTool,
        config: {
            endpoints: {
                byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
            }
        }
    }

};
