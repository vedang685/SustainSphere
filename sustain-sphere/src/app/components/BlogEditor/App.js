import "./styles.css";
import Editor from "./Editor";

export default function AppTest({ onEditorStateChange }) {
  return (
    <div className="App">
      <Editor onEditorStateChange={onEditorStateChange}  />
    </div>
  );
}
