import ExampleTheme from "./themes/ExampleTheme";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import {HeadingNode, QuoteNode, registerRichText} from "@lexical/rich-text";
import {TableCellNode, TableNode, TableRowNode} from "@lexical/table";
import {ListItemNode, ListNode} from "@lexical/list";
import {CodeHighlightNode, CodeNode} from "@lexical/code";
import {AutoLinkNode, LinkNode} from "@lexical/link";
import {LinkPlugin} from "@lexical/react/LexicalLinkPlugin";
import {ListPlugin} from "@lexical/react/LexicalListPlugin";
import {MarkdownShortcutPlugin} from "@lexical/react/LexicalMarkdownShortcutPlugin";
import {TRANSFORMERS} from "@lexical/markdown";

import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";

function Placeholder() {
    return <div className="editor-placeholder">Enter some rich text...</div>;
}

export default async function EditorRender({dataToRender}) {

    const editorConfig = {
        editable: false,
        editorState: dataToRender,
        theme: ExampleTheme,
        // Handling of errors during update
        onError(error) {
            throw error;
        },
        // Any custom nodes go here
        nodes: [
            HeadingNode,
            ListNode,
            ListItemNode,
            QuoteNode,
            CodeNode,
            CodeHighlightNode,
            TableNode,
            TableCellNode,
            TableRowNode,
            AutoLinkNode,
            LinkNode
        ]
    };
    return (
        <LexicalComposer initialConfig={editorConfig}>
            <div className="editor-container">
                <div className="editor-inner">
                    <RichTextPlugin
                        contentEditable={<ContentEditable className="editor-input"/>}
                        placeholder={<Placeholder/>}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    {/*<TreeViewPlugin />*/}
                    <CodeHighlightPlugin/>
                    <ListPlugin/>
                    <LinkPlugin/>
                    <AutoLinkPlugin/>
                    <ListMaxIndentLevelPlugin maxDepth={7}/>
                    <MarkdownShortcutPlugin transformers={TRANSFORMERS}/>
                </div>
            </div>
        </LexicalComposer>
    );
}
