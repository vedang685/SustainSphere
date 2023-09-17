import "./styles.css";
import Editor from "./Editor";
import EditorRender from "./BlogRender";

export default function AppRender({ onEditorStateChange }) {
    return (
        <div className="AppRender">
            <EditorRender onEditorStateChange={onEditorStateChange} />
        </div>
    );
}
