import Button, { ButtonSize } from "./components/Button/button";
import { ButtonType } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ButtonType.Link} href={'www.baidu.com'}>i am a link baidu</Button>
        <Button btnType={ButtonType.Link} href={'www.baidu.com'} disabled>i am a link baidu</Button>
        <Button btnType={ButtonType.Default}>i am a button</Button>
        <Button btnType={ButtonType.Primary} disabled>i am a button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>i am a large button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>i am a large button</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
